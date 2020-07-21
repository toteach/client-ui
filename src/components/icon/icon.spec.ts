import { mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import TIcon from './icon.vue';

describe('TIcon', () => {
  let wrapper: Wrapper<Vue>;
  const iconName = 'test';
  beforeEach(() => {
    wrapper = mount(TIcon, {
      propsData: {
        name: iconName,
      },
    });
  });
  it('is initialized', () => {
    expect(wrapper.name()).toBe('TIcon');
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('should contain default svg', () => {
    expect(wrapper.contains('svg')).toBeTruthy();
  });
  it('should set correct name classes', () => {
    expect(wrapper.is('span')).toBeTruthy();
    expect(wrapper.classes('t-icon')).toBeTruthy();
    expect(wrapper.classes(`t-icon_name_${iconName}`)).toBeTruthy();
  });
});
