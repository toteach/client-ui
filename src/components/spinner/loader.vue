<template>
  <div class="t-loader">
    <div class="t-loader__spinner"
         :class="{
           [`t-loader__spinner_size_${size}`]: size,
         }" />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

import { TSizes } from '../../types';

@Component({
  name: 'TLoader',
})
export default class TLoader extends Vue {

  @Prop({ type: String })
  public size?: TSizes;

}
</script>

<style lang="scss">
  .t-loader {
    $root: &;

    --spinner-color: var(--color-primary);
    --spinner-size: 1rem;

    position: absolute;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    &__spinner {
      display: inline-flex;
      align-self: center;
      justify-self: center;
      width: var(--spinner-size);
      height: var(--spinner-size);
      border: 3px solid var(--spinner-color);
      border-top-color: transparent;
      border-radius: 50%;
      transform: rotate(0deg);
      animation: spin 1s infinite linear;

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
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>
