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
    <template v-if="hasMessages">
      <span class="t-input-field__message">{{ message }}</span>
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
  public messages?: string[];

  @Prop({ type: String })
  public type?: TColorModifiers;

  public get hasMessages(): boolean {
    return !!(this.messages && this.messages.length);
  }

  public get message(): string {
    return this.messages && this.messages.length ? this.messages.join() : '';
  }

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
  margin-bottom: 2rem;

  &__label {
    display: block;
    width: 100%;

    &-text {
      display: block;
      margin-bottom: var(--input-filed-label-spacing);
      color: var(--input-filed-label-color);
    }
  }

  &__message {
    position: absolute;
    bottom: calc(-1rem - 5px);
    font-size: var(--size-7);
  }

  &_has_message {
    // margin-bottom: var(--spacing-large);
  }

  &_type {
    &_danger {
      .t-control {
        --input-border-color: var(--color-danger);
        --input-focus-border-color: var(--color-danger);
        --input-focus-box-shadow-color: var(--red-a-20);
      }
    }
  }

  .t-control {
    width: 100%;
  }
}
</style>
