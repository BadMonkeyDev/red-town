import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppButton, AppThemeButton } from './AppButton';

export default {
    title: 'shared/AppButton',
    component: AppButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button',
    theme: AppThemeButton.CLEAR,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Button',
    theme: AppThemeButton.OUTLINED,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
OutlinedDark.args = {
    children: 'Button',
    theme: AppThemeButton.OUTLINED,
};
