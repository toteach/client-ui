import { mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import TDropdown from './dropdown.vue';

describe('TDropdown', () => {
  let wrapper: Wrapper<Vue>;
  beforeEach(() => {
    wrapper = mount(TDropdown, {});
  });
  it('is initialized', () => {
    expect(wrapper.name()).toBe('TDropdown');
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
