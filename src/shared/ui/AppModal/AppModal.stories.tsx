import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppModal } from './AppModal';

export default {
    title: 'shared/AppModal',
    component: AppModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppModal>;

const Template: ComponentStory<typeof AppModal> = (args) => <AppModal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicinlique ore doloribus ullbusdam rem rerum soluta temporibus, tenetur voluptas voluptatibus voluptatum.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisora. A temporlestiae nemo oluptatibus voluptatum.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
