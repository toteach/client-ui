import { mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import TButton from './button.vue';

describe('TButton', () => {
  let wrapper: Wrapper<Vue>;
  beforeEach(() => {
    wrapper = mount(TButton, {
    });
  });
  it('is initialized', () => {
    expect(wrapper.name()).toBe('TButton');
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
