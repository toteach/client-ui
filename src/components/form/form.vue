<template>
  <form class="t-form"
        v-bind="$attrs"
        v-on="$listeners">
    <transition name="t-form-fade">
      <t-loader v-if="isPending"
                size="large" />
    </transition>
    <slot />
  </form>
</template>

<script lang="ts">
import {
  Component, Prop,
  Vue,
} from 'vue-property-decorator';

import TLoader from '../spinner/loader.vue';

@Component({
  name: 'TForm',
  components: { TLoader },
})
export default class TForm extends Vue {
  @Prop({ type: Boolean })
  public isPending?: boolean;
}
</script>

<style lang="scss">
.t-form {
  // Root element
  $root: &;

  position: relative;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
