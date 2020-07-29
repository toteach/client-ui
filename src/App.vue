<template>
  <div class="app">
    <h1 class="app__title">
      ToTeach UI. Lightweight UI components. Cozy
    </h1>
    <section class="app__section">
      <h2 class="app__section-title">
        Icons
      </h2>
      <div class="app__section-content">
        <div class="app__section-content-icons">
          <t-icon size="large"
                  name="logo-square" />
          <t-icon size="medium"
                  name="logo-square" />
          <t-icon size="small"
                  name="logo-square" />
        </div>
      </div>
    </section>
    <section class="app__section">
      <h2 class="app__section-title">
        Avatars
      </h2>
      <div class="app__section-content">
        <div class="app__section-content-avatars">
          <t-avatar image="https://cdn.dribbble.com/users/14268/avatars/normal/d938020c81ef4f5981919cef468e1f76.jpg?1586185995"
                    size="160"
                    first-name="X"
                    last-name="Y" />
          <t-avatar first-name="X"
                    last-name="Y"
                    gender="female"
                    size="128" />
          <t-avatar first-name="X"
                    last-name="Y"
                    gender="male"
                    size="64" />
          <t-avatar first-name="X"
                    last-name="Y"
                    size="32" />
        </div>
      </div>
    </section>
    <section class="app__section">
      <h2 class="app__section-title">
        Inputs
      </h2>
      <div class="app__section-content">
        <t-form>
          <t-form-fieldset>
            <t-input-field type="danger">
              <t-input type="search"
                       size="large"
                       :placeholder="`Placeholder`"
                       icon-position="left"
                       icon="logo-square" />
            </t-input-field>
            <t-input-field type="danger">
              <t-input type="search"
                       size="medium"
                       :placeholder="`Placeholder`"
                       icon-position="left"
                       icon="logo-square" />
            </t-input-field>
            <t-input-field type="danger">
              <t-input type="search"
                       :placeholder="`Placeholder`"
                       icon-position="left"
                       icon="logo-square" />
            </t-input-field>
            <t-input-field type="danger">
              <t-input type="search"
                       size="small"
                       :placeholder="`Placeholder`"
                       icon-position="left"
                       icon="logo-square" />
            </t-input-field>
            <t-input-field :label="`Input label`">
              <t-input type="email"
                       size="medium"
                       :placeholder="`Placeholder`"
                       icon-position="left"
                       icon="logo-square" />
            </t-input-field>
          </t-form-fieldset>
        </t-form>
      </div>
    </section>

    <section class="app__section">
      <h2 class="app__section-title">
        Buttons
      </h2>
      <div class="app__section-content">
        <div class="app__section-content-buttons">
          <t-buttons>
            <t-button icon="logo-square" />
            <t-button icon="logo-square"
                      state="active" />
            <t-button icon="logo-square" />
          </t-buttons>
        </div>
        <div class="app__section-content-button">
          <t-button icon="logo-square"
                    size="large">
            Large Button
          </t-button>
          <t-button icon="logo-square"
                    size="medium">
            Medium Button
          </t-button>
          <t-button icon="logo-square">
            Normal Button
          </t-button>
          <t-button icon="logo-square"
                    size="small">
            Small Button
          </t-button>
        </div>
        <div class="app__section-content-button">
          <t-button size="large"
                    type="primary">
            Primary Large Button
          </t-button>
          <t-button size="medium"
                    type="info">
            Info Medium Button
          </t-button>
          <t-button type="success">
            Success Normal Button
          </t-button>
          <t-button type="primary"
                    is-outlined="true">
            Outlined Primary Button
          </t-button>
          <t-button type="link">
            Link Button
          </t-button>
        </div>
      </div>
    </section>

    <section class="app__section">
      <h2 class="app__section-title">
        Dropdowns
      </h2>
      <div class="app__section-content">
        <t-dropdown position="left">
          <template #trigger>
            <t-button>Dropdown Trigger Item</t-button>
          </template>
          <t-dropdown-item>
            <router-link to="/">
              Link
            </router-link>
          </t-dropdown-item>
          <t-dropdown-item>
            <router-link to="/">
              Link 2
            </router-link>
          </t-dropdown-item>
        </t-dropdown>
      </div>
    </section>

    <section class="app__section">
      <h2 class="app__section-title">
        Calendar
      </h2>
      <div class="app__section-content">
        <t-calendar class="t-schedule__calendar" />
      </div>
    </section>

    <section class="app__section">
      <h2 class="app__section-title">
        Card
      </h2>
      <div class="app__section-content">
        <t-card class="t-project-card"
                :image="`https://cdn.dribbble.com/users/35900/screenshots/5256935/run-the-juice-label_4x.png?compress=1&resize=800x600`">
          <template #header>
            Card header
          </template>
          <template #content>
            Card content
          </template>
          <template #footer>
            Card footer
          </template>
        </t-card>
      </div>
    </section>

    <section class="app__section">
      <h2 class="app__section-title">
        List View
      </h2>
      <div class="app__section-content">
        <t-list-view class="demo-list"
                     :is-pending="false">
          <template #header>
            <div class="demo-list__header">
              <div class="demo-list__header-item">
                Id
              </div>
              <div class="demo-list__header-item" />
              <div class="demo-list__header-item">
                Name
              </div>
              <div class="demo-list__header-item">
                Date
              </div>
            </div>
          </template>
          <template #items>
            <div class="demo-list__list">
              <div v-for="item in listViewData"
                   :key="item.id"
                   class="demo-list__item">
                <div class="demo-list__item-id">
                  {{ item.id }}
                </div>
                <div class="demo-list__item-avatar">
                  <t-avatar size="large"
                            :first-name="item.first_name"
                            :last-name="item.last_name" />
                </div>
                <div class="demo-list__item-name">
                  {{ item.first_name }} {{ item.last_name }}
                </div>
                <div class="demo-list__item-date">
                  {{ item.date }}
                </div>
              </div>
            </div>
          </template>
          <template #pagination>
            <t-pagination :button-label="'Show next'"
                          :button-loading-label="`Loading...`" />
          </template>
        </t-list-view>
      </div>
    </section>

    <section class="app__section">
      <h2 class="app__section-title">
        Spinner
      </h2>
      <div class="app__section-content">
        <div class="app__section-content-loader">
          <t-loader size="large" />
        </div>
        <div class="app__section-content-loader">
          <t-loader size="medium" />
        </div>
        <div class="app__section-content-loader">
          <t-loader />
        </div>
      </div>
    </section>

    <section class="app__section">
      <h2 class="app__section-title">
        Charts: Progress Bar Radial
      </h2>
      <div class="app__section-content">
        <div class="app__section-content-bars">
          <t-progress-bar-radial size="large"
                                 :value="100" />
          <t-progress-bar-radial size="medium"
                                 :value="75"
                                 type="success" />
          <t-progress-bar-radial :value="35"
                                 type="danger" />
          <t-progress-bar-radial size="small"
                                 :value="25"
                                 type="info" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">

import {
  Component,
  Vue,
} from 'vue-property-decorator';

import TFormFieldset from '@/components/form/form-fieldset.vue';
import TForm from '@/components/form/form.vue';

interface DemoListItem {
  id: number;
  first_name: string;
  last_name: string;
  date: string;
}

@Component({
  name: 'app',
  components: { TFormFieldset, TForm },
})

export default class App extends Vue {
  get listViewData(): DemoListItem[] {
    return [
      {
        id: 1,
        first_name: 'Jesse',
        last_name: 'Simmons',
        date: '2016-10-15 13:43:27',
      },
      {
        id: 2,
        first_name: 'John',
        last_name: 'Jacobs',
        date: '2016-12-15 06:00:53',
      },
      {
        id: 3,
        first_name: 'Tina',
        last_name: 'Gilbert',
        date: '2016-04-26 06:26:28',
      },
    ];
  }
}

</script>

<style lang="scss">
  @import "./assets/scss/app";

  .app {
    padding: 2rem;

    &__title {
      margin-bottom: 2rem;
      font-size: 1.8rem;
      font-weight: 800;
    }

    &__section {
      position: relative;
      max-width: 600px;
      margin-bottom: 2rem;

      &-title {
        margin-bottom: 1rem;
        font-size: 1.3rem;
        font-weight: 600;
      }

      &-content {
        &-loader {
          position: relative;
          min-height: 100px;
          border-bottom: 1px solid #ddd;
        }

        &-avatars {
          display: flex;
          align-items: center;

          .t-avatar {
            &:not(:last-child) {
              margin-right: 0.5rem;
            }
          }
        }

        &-bars {
          .t-progress-bar-radial {
            &:not(:last-child) {
              margin-right: 0.5rem;
            }
          }
        }

        &-button {
          .t-button {
            margin-bottom: 1rem;

            &:not(:last-child) {
              margin-right: 0.5rem;
            }
          }
        }

        &-icons {
          .t-icon {
            &:not(:last-child) {
              margin-right: 0.5rem;
            }
          }
        }
      }
    }

    .demo-list {
      &__header,
      &__item {
        display: grid;
        grid-template-columns: 30px 64px repeat(2, 1fr);
        align-items: center;
      }

      &__header {
        padding-bottom: 0.5rem;
        margin-bottom: 0.5rem;
        border-bottom: 3px solid var(--grey-lighter);
      }

      &__item {
        &:not(:last-child) {
          padding-bottom: 0.5rem;
          margin-bottom: 0.5rem;
          border-bottom: 1px solid var(--grey-lighter);
        }
      }

      &__list {
        margin-bottom: 1rem;
      }
    }
  }
</style>
