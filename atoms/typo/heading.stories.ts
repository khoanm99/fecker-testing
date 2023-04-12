import type { Meta, StoryObj } from '@storybook/react';
import Heading from '../typo/heading';

const meta: Meta<typeof Heading> = {
  title: 'Atoms / Heading',
  component: Heading,
  tags: ['autodocs'], // for display Doc Tag on storybook
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const DefaultHeading: Story = {
  args: {
    renderAs: 'h1',
    size: 'h1',
    title: 'Sample Heading 1'
  }
};

export const Primary: Story = {
  args: {
    renderAs: 'h2',
    size: 'h2',
    title: 'Sample Heading 2',
    variant: 'hover-green'
  }
};
