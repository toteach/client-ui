<template>
  <div class="t-control"
       :class="{
         [`t-control_size_${size}`]: size,
         [`t-control_type_${type}`]: type,
         [`t-control_icon-position_${iconPosition}`]: iconPosition,
       }">
    <input class="t-control__input"
           :type="type"
           v-bind="$attrs"
           @input="$emit('input', $event.target.value)">
    <t-icon v-if="icon"
            class="t-control__icon"
            :name="icon"
            :size="size" />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

import {
  TPositions,
  TSizes,
} from '@/types';

import TIcon from '../icon/icon.vue';

type InputNativeTypes =
        'text' |
        'color' |
        'date' |
        'datetime' |
        'datetime-local' |
        'email' |
        'hidden' |
        'number' |
        'password' |
        'search' |
        'tel' |
        'time' |
        'url';

@Component({
  name: 'TInput',
  components: { TIcon },
})
export default class TInput extends Vue {

  @Prop({ type: String })
  public size?: TSizes;

  @Prop({ type: String, default: 'text' })
  public type?: InputNativeTypes;

  @Prop({ type: String })
  public icon?: string;

  @Prop({ type: String })
  public iconPosition?: TPositions;

}
</script>

<style lang="scss">
.t-control {
  // Root element
  $root: &;

  // Config
  --input-font-size: var(--size-6);
  --input-radius: var(--radius);
  --input-radius-small: var(--radius-small);
  --input-border-width: 1px;
  --input-border-color: var(--grey-lighter);
  --input-background-color: var(--white-bis);
  --input-height: 2.5em;
  --input-line-height: 1.5;
  --input-padding-base-vertical: 0.5em;
  --input-padding-base-horizontal: 0.75em;
  --input-padding-vertical: calc(var(--input-padding-base-vertical) - var(--input-border-width));
  --input-padding-horizontal: calc(var(--input-padding-base-horizontal) - var(--input-border-width));
  --input-text-color: var(--grey-darker);
  --input-text-decoration: underline;

  // inset 0 1px 2px rgba(27,31,35,.075), 0 0 0 0.2em rgba(3,102,214,.3)
  // Focus
  --input-focus-background-color: var(--white);
  --input-focus-border-color: var(--color-primary);
  --input-focus-box-shadow-size: 0 0 5px 2px;
  --input-focus-box-shadow-color: var(--blue-bis-a-20);

  // Disabled
  --input-disabled-background-color: var(--grey-lighter);
  --input-disabled-border-color: var(--grey-lighter);
  --input-disabled-shadow: none;
  --input-disabled-opacity: 0.5;

  position: relative;
  display: inline-flex;
  font-size: var(--input-font-size);

  &__input {
    width: 100%;
    height: 2.25em;
    padding: var(--input-padding-vertical) var(--input-padding-horizontal) var(--input-padding-vertical);
    font-size: inherit;
    color: var(--input-text-color);
    vertical-align: middle;
    background: var(--input-background-color);
    border: var(--input-border-width) solid var(--input-border-color);
    border-radius: var(--input-radius);
    box-shadow: none;
    transition: all var(--speed) var(--easing);
    appearance: none;

    &[disabled] {
      cursor: not-allowed;
      opacity: var(--input-disabled-opacity);
    }

    &:focus {
      color: var(--input-focus-text-color);
      background-color: var(--input-focus-background-color);
      border-color: var(--input-focus-border-color);

      &:not([disabled]),
      &:not(:active) {
        box-shadow: var(--input-focus-box-shadow-size) var(--input-focus-box-shadow-color);
      }

      + #{$root}__icon {
        opacity: 1;
      }
    }
  }

  &__icon {
    position: absolute;
    top: calc(50% - var(--input-font-size) / 2);
    width: var(--input-font-size);
    height: var(--input-font-size);
    font-size: inherit;
    opacity: 0.5;
  }

  &_size {
    &_large {
      --input-font-size: var(--size-large);
    }

    &_medium {
      --input-font-size: var(--size-medium);
    }

    &_small {
      --input-font-size: var(--size-small);
    }
  }

  &_icon-position {
    &_left {
      #{$root}__input {
        padding-left: calc(var(--input-font-size) * 2);
      }

      #{$root}__icon {
        left: calc(var(--input-font-size) - 5px);
      }
    }

    &_right {
      #{$root}__input {
        padding-right: calc(var(--input-font-size) * 2);
      }

      #{$root}__icon {
        right: calc(var(--input-font-size) - 5px);
      }
    }
  }
}
</style>
