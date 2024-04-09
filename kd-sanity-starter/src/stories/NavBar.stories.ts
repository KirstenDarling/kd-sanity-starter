import NavBar1 from '@/components/NavBar1';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/NavBar',
  component: NavBar1,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // args: { onClick: fn() },
} satisfies Meta<typeof NavBar1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    pageTitle: 'CityTech',
    linkOneTitle: 'Dashboard',
    linkTwoTitle: 'Innovations',
    linkThreeTitle: 'Our Crew',
    buttonText: 'Explore Now',
    backgroundColor: 'bg-black',
    textColor: 'text-white',
  },
};

export const Light: Story = {
  args: {
    pageTitle: 'CityTech',
    linkOneTitle: 'Dashboard',
    linkTwoTitle: 'Innovations',
    linkThreeTitle: 'Our Crew',
    buttonText: 'Explore Now',
    backgroundColor: 'bg-white',
    textColor: 'text-black',
  },
};
