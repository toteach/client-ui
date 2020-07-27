<template>
  <div class="t-input-field"
       :class="{
         [`t-input-field_type_${type}`]: type,
       }">
    <template v-if="label">
      <label class="t-input-field__label">
        <span class="t-input-field__label-text">{{ label }}</span>
        <slot />
      </label>
    </template>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop,
  Vue,
} from 'vue-property-decorator';

import {
  TColorModifiers,
} from '../../types';
import TIcon from '../icon/icon.vue';

@Component({
  name: 'TInputField',
  components: { TIcon },
})
export default class TInputField extends Vue {
  @Prop({ type: String })
  public label?: string;

  @Prop({ type: String })
  public type?: TColorModifiers;
}
</script>

<style lang="scss">
.t-input-field {
  // Root element
  $root: &;

  --input-filed-label-color: var(--grey-darker);
  --input-filed-label-spacing: 0.3em;

  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: var(--spacing);

  &__label {
    display: block;
    width: 100%;

    &-text {
      display: block;
      margin-bottom: var(--input-filed-label-spacing);
      color: var(--input-filed-label-color);
    }
  }

  .t-control {
    width: 100%;
  }
}
</style>
