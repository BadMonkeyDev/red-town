import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ThemeList } from 'app/providers/ThemeProvider/lib/ThemeContext';

import { AppInput } from './AppInput';

export default {
    title: 'shared/AppInput',
    component: AppInput,
} as ComponentMeta<typeof AppInput>;

const TemplateLight: ComponentStory<typeof AppInput> = (args) => (
    <ThemeProvider initialTheme={ThemeList.LIGHT}>
        <div className={`app ${ThemeList.LIGHT}`}>
            <AppInput {...args} />
        </div>
    </ThemeProvider>
);
const TemplateDark: ComponentStory<typeof AppInput> = (args) => (
    <ThemeProvider initialTheme={ThemeList.DARK}>
        <div className={`app ${ThemeList.DARK}`}>
            <AppInput {...args} />
        </div>
    </ThemeProvider>
);

export const Light = TemplateLight.bind({});
Light.args = {
    value: 'test light',
};

export const LightWithLabelTop = TemplateLight.bind({});
LightWithLabelTop.args = {
    value: 'test light',
    label: 'label text',
    labelPosition: 'top',
};

export const LightWithLabelStart = TemplateLight.bind({});
LightWithLabelStart.args = {
    value: 'test light',
    label: 'label text',
    labelPosition: 'start',
};

export const LightWithLabelEnd = TemplateLight.bind({});
LightWithLabelEnd.args = {
    value: 'test light',
    label: 'label text',
    labelPosition: 'end',
};

export const LightWithLabelTopAndHelp = TemplateLight.bind({});
LightWithLabelTopAndHelp.args = {
    value: 'test light',
    helpText: 'help text',
    label: 'label text',
};

export const LightWithLabelStartAndHelp = TemplateLight.bind({});
LightWithLabelStartAndHelp.args = {
    value: 'test light',
    helpText: 'help text',
    label: 'label text',
    labelPosition: 'start',
};

export const LightWithLabelEndAndHelp = TemplateLight.bind({});
LightWithLabelEndAndHelp.args = {
    value: 'test light',
    helpText: 'help text',
    label: 'label text',
    labelPosition: 'end',
};

export const LightWithLabelTopAndError = TemplateLight.bind({});
LightWithLabelTopAndError.args = {
    value: 'test light',
    error: 'error text',
    label: 'label text',
};

export const LightWithLabelStartAndError = TemplateLight.bind({});
LightWithLabelStartAndError.args = {
    value: 'test light',
    error: 'error text',
    label: 'label text',
    labelPosition: 'start',
};

export const LightWithLabelEndAndError = TemplateLight.bind({});
LightWithLabelEndAndError.args = {
    value: 'test light',
    error: 'error text',
    label: 'label text',
    labelPosition: 'end',
};

export const Dark = TemplateDark.bind({});
Dark.args = {
    value: 'test dark',
};

export const DarkWithLabelTop = TemplateDark.bind({});
DarkWithLabelTop.args = {
    value: 'test dark',
    label: 'label text',
    labelPosition: 'top',
};

export const DarkWithLabelStart = TemplateDark.bind({});
DarkWithLabelStart.args = {
    value: 'test dark',
    label: 'label text',
    labelPosition: 'start',
};

export const DarkWithLabelEnd = TemplateDark.bind({});
DarkWithLabelEnd.args = {
    value: 'test dark',
    label: 'label text',
    labelPosition: 'end',
};

export const DarkWithLabelTopAndHelp = TemplateDark.bind({});
DarkWithLabelTopAndHelp.args = {
    value: 'test dark',
    helpText: 'help text',
    label: 'label text',
};

export const DarkWithLabelStartAndHelp = TemplateDark.bind({});
DarkWithLabelStartAndHelp.args = {
    value: 'test dark',
    helpText: 'help text',
    label: 'label text',
    labelPosition: 'start',
};

export const DarkWithLabelEndAndHelp = TemplateDark.bind({});
DarkWithLabelEndAndHelp.args = {
    value: 'test dark',
    helpText: 'help text',
    label: 'label text',
    labelPosition: 'end',
};

export const DarkWithLabelTopAndError = TemplateDark.bind({});
DarkWithLabelTopAndError.args = {
    value: 'test dark',
    error: 'error text',
    label: 'label text',
};

export const DarkWithLabelStartAndError = TemplateDark.bind({});
DarkWithLabelStartAndError.args = {
    value: 'test dark',
    error: 'error text',
    label: 'label text',
    labelPosition: 'start',
};

export const DarkWithLabelEndAndError = TemplateDark.bind({});
DarkWithLabelEndAndError.args = {
    value: 'test dark',
    error: 'error text',
    label: 'label text',
    labelPosition: 'end',
};
