<template>
  <div class="t-list-view">
    <t-loader v-if="isPending"
              class="t-list-view__loader"
              size="large" />
    <header class="t-list-view__header">
      <template v-if="$scopedSlots.header">
        <slot name="header" />
      </template>
    </header>
    <section class="t-list-view__items"
             :class="{
               't-list-view__items_is_pending': isPending,
             }">
      <template v-if="$scopedSlots.items">
        <slot name="items" />
      </template>
    </section>
    <section class="t-list-view__pagination">
      <template v-if="$scopedSlots.pagination">
        <slot name="pagination" />
      </template>
    </section>
    <footer class="t-list-view__footer">
      <template v-if="$scopedSlots.footer">
        <slot name="footer" />
      </template>
    </footer>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

import TLoader from '../spinner/loader.vue';

@Component({
  name: 'TListView',
  components: { TLoader },
})
export default class TListView extends Vue {

  @Prop({ type: Boolean })
  public isPending?: boolean;

  @Prop({ type: Boolean })
  public isShownSkeleton?: boolean;

  @Prop({ type: Object })
  public data?: object;
}
</script>

<style lang="scss">
.t-list-view {
  // Root element
  $root: &;

  // Config
  --list-view-color: var(--grey-dark);
  --list-view-background-color: var(--scheme-main);
  --list-view-border: 1px solid var(--grey-lightest);
  --list-view-shadow: 0 4px 8px var(--scheme-invert);
  --list-view-border-radius: var(--radius);

  position: relative;
  z-index: 10;

  &__loader {
    position: absolute;
    z-index: 2;
  }

  &__items {
    position: relative;
    z-index: 1;
    transition: all var(--speed) var(--easing);

    &_is_pending {
      user-select: none;
      opacity: 0.3;
    }
  }
}
</style>
