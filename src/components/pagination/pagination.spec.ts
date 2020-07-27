import { shallowMount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import TPagination from './pagination.vue';

// eslint-disable-next-line max-lines-per-function
describe('TPagination', () => {
  let wrapper: Wrapper<Vue>;
  beforeEach(() => {
    wrapper = shallowMount(TPagination);
  });

  it('is initialized', () => {
    expect(wrapper.name()).toBe('TPagination');
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
