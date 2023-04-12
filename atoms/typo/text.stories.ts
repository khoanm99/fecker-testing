import type { Meta, StoryObj } from '@storybook/react';
import text from '../typo/text';

const meta: Meta<typeof text> = {
  title: 'Atoms / Text',
  component: text,
  tags: ['autodocs'] // for display Doc Tag on storybook
};

export default meta;

type Story = StoryObj<typeof text>;

export const DefaultText: Story = {
  args: {
    renderAs: 'div',
    content: 'Sample Heading 1'
  }
};

export const MenuHeadLine: Story = {
  args: {
    renderAs: 'div',
    size: 'menuHeadline',
    content: 'This is Menu Headline'
  }
};

export const BodyTextSmall: Story = {
  args: {
    renderAs: 'h2',
    size: 'bodyTextSmall',
    content: 'This is body text small'
  }
};

export const BodyText: Story = {
  args: {
    renderAs: 'p',
    size: 'bodyText',
    content: 'This is body text'
  }
};
