<template>
  <div class="t-input-field"
       :class="{
         [`t-input-field_type_${type}`]: type,
       }">
    <slot />
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
  public type?: TColorModifiers;
}
</script>

<style lang="scss">
.t-input-field {
  // Root element
  $root: &;

  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: var(--spacing);

  .t-control {
    width: 100%;
  }
}
</style>
