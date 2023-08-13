import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    style: {
      control: "select",
      options: ["primary", "success", "error", "borderless"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
    children: { control: "", name: "Label" },
    isOutline: { control: "boolean", name: "Outline Button" },
    isPending: { control: "boolean", name: "Pending State" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    style: "primary",
    children: "Button",
  },
};

export const Success = {
  args: {
    children: "Button",
    style: "success",
  },
};

export const Error = {
  args: {
    children: "Button",
    style: "error",
  },
};
