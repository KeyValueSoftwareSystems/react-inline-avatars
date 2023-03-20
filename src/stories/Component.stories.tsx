import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Component from '../lib';
import avatarImage1 from './avatar-image-1.svg';

export default {
    title: 'Storybook/Component',
    component: Component,
    parameters: {
      // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } as ComponentMeta<typeof Component>;

  const Template: ComponentStory<typeof Component> = (props) => <Component {...props} />;

export const ComponentExample = Template.bind({});
ComponentExample.args = {
  data: [{
  },
  {
    avatarUrl: avatarImage1,
    name: 'Jon Dew'
  }],
  totalUserCount: 10,
  elivateOnHover: true,
  nameOnHover: true,
  styles: {
    Name: () => ({
      color: 'green'
    })
  }
};