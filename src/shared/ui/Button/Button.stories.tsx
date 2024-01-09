import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonProps, ThemeButton } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ThemeEnum } from '@/app/providers/ThemeProvider';

export default {
  title: 'shared/button',
  component: Button,
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const createThemedButtonStory = (
  theme: ThemeButton,
  args: ButtonProps = { children: 'button', theme },
  decoratorTheme: ThemeEnum = ThemeEnum.LIGHT,
) => ({
  ...Template.bind({}),
  args,
  decorators: [ThemeDecorator(decoratorTheme)],
});

export const ClearLight = createThemedButtonStory(ThemeButton.CLEAR);
export const ClearDark = createThemedButtonStory(ThemeButton.CLEAR, undefined, ThemeEnum.DARK);

export const OutlineLight = createThemedButtonStory(ThemeButton.OUTLINE);
export const OutlineDark = createThemedButtonStory(ThemeButton.OUTLINE, undefined, ThemeEnum.DARK);
