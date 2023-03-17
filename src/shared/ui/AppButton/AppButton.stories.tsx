import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ThemeList } from 'app/providers/ThemeProvider/lib/ThemeContext';
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

const TemplateLight: ComponentStory<typeof AppButton> = (args) => (
    <ThemeProvider initialTheme={ThemeList.LIGHT}>
        <div className={`app ${ThemeList.LIGHT}`}>
            <AppButton {...args}>Button</AppButton>
        </div>
    </ThemeProvider>
);
const TemplateDark: ComponentStory<typeof AppButton> = (args) => (
    <ThemeProvider initialTheme={ThemeList.DARK}>
        <div className={`app ${ThemeList.DARK}`}>
            <AppButton {...args}>Button</AppButton>
        </div>
    </ThemeProvider>
);
const TemplateLightSquare: ComponentStory<typeof AppButton> = (args) => (
    <ThemeProvider initialTheme={ThemeList.LIGHT}>
        <div className={`app ${ThemeList.LIGHT}`}>
            <AppButton square {...args}>[+]</AppButton>
        </div>
    </ThemeProvider>
);

export const Contained = TemplateLight.bind({});
Contained.args = {
    children: 'Button',
    variant: AppButtonVariant.CONTAINED,
};

export const Clear = TemplateLight.bind({});
Clear.args = {
    children: 'Button',
    variant: AppButtonVariant.CLEAR,
};

export const Outlined = TemplateLight.bind({});
Outlined.args = {
    children: 'Button',
    variant: AppButtonVariant.OUTLINED,
};

export const OutlinedDark = TemplateDark.bind({});
OutlinedDark.decorators = [ThemeDecorator(ThemeList.DARK)];
OutlinedDark.args = {
    children: 'Button',
    variant: AppButtonVariant.OUTLINED,
};

export const Primary = TemplateLight.bind({});
Primary.args = {
    children: 'Button',
    color: AppButtonColor.PRIMARY,
};

export const PrimaryInverted = TemplateLight.bind({});
PrimaryInverted.args = {
    children: 'Button',
    color: AppButtonColor.PRIMARY_INVERTED,
};

export const Secondary = TemplateLight.bind({});
Secondary.args = {
    children: 'Button',
    color: AppButtonColor.SECONDARY,
};
export const SecondaryInverted = TemplateLight.bind({});
SecondaryInverted.args = {
    children: 'Button',
    color: AppButtonColor.SECONDARY_INVERTED,
};

export const SquareSecondaryInverted = TemplateLightSquare.bind({});
SquareSecondaryInverted.args = {
    color: AppButtonColor.SECONDARY_INVERTED,
};

export const SizeMOutlined = TemplateLightSquare.bind({});
SizeMOutlined.args = {
    variant: AppButtonVariant.OUTLINED,
    size: AppButtonSize.M,
};

export const SizeLOutlined = TemplateLightSquare.bind({});
SizeLOutlined.args = {
    variant: AppButtonVariant.OUTLINED,
    size: AppButtonSize.L,
};

export const SizeXLOutlined = TemplateLightSquare.bind({});
SizeXLOutlined.args = {
    variant: AppButtonVariant.OUTLINED,
    size: AppButtonSize.XL,
};
