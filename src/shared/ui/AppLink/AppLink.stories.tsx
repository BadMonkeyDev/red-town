import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ThemeList } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const TemplateLight: ComponentStory<typeof AppLink> = (args) => (
    <ThemeProvider initialTheme={ThemeList.LIGHT}>
        <div className={`app ${ThemeList.LIGHT}`}>
            <AppLink {...args}>Link</AppLink>
        </div>
    </ThemeProvider>
);
const TemplateDark: ComponentStory<typeof AppLink> = (args) => (
    <ThemeProvider initialTheme={ThemeList.DARK}>
        <div className={`app ${ThemeList.DARK}`}>
            <AppLink {...args}>Link</AppLink>
        </div>
    </ThemeProvider>
);

export const Primary = TemplateLight.bind({});
Primary.args = {
};

export const PrimaryDark = TemplateDark.bind({});
PrimaryDark.args = {
};
PrimaryDark.decorators = [ThemeDecorator(ThemeList.DARK)];

export const Secondary = TemplateLight.bind({});
Secondary.args = {
    theme: AppLinkTheme.SECONDARY,
};

export const SecondaryDark = TemplateDark.bind({});
SecondaryDark.args = {
    theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(ThemeList.DARK)];
