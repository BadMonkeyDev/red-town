import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeList } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { AppModal } from './AppModal';

export default {
    title: 'shared/AppModal',
    component: AppModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppModal>;

const TemplateLight: ComponentStory<typeof AppModal> = (args) => (
    <ThemeProvider initialTheme={ThemeList.LIGHT}>
        <div className={`app ${ThemeList.LIGHT}`}>
            <AppModal {...args} />
        </div>
    </ThemeProvider>
);
const TemplateDark: ComponentStory<typeof AppModal> = (args) => (
    <ThemeProvider initialTheme={ThemeList.DARK}>
        <div className={`app ${ThemeList.DARK}`}>
            <AppModal {...args} />
        </div>
    </ThemeProvider>
);

export const Light = TemplateLight.bind({});
Light.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

export const Dark = TemplateDark.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};
