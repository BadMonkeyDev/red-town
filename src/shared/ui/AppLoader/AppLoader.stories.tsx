import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ThemeList } from 'app/providers/ThemeProvider/lib/ThemeContext';

import { AppLoader } from './AppLoader';

export default {
    title: 'shared/AppLoader',
    component: AppLoader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppLoader>;

const TemplateLight: ComponentStory<typeof AppLoader> = (args) => (
    <ThemeProvider initialTheme={ThemeList.LIGHT}>
        <div className={`app ${ThemeList.LIGHT}`}>
            <AppLoader {...args} />
        </div>
    </ThemeProvider>
);
const TemplateDark: ComponentStory<typeof AppLoader> = (args) => (
    <ThemeProvider initialTheme={ThemeList.DARK}>
        <div className={`app ${ThemeList.DARK}`}>
            <AppLoader {...args} />
        </div>
    </ThemeProvider>
);

export const Light = TemplateLight.bind({});
Light.args = {};

export const Dark = TemplateDark.bind({});
Dark.args = {};
