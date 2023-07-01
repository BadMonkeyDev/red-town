import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ThemeList } from 'app/providers/ThemeProvider/lib/ThemeContext';

import { LoginForm } from './LoginForm';

export default {
    title: 'features/AuthByUsername/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const TemplateLight: ComponentStory<typeof LoginForm> = (args) => (
    <ThemeProvider initialTheme={ThemeList.LIGHT}>
        <div className={`app ${ThemeList.LIGHT}`}>
            <LoginForm {...args} />
        </div>
    </ThemeProvider>
);
const TemplateDark: ComponentStory<typeof LoginForm> = (args) => (
    <ThemeProvider initialTheme={ThemeList.DARK}>
        <div className={`app ${ThemeList.DARK}`}>
            <LoginForm {...args} />
        </div>
    </ThemeProvider>
);

export const Light = TemplateLight.bind({});
Light.args = {};

export const Dark = TemplateDark.bind({});
Dark.args = {};
