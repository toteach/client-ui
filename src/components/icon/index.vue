<template>
  <span class="tt-icon"
        :class="{
          [`tt-icon_${name}`]: name,
        }">
    <svg class="tt-icon__svg">
      <use :xlink:href="`#tt-icon-${name}`" />
    </svg>
  </span>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

import './_icons-list';

@Component({
  name: 'tt-icon',
})
export default class TTIcon extends Vue {

  @Prop({ type: String, required: true })
  public name!: string;

}
</script>

<style lang="scss">
.tt-icon {
  $root: &;

  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;

  &__svg {
    width: inherit;
    max-width: 100%;
    height: inherit;
    max-height: 100%;
  }
}
</style>
