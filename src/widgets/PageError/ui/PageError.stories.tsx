import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ThemeList } from 'app/providers/ThemeProvider/lib/ThemeContext';

import { PageError } from 'widgets/PageError';

export default {
    title: 'widgets/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageError>;

const TemplateLight: ComponentStory<typeof PageError> = (args) => (
    <ThemeProvider initialTheme={ThemeList.LIGHT}>
        <div className={`app ${ThemeList.LIGHT}`}>
            <PageError {...args} />
        </div>
    </ThemeProvider>
);
const TemplateDark: ComponentStory<typeof PageError> = (args) => (
    <ThemeProvider initialTheme={ThemeList.DARK}>
        <div className={`app ${ThemeList.DARK}`}>
            <PageError {...args} />
        </div>
    </ThemeProvider>
);

export const Light = TemplateLight.bind({});
Light.args = {};

export const Dark = TemplateDark.bind({});
Dark.args = {};
