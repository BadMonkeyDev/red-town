import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ThemeList } from 'app/providers/ThemeProvider/lib/ThemeContext';

import { NotFoundPage } from './NotFoundPage';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFoundPage>;

const TemplateLight: ComponentStory<typeof NotFoundPage> = (args) => (
    <ThemeProvider initialTheme={ThemeList.LIGHT}>
        <div className={`app ${ThemeList.LIGHT}`}>
            <NotFoundPage {...args} />
        </div>
    </ThemeProvider>
);
const TemplateDark: ComponentStory<typeof NotFoundPage> = (args) => (
    <ThemeProvider initialTheme={ThemeList.DARK}>
        <div className={`app ${ThemeList.DARK}`}>
            <NotFoundPage {...args} />
        </div>
    </ThemeProvider>
);

export const Light = TemplateLight.bind({});
Light.args = {};

export const Dark = TemplateDark.bind({});
Dark.args = {};
