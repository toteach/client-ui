<template>
  <div class="t-pagination">
    <t-button class="t-pagination__button"
              native-type="button"
              type="text"
              :is-pending="isPending"
              :disabled="isPending"
              @click="onLoadMore">
      {{ buttonText }}
    </t-button>
  </div>
</template>

<script lang="ts">

import {
  Component, Prop,
  Vue,
} from 'vue-property-decorator';

import TButton from '../button/button.vue';

@Component({
  name: 'TPagination',
  components: { TButton },
})
export default class TPagination extends Vue {

    @Prop({ type: String, default: null })
    public buttonLabel!: string;

    @Prop({ type: String, default: '' })
    public buttonLoadingLabel!: string;

    public isPending: boolean = false;

    protected get buttonText(): string {
      return this.isPending ? this.buttonLoadingLabelText : this.buttonLabelText;
    }

    public get buttonLabelText(): string {
      return this.buttonLabel;
    }

    public get buttonLoadingLabelText(): string {
      return this.buttonLoadingLabel;
    }

    public onLoadMore(): void {
      this.isPending = true;
      setTimeout(() => {
        this.isPending = false;
      }, 2000);
    }
}
</script>

<style lang="scss">
  .t-pagination {
    display: flex;
    align-items: center;
    justify-content: center;

    &__button {
      --button-text-color: var(--grey);

      width: 100%;
    }
  }
</style>
