import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './index';

const meta: Meta<typeof Accordion> = {
  title: 'Molecules / Accordions',
  component: Accordion,
  tags: ['autodocs'], // for display Doc Tag on storybook
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const LayoutMarkdown: Story = {
  args: {
    title: 'Header Accordion With Markdown',
    content:
      'khoa aasdasjdasbd khoa aasdasjdasbdkhoa aasdasjdasbdkhoa aasdasjdasbdkhoa aasdasjdasbdkhoa aasdasjdasbdkhoa aasdasjdasbd',
    index: 0,
    image: {
      url: 'http://localhost:3000/assets/img/dummy-image-square.jpeg',
      alternativeText: 'aaaa',
      width: 300,
      height: 300,
      hash: '',
      mime: '',
      name: '',
      provider: '',
      size: 100
    },
    layout: 'Markdown'
  }
};

export const LayoutGrid: Story = {
  args: {
    title: 'Header Accordion With Grid',
    content:
      'khoa aasdasjdasbd khoa aasdasjdasbdkhoa aasdasjdasbdkhoa aasdasjdasbdkhoa aasdasjdasbdkhoa aasdasjdasbdkhoa aasdasjdasbd',
    index: 0,
    image: {
      url: 'http://localhost:3000/assets/img/dummy-image-square.jpeg',
      alternativeText: 'aaaa',
      width: 300,
      height: 300,
      hash: '',
      mime: '',
      name: '',
      provider: '',
      size: 100
    },
    url: '/referenzen',
    layout: 'Grid'
  }
};
