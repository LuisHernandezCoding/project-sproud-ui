import React from 'react';
import Modal from '../../molecules/Modal.tsx';

export default {
  title: 'Generated/Molecules/Modal',
  component: Modal,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
