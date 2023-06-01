import { Meta } from "@storybook/react";
import StepItem, {
  StepItemProps,
} from "../../../../../components/molecules/StepItem";
export default {
  title: "Components/Molecules/StepItem",
  component: StepItem,
} as Meta;

const Template = (args: StepItemProps) => <StepItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Super Chad",
  icon: "step1",
  desc1: "asds",
  desc2: "sad",
};
