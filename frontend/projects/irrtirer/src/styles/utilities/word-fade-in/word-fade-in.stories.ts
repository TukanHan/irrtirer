import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SentenceToWordPipe } from '../../../app/core/pipes/sentence-to-word.pipe';

interface WordFadeInStoryProps {
    phrase: string;
    wordFadeInDelay: number;
    wordFadeInDuration: number;
};

const meta: Meta<WordFadeInStoryProps> = {
    title: 'Style/Animacje/Word Fade In',
    decorators: [
        moduleMetadata({
            imports: [SentenceToWordPipe],
        }),
    ],
    argTypes: {
        phrase: {
            control: 'text',
            description: 'Zdanie do rozbicia na słowa i animacji',
            table: {
                category: 'Content',
            }
        },
        wordFadeInDelay: {
            control: 'number',
            description: 'Opóźnienie animacji dla każdego słowa w sekundach',
            table: {
                defaultValue: { summary: '0.75s' },
                category: 'Content',
            }
        },
        wordFadeInDuration: {
            name: '--word-fade-in-duration',
            control: 'number',
            description: 'Czas trwania animacji dla każdego słowa w sekundach',
            table: {
                defaultValue: { summary: '5s' },
                category: 'CSS Variable',
            }
        },
    },
    parameters: { backgrounds: { disable: true } },
    globals: { theme: 'light', locale: 'pl' },
};

export default meta;
type Story = StoryObj<WordFadeInStoryProps>;

export const Example: Story = {
    args: {
        phrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lorem finibus metus semper placerat. Proin lobortis cursus tortor in sodales.',
        wordFadeInDelay: 0.75,
        wordFadeInDuration: 5,
    },
    render: (args) => {
        return {
            props: args,
            template: `
                <div style="--word-fade-in-duration: ${args.wordFadeInDuration}s">
                    @let words = phrase | sentenceToWord;
                    @for(word of words; track $index) {
                        <span class="word-fade-in" [style.animationDelay]="$index * ${args.wordFadeInDelay} + 's'">
                            {{ word }}
                        </span>
                    }
                </div>
            `,
        };
    },
};
