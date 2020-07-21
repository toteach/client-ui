<template>
  <span class="t-icon"
        :class="{
          [`t-icon_name_${name}`]: name,
          [`t-icon_size_${size}`]: size,
          't-icon_is_responsive': isResponsive,
        }">
    <svg class="t-icon__svg">
      <use :xlink:href="`#t-icon-${name}`" />
    </svg>
  </span>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

import { TSizes } from '../../types';

@Component({
  name: 'TIcon',
})
export default class TIcon extends Vue {

  @Prop({ type: String, required: true })
  public name!: string;

  @Prop({ type: String })
  public size?: TSizes;

  @Prop({ type: Boolean, default: false })
  public isResponsive?: boolean;

}
</script>

<style lang="scss">
.t-icon {
  $root: &;

  --icon-secondary-opacity: 0.3;

  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;

  &_is_responsive {
    width: 100%;
    height: 100%;
  }

  &_size {
    &_large {
      width: var(--size-large);
      height: var(--size-large);
    }

    &_medium {
      width: var(--size-medium);
      height: var(--size-medium);
    }

    &_small {
      width: var(--size-small);
      height: var(--size-small);
    }
  }

  &__svg {
    width: inherit;
    max-width: 100%;
    height: inherit;
    max-height: 100%;
  }

  &__item {
    &--secondary {
      opacity: var(--icon-secondary-opacity);
    }
  }
}
</style>
