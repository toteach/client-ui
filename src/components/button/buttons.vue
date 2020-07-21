<template>
  <div class="t-buttons">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

@Component({
  name: 'TButtons',
})
export default class TButtons extends Vue {
}
</script>

<style lang="scss">
.t-buttons {
  // Root element
  $root: &;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: var(--spacing);

  .t-button {
    position: relative;
    margin-left: calc(var(--button-border-width) - var(--button-border-width) * 2);
    border-radius: 0;

    &:first-child {
      border-top-left-radius: var(--button-radius);
      border-bottom-left-radius: var(--button-radius);
    }

    &:last-child {
      border-top-right-radius: var(--button-radius);
      border-bottom-right-radius: var(--button-radius);
    }
  }
}
</style>
