import { shallowMount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import TListView from './listview.vue';

// eslint-disable-next-line max-lines-per-function
describe('TListView', () => {
  let wrapper: Wrapper<Vue>;
  beforeEach(() => {
    wrapper = shallowMount(TListView);
  });

  it('is initialized', () => {
    expect(wrapper.name()).toBe('TListView');
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
