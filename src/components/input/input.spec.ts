import { mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import TInput from './input.vue';

describe('TInput', () => {
  let wrapper: Wrapper<Vue>;
  beforeEach(() => {
    wrapper = mount(TInput, {
    });
  });
  it('is initialized', () => {
    expect(wrapper.name()).toBe('TInput');
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
