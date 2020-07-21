import { mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import TAvatar from './avatar.vue';

describe('TAvatar', () => {
  let wrapper: Wrapper<Vue>;
  const image = 'https://www.fillmurray.com/64/64';
  beforeEach(() => {
    wrapper = mount(TAvatar, {
      propsData: {
        image,
      },
    });
  });
  it('is initialized', () => {
    expect(wrapper.name()).toBe('TAvatar');
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
