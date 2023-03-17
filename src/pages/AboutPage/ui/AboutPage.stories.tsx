import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ThemeList } from 'app/providers/ThemeProvider/lib/ThemeContext';

import AboutPage from './AboutPage';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutPage>;

const TemplateLight: ComponentStory<typeof AboutPage> = (args) => (
    <ThemeProvider initialTheme={ThemeList.LIGHT}>
        <div className={`app ${ThemeList.LIGHT}`}>
            <AboutPage {...args} />
        </div>
    </ThemeProvider>
);
const TemplateDark: ComponentStory<typeof AboutPage> = (args) => (
    <ThemeProvider initialTheme={ThemeList.DARK}>
        <div className={`app ${ThemeList.DARK}`}>
            <AboutPage {...args} />
        </div>
    </ThemeProvider>
);

export const Light = TemplateLight.bind({});
Light.args = {};

export const Dark = TemplateDark.bind({});
Dark.args = {};
