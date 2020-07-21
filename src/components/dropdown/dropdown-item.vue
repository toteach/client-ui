<template>
  <div class="t-dropdown-item"
       @click="selectItem">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

import {
  TColorModifiers,
} from '@/types';

@Component({
  name: 'TDropdownItem',
})
export default class TDropdownItem extends Vue {

  @Prop({ type: String })
  public type?: TColorModifiers;

  @Prop({ type: Boolean })
  public disabled?: boolean;

  public selectItem(): void {
    this.$emit('click');
  }

}
</script>

<style lang="scss">
  .t-dropdown-item {
    $root: &;

    display: flex;
    align-items: center;
    font-size: 0.95rem;
    color: var(--text-color);

    > * {
      display: inline-flex;
      align-items: center;
      width: 100%;
      padding: calc(var(--spacing-small)) var(--spacing-small);
      color: inherit;
      text-decoration: none;

      .t-icon {
        margin-right: calc(var(--spacing-small) / 2);
      }
    }

    &:hover {
      // background-color: #ecf9fd;
    }

    &:not(:last-child) {
      border-bottom: 1px solid var(--grey-lightest);
    }
  }
</style>
