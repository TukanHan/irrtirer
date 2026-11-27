import { describe, expect, it } from 'vitest';
import { elem } from './elem-builder';

describe('ElemBuilder', () => {
    it('self-closes an empty custom element', () => {
        const template = elem('lorem-ipsum').build();

        expect(template).toBe('<lorem-ipsum />');
    });

    it('keeps an empty native element open', () => {
        const template = elem('div').build();

        expect(template).toBe('<div></div>');
    });

    it.each([
        { value: 'dolor', expected: '<x-el foo="dolor" />' },
        { value: 'say "hi"', expected: '<x-el foo="say &quot;hi&quot;" />' },
        { value: true, expected: '<x-el foo />' },
        { value: 12, expected: '<x-el [foo]="12" />' },
        { value: ['a', 'b'], expected: '<x-el [foo]="[&quot;a&quot;,&quot;b&quot;]" />' },
    ])('renders input value $value as a hard-coded attribute', ({ value, expected }) => {
        const template = elem('x-el').withInput('foo', value).build();

        expect(template).toBe(expected);
    });

    it.each([{ value: undefined }, { value: null }, { value: false }])('omits input value $value', ({ value }) => {
        const template = elem('x-el').withInput('foo', value).build();

        expect(template).toBe('<x-el />');
    });

    it('omits an input equal to its default value', () => {
        const template = elem('x-el').withInput('variant', 'neutral', 'neutral').build();

        expect(template).toBe('<x-el />');
    });

    it('renders bindings, outputs and plain attributes in call order', () => {
        const template = elem('x-el')
            .withBinding('items', 'list')
            .withOutput('clicked')
            .withOutput('closed', "value.set('')")
            .withAttribute('role', 'note')
            .withAttribute('idsPrefix')
            .build();

        expect(template).toBe(`<x-el [items]="list" (clicked)="clicked($event)" (closed)="value.set('')" role="note" idsPrefix />`);
    });

    it('joins classes into one attribute placed first and skips empty ones', () => {
        const template = elem('x-el').withInput('foo', 'bar').withClass('a', null, undefined, false).withClass('b').build();

        expect(template).toBe('<x-el class="a b" foo="bar" />');
    });

    it('joins styles into one attribute placed after classes and skips empty values', () => {
        const template = elem('x-el')
            .withInput('foo', 'bar')
            .withStyle('--x-color', 'red')
            .withStyle('--x-size', '')
            .withStyle('--x-gap', null)
            .withStyle('--x-width', '2px')
            .withClass('a')
            .build();

        expect(template).toBe('<x-el class="a" style="--x-color: red; --x-width: 2px" foo="bar" />');
    });

    it('keeps a single line of text inline', () => {
        const template = elem('x-el').withContent('Lorem ipsum').build();

        expect(template).toBe('<x-el>Lorem ipsum</x-el>');
    });

    it('indents child elements and skips falsy content', () => {
        const template = elem('x-el').withContent(false, elem('x-child').withContent('Lorem'), null, 'ipsum', undefined).build();

        expect(template).toBe(['<x-el>', '    <x-child>Lorem</x-child>', '    ipsum', '</x-el>'].join('\n'));
    });

    it('applies a conditional step only when the condition holds', () => {
        const template = elem('x-el')
            .when(true, (x) => x.withClass('on'))
            .when(false, (x) => x.withClass('off'))
            .build();

        expect(template).toBe('<x-el class="on" />');
    });
});
