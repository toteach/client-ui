<template>
  <div class="t-progress-bar-radial"
       :class="{
         [`t-progress-bar-radial_size_${size}`]: size,
         [`t-progress-bar-radial_type_${type}`]: type,
       }">
    <span class="t-progress-bar-radial__value">
      <span class="t-progress-bar-radial__value-number">{{ Math.floor(value) }}</span>
    </span>
    <svg class="t-progress-bar-radial__wrapper"
         width="32"
         height="32"
         viewBox="0 0 120 120">
      <circle class="t-progress-bar-radial__meter"
              fill="none"
              cx="60"
              cy="60"
              r="54"
              stroke-width="10" />
      <circle class="t-progress-bar-radial__progress"
              :stroke-dasharray="circumference"
              :style="{
                'stroke-dasharray': circumference,
                'stroke-dashoffset': strokeDashoffset,
              }"
              fill="none"
              cx="60"
              cy="60"
              r="54"
              stroke-width="10" />
    </svg>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop,
  Vue,
} from 'vue-property-decorator';

import { TColorModifiers, TSizes } from '../../../types';

@Component({
  name: 'TProgressBarRadial',
})
export default class TProgressBarRadial extends Vue {
  @Prop({ type: String })
  public size?: TSizes;

  @Prop({ type: String })
  public type?: TColorModifiers;

  @Prop({ type: Number, default: 100 })
  public value!: number;

  get circumference(): number {
    const circumference = 54 * 2 * Math.PI;

    return circumference;
  }

  get strokeDashoffset(): number {
    return this.circumference - (this.value / 100 * this.circumference);
  }
}
</script>

<style lang="scss">
  .t-progress-bar-radial {
    --progress-bar-radial-meter-stroke: var(--grey-lighter);
    --progress-bar-radial-value-stroke: var(--grey-dark);
    --progress-bar-radial-value-color: var(--grey-darker);
    --progress-bar-radial-size: var(--size-3);
    --progress-bar-radial-font-size: calc(var(--progress-bar-radial-size) / 2.75);

    position: relative;
    display: inline-flex;
    width: var(--progress-bar-radial-size);
    height: var(--progress-bar-radial-size);
    font-size: var(--progress-bar-radial-font-size);
    color: var(--progress-bar-radial-value-color);
    user-select: none;

    &__wrapper {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
    }

    &__meter {
      stroke: var(--progress-bar-radial-meter-stroke);
    }

    &__progress {
      stroke: var(--progress-bar-radial-value-stroke);
      transition: all var(--speed) var(--easing);
    }

    &__value {
      position: absolute;
      top: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-size: var(--progress-bar-radial-font-size);
      color: var(--progress-bar-radial-value-stroke);
      text-align: center;
    }

    &_type {
      &_primary {
        --progress-bar-radial-value-stroke: var(--color-primary);
      }

      &_success {
        --progress-bar-radial-value-stroke: var(--color-success);
      }

      &_info {
        --progress-bar-radial-value-stroke: var(--color-info);
      }

      &_warning {
        --progress-bar-radial-value-stroke: var(--color-warning);
      }

      &_danger {
        --progress-bar-radial-value-stroke: var(--color-danger);
      }

      &_white {
        --progress-bar-radial-value-stroke: var(--white);
      }
    }

    &_size {
      &_large {
        --progress-bar-radial-size: var(--size-1);
      }

      &_medium {
        --progress-bar-radial-size: var(--size-2);
      }

      &_small {
        --progress-bar-radial-size: var(--size-5);
      }
    }
  }
</style>
