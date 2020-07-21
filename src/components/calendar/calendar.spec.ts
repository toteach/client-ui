import { mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import TCalendar from './calendar.vue';

describe('TButton', () => {
  let wrapper: Wrapper<Vue>;
  beforeEach(() => {
    wrapper = mount(TCalendar, {
    });
  });
  it('is initialized', () => {
    expect(wrapper.name()).toBe('TCalendar');
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
