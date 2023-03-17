import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ThemeList } from 'app/providers/ThemeProvider/lib/ThemeContext';

import { LangSwitcher } from 'widgets/LangSwitcher';

export default {
    title: 'widgets/LangSwitcher',
    component: LangSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LangSwitcher>;

const TemplateLight: ComponentStory<typeof LangSwitcher> = (args) => (
    <ThemeProvider initialTheme={ThemeList.LIGHT}>
        <div className={`app ${ThemeList.LIGHT}`}>
            <LangSwitcher {...args} />
        </div>
    </ThemeProvider>
);
const TemplateDark: ComponentStory<typeof LangSwitcher> = (args) => (
    <ThemeProvider initialTheme={ThemeList.DARK}>
        <div className={`app ${ThemeList.DARK}`}>
            <LangSwitcher {...args} />
        </div>
    </ThemeProvider>
);

export const Light = TemplateLight.bind({});
Light.args = {};

export const Dark = TemplateDark.bind({});
Dark.args = {};
