import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeList } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const TemplateLight: ComponentStory<typeof Sidebar> = (args) => (
    <ThemeProvider initialTheme={ThemeList.LIGHT}>
        <div className={`app ${ThemeList.LIGHT}`}>
            <Sidebar {...args} />
        </div>
    </ThemeProvider>
);
const TemplateDark: ComponentStory<typeof Sidebar> = (args) => (
    <ThemeProvider initialTheme={ThemeList.DARK}>
        <div className={`app ${ThemeList.DARK}`}>
            <Sidebar {...args} />
        </div>
    </ThemeProvider>
);

export const Light = TemplateLight.bind({});
Light.args = {};

export const Dark = TemplateDark.bind({});
Dark.args = {};
