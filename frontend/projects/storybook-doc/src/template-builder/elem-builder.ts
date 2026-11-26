import { escapeAttribute, indent } from './format';

type ContentPart = string | ElemBuilder | false | null | undefined;

/** Builds an Angular template string for a story, so the Docs snippet shows only the chosen options. */
export class ElemBuilder {
    private readonly classes: string[] = [];
    private readonly attributes: string[] = [];
    private readonly content: (string | ElemBuilder)[] = [];

    constructor(private readonly tag: string) {}

    /** Hard-coded value: `true` → bare attribute; `undefined`, `null`, `false` or the default → omitted. */
    public withInput(name: string, value: unknown, defaultValue?: unknown): this {
        if (value === undefined || value === null || value === false || value === defaultValue) {
            return this;
        }

        if (value === true) {
            this.attributes.push(name);
        } else if (typeof value === 'string') {
            this.attributes.push(`${name}="${escapeAttribute(value)}"`);
        } else {
            this.attributes.push(`[${name}]="${escapeAttribute(JSON.stringify(value))}"`);
        }

        return this;
    }

    /** Wired to an expression evaluated against the story props. */
    public withBinding(name: string, expression: string): this {
        this.attributes.push(`[${name}]="${expression}"`);
        return this;
    }

    /** Without a statement, calls the story prop of the same name: `(name)="name($event)"`. */
    public withOutput(name: string, statement = `${name}($event)`): this {
        this.attributes.push(`(${name})="${statement}"`);
        return this;
    }

    /** Without a value, renders a bare attribute, e.g. a marker directive like `idsPrefix`. */
    public withAttribute(name: string, value?: string): this {
        this.attributes.push(value === undefined ? name : `${name}="${escapeAttribute(value)}"`);
        return this;
    }

    public withClass(...names: (string | null | undefined | false)[]): this {
        this.classes.push(...names.filter((name): name is string => !!name));
        return this;
    }

    /** Strings are raw template fragments, not escaped text. */
    public withContent(...parts: ContentPart[]): this {
        this.content.push(...parts.filter((part): part is string | ElemBuilder => !!part));
        return this;
    }

    public when(condition: boolean, apply: (builder: this) => this): this {
        return condition ? apply(this) : this;
    }

    public build(): string {
        const classAttribute = this.classes.length > 0 ? [`class="${this.classes.join(' ')}"`] : [];
        const opening = [this.tag, ...classAttribute, ...this.attributes].join(' ');
        // Angular allows self-closing only for custom (dashed), void and foreign elements.
        if (this.content.length === 0 && this.tag.includes('-')) {
            return `<${opening} />`;
        }

        const children = this.content.map((part) => (typeof part === 'string' ? part : part.build()));
        const isInline = this.content.length <= 1 && this.content.every((part) => typeof part === 'string' && !part.includes('\n'));

        if (isInline) {
            return `<${opening}>${children.join('')}</${this.tag}>`;
        }

        return `<${opening}>\n${children.map(indent).join('\n')}\n</${this.tag}>`;
    }
}

export function elem(tag: string): ElemBuilder {
    return new ElemBuilder(tag);
}
