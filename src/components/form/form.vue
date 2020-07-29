<template>
  <form class="t-form">
    <slot />
  </form>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

@Component({
  name: 'TForm',
})
export default class TForm extends Vue {
}
</script>

<style lang="scss">
.t-form {
  // Root element
  $root: &;
}
</style>
