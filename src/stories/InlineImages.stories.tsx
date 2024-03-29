import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AvatarDataType } from "../lib/inline-images/types";
import Component from "../lib";
import sampleAvatarImage from "../assets/sample-avatar.svg";

export default {
  title: "Storybook/Component",
  component: Component,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen"
  }
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (props) => (
  <Component {...props} />
);

export const ComponentWithDefaultImage = Template.bind({});
ComponentWithDefaultImage.args = {
  data: [
    {},
    {
      avatarUrl: sampleAvatarImage,
      name: "Jon Dew"
    }
  ],
  totalUserCount: 10,
  elevateOnHover: true,
  showNameOnHover: true
};

export const ComponentWithSpaceInBetweenAndDefaultAvatarImage = Template.bind({});
ComponentWithSpaceInBetweenAndDefaultAvatarImage.args = {
  data: [
    {
      name: "Alice Smith"
    },
    {
      name: "Jon Dew"
    },
    {
      name: "Bob Johnson"
    }
  ],
  spaceBetweenPics: 50,
  variant: "square",
  defaultAvatarImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  showNameOnHover: true,
  styles: {
    Name: () => ({
      color: "blue"
    })
  }
};

export const ComponentWithEventHandlers = Template.bind({});
ComponentWithEventHandlers.args = {
  data: [
    {
      avatarUrl: sampleAvatarImage,
      name: "Jon Dew"
    },
    {
      avatarUrl: sampleAvatarImage,
      name: "Alice Smith"
    },
    {
      avatarUrl: sampleAvatarImage,
      name: "Bob Johnson"
    }
  ],
  totalUserCount: 6,
  elevateOnHover: true,
  showNameOnHover: true,
  onUserClick: (user: AvatarDataType) => {
    alert(`Clicked on user: ${user.name}`);
  },
  onCountClick: () => {
    alert(`Clicked on the additional count`);
  }
};

export const ComponentWithCustomStyles = Template.bind({});
ComponentWithCustomStyles.args = {
  data: [
    {
      avatarUrl: sampleAvatarImage,
      name: "Jon Dew"
    },
    {
      avatarUrl: sampleAvatarImage,
      name: "Alice Smith"
    }
  ],
  totalUserCount: 5,
  variant: "rounded",
  size: 50,
  spaceBetweenPics: 28,
  elevateOnHover: true,
  showNameOnHover: true,
  styles: {
    Avatar: () => ({
      border: "1px solid white"
    }),
    Name: () => ({
      color: "white",
      fontSize: "16px",
      backgroundColor: "grey",
      padding: "5px",
      borderRadius: "10px"
    }),
    ExtraCount: () => ({
      backgroundColor: "yellow",
      border: "1px solid white"
    })
  }
};

export const ComponentWithRenderComponent = Template.bind({});
ComponentWithRenderComponent.args = {
  data: [
    {
      avatarUrl: sampleAvatarImage,
      name: "Jon Dew",
      renderComponent: () => <div>Sample component</div>
    },
    {
      avatarUrl: sampleAvatarImage,
      name: "Alice Smith"
    }
  ],
  totalUserCount: 5,
  elevateOnHover: true,
  showNameOnHover: true
};
