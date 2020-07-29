<template>
  <div class="t-form-fieldset">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

@Component({
  name: 'TFormFieldset',
})
export default class TFormFieldset extends Vue {
}
</script>

<style lang="scss">
.t-form-fieldset {
  // Root element
  $root: &;
}
</style>
