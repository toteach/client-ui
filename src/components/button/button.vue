<template>
  <component :is="computedTag"
             class="t-button"
             :class="{
               [`t-button_icon-position_${iconPosition}`]: iconPosition,
               [`t-button_size_${size}`]: size,
               [`t-button_is_outlined`]: isOutlined,
               [`t-button_type_${type}`]: type,
               [`t-button_state_${state}`]: state,
               [`t-button_is_pending`]: isPending,
             }"
             :type="nativeType"
             v-bind="$attrs"
             v-on="$listeners">
    <t-icon v-if="icon"
            class="t-button__icon"
            :name="icon" />
    <span v-if="$scopedSlots.default"
          class="t-button__content">
      <slot />
    </span>
  </component>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

import {
  TColorModifiers,
  TPositions,
  TSizes, TStates,
} from '@/types';

import TIcon from '../icon/icon.vue';

type ButtonLinkTags = 'a' | 'button' | 'input' | 'router-link' | 'nuxt-link';
type ButtonNativeTypes = 'button' | 'submit' | 'reset';

@Component({
  name: 'TButton',
  components: { TIcon },
})
export default class TButton extends Vue {

  @Prop({ type: String, default: 'button' })
  public tag?: ButtonLinkTags;

  @Prop({ type: String })
  public size?: TSizes;

  @Prop({ type: String })
  public state?: TStates;

  @Prop({ type: String })
  public type?: TColorModifiers;

  @Prop({ type: String })
  public nativeType?: ButtonNativeTypes;

  @Prop({ type: String })
  public icon?: string;

  @Prop({ type: Boolean })
  public loading?: boolean;

  @Prop({ type: String })
  public iconPosition?: TPositions;

  @Prop({ type: Boolean })
  public isPending?: boolean;

  @Prop({ type: Boolean })
  public isOutlined?: boolean;

  get computedTag(): ButtonLinkTags {
    const defaultTag = this.tag || 'button';
    if (!this.tag && this.$attrs.disabled && this.$attrs.disabled) {
      return defaultTag;
    }

    return defaultTag;
  }
}
</script>

<style lang="scss">
.t-button {
  // Root element
  $root: &;

  // Config
  --button-radius: var(--radius);
  --button-font-size: var(--size-6);
  --button-radius-small: var(--radius-small);
  --button-border-width: 1px;
  --button-border-color: var(--grey-lighter);
  --button-background-color: var(--white-bis);
  --button-height: 2.5em;
  --button-line-height: 1.5;
  --button-padding-vertical: calc(0.5em - var(--button-border-width));
  --button-padding-horizontal: calc(0.75em - var(--button-border-width));
  --button-text-color: var(--grey-darker);
  --button-text-decoration: underline;
  --button-box-shadow: none;

  // Hover
  --button-hover-background-color: var(--white);
  --button-hover-border-color: var(--grey-light);
  --button-hover-text-color: var(--black);

  // Focus
  --button-focus-background-color: var(--white);
  --button-focus-border-color: var(--color-primary);
  --button-focus-box-shadow-size: 0 0 5px 2px;
  --button-focus-box-shadow-color: var(--blue-bis-a-20);
  --button-focus-text-color: var(--black);

  // Disabled
  --button-disabled-background-color: var(--grey-lighter);
  --button-disabled-border-color: var(--grey-lighter);
  --button-disabled-shadow: none;
  --button-disabled-opacity: 0.5;

  // Props
  position: relative;
  z-index: 1;
  display: inline-flex;
  appearance: none;
  align-items: center;
  justify-content: center;
  height: 2.25em;
  padding: var(--button-padding-vertical) var(--button-padding-horizontal) var(--button-padding-vertical);
  font-size: var(--button-font-size);
  color: var(--button-text-color);
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background: var(--button-background-color);
  border: var(--button-border-width) solid var(--button-border-color);
  border-radius: var(--button-radius);
  outline: none;
  box-shadow: var(--button-box-shadow);
  transition: all var(--speed) var(--easing);

  &[disabled] {
    cursor: not-allowed;
    opacity: var(--button-disabled-opacity);
  }

  &_state_hover,
  &_state_focus,
  &_state_active,
  &:hover {
    z-index: 3;
  }

  &_state_hover,
  &:hover {
    --button-border-color: var(--button-hover-border-color);
    --button-text-color: var(--button-hover-text-color);
    --button-background-color: var(--button-hover-background-color);
  }

  &_state_active,
  &_state_focus,
  &:active,
  &:focus {
    --button-background-color: var(--button-focus-background-color);
    --button-border-color: var(--button-focus-border-color);
    --button-text-color: var(--button-focus-text-color);
    --button-box-shadow: var(--button-focus-box-shadow-size) var(--button-focus-box-shadow-color);
  }

  &:focus {
    z-index: 5;
  }

  &_state_active {
    --button-background-color: var(--button-focus-background-color);
    --button-border-color: var(--button-focus-border-color);
    --button-text-color: var(--button-focus-text-color);

    z-index: 5;
  }

  &__icon {
    &:first-child {
      &:not(:last-child) {
        margin-right: calc(var(--button-padding-horizontal) / 2);
      }
    }
  }

  &_type {
    &_primary {
      --button-text-color: var(--white);
      --button-background-color: var(--color-primary);
      --button-border-color: transparent;
    }

    &_success {
      color: var(--white);
      background-color: var(--color-success);
      border-color: transparent;
    }

    &_info {
      color: var(--white);
      background-color: var(--color-info);
      border-color: transparent;
    }

    &_warning {
      --button-text-color: var(--white);
      --button-background-color: var(--color-warning);
      --button-border-color: transparent;
    }

    &_danger {
      color: var(--white);
      background-color: var(--color-danger);
      border-color: transparent;
    }

    &_white {
      background-color: var(--white);

      &:hover {
        background-color: var(--white-bis);
      }
    }

    &_text {
      --button-background-color: transparent;
      --button-border-color: transparent;
      --button-text-color: var(--button-text-color);

      &:hover {
        --button-text-color: var(--button-hover-text-color);
        --button-background-color: transparent;
        --button-border-color: transparent;
        --button-box-shadow: none;
      }

      &:focus,
      &:active {
        &:not([disabled]),
        &:not(:active) {
          --button-text-color: var(--button-text-color);
          --button-background-color: transparent;
          --button-border-color: transparent;
          --button-box-shadow: none;
        }
      }
    }
  }

  &_is_outlined {
    // --button-background-color: var(--white);

    &#{$root}_type_primary {
      --button-border-color: var(--color-primary);
      --button-text-color: var(--color-primary);
      --button-background-color: var(--white);

      &:hover {
        --button-text-color: var(--white);
        --button-background-color: var(--color-primary);
      }
    }
  }

  &_size {
    &_large {
      font-size: var(--size-large);

      #{$root}__icon {
        width: var(--size-large);
        height: var(--size-large);
      }
    }

    &_medium {
      font-size: var(--size-medium);

      #{$root}__icon {
        width: var(--size-medium);
        height: var(--size-medium);
      }
    }

    &_small {
      font-size: var(--size-small);

      #{$root}__icon {
        width: var(--size-small);
        height: var(--size-small);
      }
    }
  }

  &_is_pending {
    // cursor: wait;

    &[disabled] {
      // cursor: pointer;
    }
  }
}
</style>
