<template>
  <div class="t-dropdown">
    <div ref="trigger"
         class="t-dropdown__trigger"
         role="button"
         @click="toggle">
      <slot name="trigger" />
    </div>
    <transition name="t-dropdown">
      <div v-if="isActive"
           ref="dropdownMenu"
           class="t-dropdown__menu">
        <slot />
      </div>
    </transition>
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

@Component({
  name: 'TDropdown',
})
export default class TDropdown extends Vue {

  public $refs!: {
    trigger: Element;
    dropdownMenu: Element;
  };

  @Prop({ type: Boolean })
  public disabled?: boolean;

  @Prop({ type: String })
  public size?: TSizes;

  @Prop({ type: String })
  public position?: TPositions;

  public isActive: boolean = false;

  public selectItem(): void {
    //
  }

  public toggle(): void {
    this.isActive = !this.isActive;
  }

  /**
   * White-listed items to not close when clicked.
   */
  isInWhiteList(el: Element): boolean {
    if (el === this.$refs.dropdownMenu || el === this.$refs.trigger) {
      return true;
    }

    // All children from dropdown
    if (this.$refs.dropdownMenu !== undefined) {
      const children = this.$refs.dropdownMenu.querySelectorAll('*');
      for (const child of children) {
        if (el === child) {
          return true;
        }
      }
    }
    // All children from trigger
    if (this.$refs.trigger) {
      const children = this.$refs.trigger.querySelectorAll('*');
      for (const child of children) {
        if (el === child) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Close dropdown if clicked outside.
   */
  public clickedOutside(event: Event): void {
    if (event.target instanceof Element) {
      if (!this.isInWhiteList(event.target)) {
        this.isActive = false;
      }
    }
  }

  private created(): void {
    if (typeof window !== 'undefined') {
      document.addEventListener('click', this.clickedOutside);
    }
  }

  private beforeDestroy(): void {
    if (typeof window !== 'undefined') {
      document.removeEventListener('click', this.clickedOutside);
    }
  }

}
</script>

<style lang="scss">
  .t-dropdown {
    $root: &;

    --dropdown-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 5px 20px rgba(0, 0, 0, 0.02);

    position: relative;
    transition: all 1s;

    &__menu {
      position: absolute;
      right: 0;
      z-index: 10;
      min-width: 200px;
      background-color: var(--white);
      border: 1px solid var(--grey-lighter);
      border-radius: var(--radius);
      box-shadow: var(--dropdown-shadow);
    }

    &-enter-active,
    &-leave-active {
      transition: all var(--speed);
    }

    &-enter,
    &-leave-to {
      opacity: 0;
      transform: translateY(1rem);
    }
  }
</style>
