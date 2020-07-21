<template>
  <article class="t-card"
           :class="{ 't-card_has_image-scale-on-hover': scaleImageOnHover }">
    <div v-if="isImageShown"
         class="t-card__image">
      <figure class="t-card__image-figure">
        <slot v-if="$scopedSlots.image"
              name="image" />
        <img v-else
             class="t-card__image-element"
             :src="image"
             :alt="title">
      </figure>
    </div>
    <header v-if="isHeaderShown"
            class="t-card__header">
      <h3 class="t-card__title">
        <slot v-if="$scopedSlots.header"
              name="header" />
        <template v-else>
          {{ title }}
        </template>
      </h3>
    </header>
    <section v-if="$scopedSlots.content"
             class="t-card__content">
      <slot name="content" />
    </section>
    <footer v-if="$scopedSlots.footer"
            class="t-card__footer">
      <slot name="footer" />
    </footer>
  </article>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

import { Card as ICard } from './types';

@Component({
  name: 'TCard',
})
export default class TCard extends Vue implements ICard {

  @Prop({ type: String })
  public title?: string;

  @Prop({ type: String })
  public image?: string;

  @Prop({ type: Boolean })
  public scaleImageOnHover?: boolean;

  get isHeaderShown(): boolean {
    return !!(this.$scopedSlots.header || this.title);
  }

  get isImageShown(): boolean {
    return !!(this.$scopedSlots.image || this.image);
  }

}
</script>

<style lang="scss">
.t-card {
  // Root element
  $root: &;

  // Config
  --card-color: var(--grey-dark);
  --card-background-color: var(--scheme-main);
  --card-shadow: 0 0 2px rgba(0, 0, 0, 0.35), 0 1px 3px rgba(0, 0, 0, 0.1);
  --card-border: 1px solid transparent;
  --card-border-radius: var(--radius);
  --card-header-background-color: transparent;
  --card-header-color: var(--grey-darker);
  --card-header-border-bottom: 1px solid var(--grey-lightest);
  --card-header-padding: var(--spacing-small) var(--spacing);
  --card-header-weight: var(--weight-bold);
  --card-header-size: var(--size-4);
  --card-content-background-color: transparent;
  --card-content-color: var(--grey-dark);
  --card-content-padding: var(--spacing);
  --card-footer-background-color: transparent;
  --card-footer-color: var(--grey);
  --card-footer-border-top: 1px solid var(--grey-lightest);
  --card-footer-padding: var(--spacing-small) var(--spacing);
  --card-footer-size: var(--size-7);

  // Props
  color: var(--card-color);
  background-color: var(--card-background-color);
  border: var(--card-border);
  border-radius: var(--card-border-radius);
  box-shadow: var(--card-shadow);

  &_has_image-scale-on-hover {
    &:hover {
      #{$root}__image-element {
        transform: scale(1.4);
      }
    }
  }

  &__image {
    overflow: hidden;
    border-radius: var(--card-border-radius) var(--card-border-radius) 0 0;
  }

  &__image-element {
    display: block;
    transition: transform var(--speed) var(--easing);
  }

  &__header {
    padding: var(--card-header-padding);
    color: var(--card-header-color);
    background-color: var(--card-header-background-color);
    border-bottom: var(--card-header-border-bottom);

    + #{$root}__footer {
      border-top: none;
    }
  }

  &__title {
    font-size: var(--card-header-size);
    font-weight: var(--card-header-weight);
  }

  &__content {
    padding: var(--card-content-padding);
    color: var(--card-content-color);
    background-color: var(--card-header-background-color);
  }

  &__footer {
    padding: var(--card-footer-padding);
    font-size: var(--card-footer-size);
    color: var(--card-footer-color);
    background-color: var(--card-footer-background-color);
    border-top: var(--card-footer-border-top);
  }
}
</style>
