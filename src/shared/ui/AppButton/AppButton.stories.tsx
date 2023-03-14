import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import {
    AppButton, AppButtonColor, AppButtonSize, AppButtonVariant,
} from './AppButton';

export default {
    title: 'shared/AppButton',
    component: AppButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Contained = Template.bind({});
Contained.args = {
    children: 'Button',
    variant: AppButtonVariant.CONTAINED,
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button',
    variant: AppButtonVariant.CLEAR,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Button',
    variant: AppButtonVariant.OUTLINED,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
OutlinedDark.args = {
    children: 'Button',
    variant: AppButtonVariant.OUTLINED,
};

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
    color: AppButtonColor.PRIMARY,
};

export const PrimaryInverted = Template.bind({});
PrimaryInverted.args = {
    children: 'Button',
    color: AppButtonColor.PRIMARY_INVERTED,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Button',
    color: AppButtonColor.SECONDARY,
};
export const SecondaryInverted = Template.bind({});
SecondaryInverted.args = {
    children: 'Button',
    color: AppButtonColor.SECONDARY_INVERTED,
};

export const SquareSecondaryInverted = Template.bind({});
SquareSecondaryInverted.args = {
    children: '>',
    color: AppButtonColor.SECONDARY_INVERTED,
    square: true,
};

export const SizeMOutlined = Template.bind({});
SizeMOutlined.args = {
    children: '<',
    square: true,
    variant: AppButtonVariant.OUTLINED,
    size: AppButtonSize.M,
};

export const SizeLOutlined = Template.bind({});
SizeLOutlined.args = {
    children: '<',
    square: true,
    variant: AppButtonVariant.OUTLINED,
    size: AppButtonSize.L,
};

export const SizeXLOutlined = Template.bind({});
SizeXLOutlined.args = {
    children: '<',
    square: true,
    variant: AppButtonVariant.OUTLINED,
    size: AppButtonSize.XL,
};
