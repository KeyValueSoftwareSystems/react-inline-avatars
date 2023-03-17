import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Component from '../lib';
import avatarImage1 from './avatar-image-1.svg';
import avatarImage2 from './avatar-image-2.svg';
import avatarImage3 from './avatar-image-3.svg';
import avatarImage4 from './avatar-image-4.svg';

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
    avatarUrl: avatarImage1
  },
  {
    avatarUrl: avatarImage2,
    name: 'Jon Dew'
  },
  {
    avatarUrl: avatarImage3
  },
  {
    avatarUrl: avatarImage4
  },
  {

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