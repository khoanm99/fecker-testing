import type { Meta, StoryObj } from '@storybook/react';
import PrimaryButton from '../atoms/button';

const meta: Meta<typeof PrimaryButton> = {
  title: 'Atoms / Button',
  component: PrimaryButton,
  tags: ['autodocs'], // for display Doc Tag on storybook
  argTypes: {
    type: {
      control: {
        type: 'ratio'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof PrimaryButton>;

export const DefaultText: Story = {
  args: {
    title: 'Referenzen ansehen'
  }
};
