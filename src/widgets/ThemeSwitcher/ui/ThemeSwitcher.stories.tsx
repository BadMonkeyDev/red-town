import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeList } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const TemplateLight: ComponentStory<typeof ThemeSwitcher> = (args) => (
    <ThemeProvider initialTheme={ThemeList.LIGHT}>
        <div className={`app ${ThemeList.LIGHT}`}>
            <ThemeSwitcher {...args} />
        </div>
    </ThemeProvider>
);
const TemplateDark: ComponentStory<typeof ThemeSwitcher> = (args) => (
    <ThemeProvider initialTheme={ThemeList.DARK}>
        <div className={`app ${ThemeList.DARK}`}>
            <ThemeSwitcher {...args} />
        </div>
    </ThemeProvider>
);

export const Light = TemplateLight.bind({});
Light.args = {};

export const Dark = TemplateDark.bind({});
Dark.args = {};
