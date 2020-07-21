import { mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import TLoader from './dropdown.vue';

describe('TIcon', () => {
  let wrapper: Wrapper<Vue>;
  beforeEach(() => {
    wrapper = mount(TLoader, {});
  });
  it('is initialized', () => {
    expect(wrapper.name()).toBe('TLoader');
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
