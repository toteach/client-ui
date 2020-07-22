<template>
  <div class="app">
    <h2>Inputs</h2>
    <t-avatar first-name="X" last-name="Y" size="128" />
    <t-input-field type="danger">
      <t-input type="search"
               size="medium"
               :placeholder="`Placeholder`"
               icon-position="left"
               icon="search" />
    </t-input-field>
    <h2>Buttons</h2>
    <t-buttons class="t-projects-filter__display">
      <t-button icon="gallery-grid"
                state="active" />
      <t-button icon="gallery-list" />
    </t-buttons>
  </div>
</template>

<script lang="ts">

import {
  Component,
  Vue,
} from 'vue-property-decorator';

@Component({
  name: 'app',
})
export default class App extends Vue {
}
</script>

<style lang="scss">
  @import "./assets/scss/app";

  .app {
    height: 100%;
  }
</style>
