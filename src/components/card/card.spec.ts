import { shallowMount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import TCard from './card.vue';
import { Card as ICard } from './types';

// eslint-disable-next-line max-lines-per-function
describe('TCard', () => {
  let wrapper: Wrapper<Vue>;
  beforeEach(() => {
    wrapper = shallowMount(TCard);
  });

  it('is initialized', () => {
    expect(wrapper.name()).toBe('TCard');
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe('title', () => {
    beforeEach(() => {
      const title = 'Title';
      wrapper.setProps({
        title,
      });
    });

    it('has title', () => {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const card = wrapper.find(TCard).vm as unknown as ICard;
      expect(card.isHeaderShown).toBeTruthy();
    });
    it('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('image', () => {
    const image = 'https://www.fillmurray.com/640/360';

    beforeEach(() => {
      wrapper.setProps({
        image,
      });
    });

    it('has image', () => {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const card = wrapper.find(TCard).vm as unknown as ICard;
      expect(card.isImageShown).toBeTruthy();
      expect(wrapper.find('.t-card__image').isVisible()).toBe(true);
      expect(wrapper.find('figure.t-card__image-figure').isVisible()).toBe(true);
      expect(wrapper.find('img.t-card__image-element').isVisible()).toBe(true);
      expect(wrapper.find('img.t-card__image-element').attributes('src')).toBe(image);
    });

    it('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('set image scale on hover', () => {
    beforeEach(() => {
      wrapper.setProps({
        scaleImageOnHover: true,
      });
    });

    it('has class', () => {
      expect(wrapper.find('.t-card_has_image-scale-on-hover').isVisible()).toBe(true);
    });
    it('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
