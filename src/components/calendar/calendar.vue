<template>
  <div class="t-calendar">
    <header class="t-calendar__month">
      <t-button class="t-calendar__month-button"
                icon="arrow-left"
                size="medium"
                type="text" />
      <time class="t-calendar__month-datetime"
            datetime="2019-02">May 11-17</time>
      <t-button class="t-calendar__month-button"
                icon="arrow-right"
                size="medium"
                type="text" />
    </header>
    <section class="t-calendar__days-of-week">
      <div class="t-calendar__days-of-week-item">
        Su
      </div>
      <div class="t-calendar__days-of-week-item">
        Mo
      </div>
      <div class="t-calendar__days-of-week-item">
        Tu
      </div>
      <div class="t-calendar__days-of-week-item">
        We
      </div>
      <div class="t-calendar__days-of-week-item">
        Th
      </div>
      <div class="t-calendar__days-of-week-item">
        Fr
      </div>
      <div class="t-calendar__days-of-week-item">
        Sa
      </div>
    </section>
    <div class="t-calendar__days-grid">
      <button v-for="(day, index) in days"
              :key="`day-${day}`"
              :class="[{
                't-calendar__day-button_is_active': index === 5,
                't-calendar__day-button_is_today': index === 2,
              }]"
              class="t-calendar__day-button">
        <div class="t-calendar__day-button-label">
          {{ day }}
        </div>
        <div v-if="index % 5 === 0"
             class="t-calendar__day-button-event-indicator" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

import TButton from '@/components/button/button.vue';
import { TSizes } from '@/types';

@Component({
  name: 't-calendar',
  components: {
    TButton,
  },
})
export default class TCalendar extends Vue {

  @Prop({ type: String })
  public size?: TSizes;

  @Prop({ type: Number, default: 0 })
  public firstDayOfWeek?: number;

  @Prop({ type: Date, default: () => new Date() })
  public currentDate?: Date;

  public get days(): number[] {
    return Array(7)
            .fill(0)
            .map((_: null, index: number) => index + 1);
  }
}
</script>

<style lang="scss">
  .t-calendar {
    // Root element
    $root: &;

    // Config
    --calendar-day-button-radius: 0;
    --calendar-day-button-font-size: var(--size-6);
    --calendar-day-button-radius-small: var(--radius-small);
    --calendar-day-button-border-width: 1px;
    --calendar-day-button-border-color: var(--grey-lightest);
    --calendar-day-button-background-color: var(--white);
    --calendar-day-button-height: 2.5em;
    --calendar-day-button-line-height: 1.5;
    --calendar-day-button-padding-vertical: calc(0.5em - var(--calendar-day-button-border-width));
    --calendar-day-button-padding-horizontal: calc(0.75em - var(--calendar-day-button-border-width));
    --calendar-day-button-text-color: var(--grey-darker);
    --calendar-day-button-text-decoration: underline;
    --calendar-day-button-box-shadow: none;

    background: var(--white);
    border: 1px solid var(--grey-lighter);
    border-radius: var(--radius);

    &__month {
      display: grid;
      grid-template-columns: 46px 1fr 46px;
      align-items: center;
      justify-items: center;
      font-weight: bold;
    }

    &__month-button {
      --button-text-color: var(--grey);
      --button-radius: 0;

      &:first-child {
        border-right: 1px solid var(--grey-lightest);
      }

      &:last-child {
        border-left: 1px solid var(--grey-lightest);
      }

      &:hover {
        --button-text-color: var(--grey-darker);
      }
    }

    &__days-of-week {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      align-items: center;
      justify-items: center;
      border-bottom: 1px solid var(--grey-lightest);
    }

    &__days-of-week-item {
      width: 100%;
      padding: 10px 0;
      font-size: var(--size-7);
      color: var(--grey);
      text-align: center;
      text-transform: uppercase;
      border-top: 1px solid var(--grey-lightest);
    }

    &__days-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }

    &__day-button {
      position: relative;
      z-index: 1;
      display: block;
      height: 2.5em;
      padding: 0;
      appearance: none;
      font-size: var(--calendar-day-button-font-size);
      line-height: 2.1;
      color: var(--calendar-day-button-text-color);
      text-decoration: none;
      cursor: pointer;
      background: var(--calendar-day-button-background-color);
      border-top: var(--calendar-day-button-border-width) solid transparent;
      border-right: var(--calendar-day-button-border-width) solid var(--calendar-day-button-border-color);
      border-bottom: var(--calendar-day-button-border-width) solid var(--calendar-day-button-border-color);
      border-left: var(--calendar-day-button-border-width) solid transparent;
      border-radius: var(--calendar-day-button-radius);
      outline: none;
      box-shadow: var(--calendar-day-button-box-shadow);
      transition: all var(--speed) var(--easing);

      &:nth-child(7n) {
        border-right-color: transparent;
      }

      &:nth-child(n+29) {
        border-bottom-color: transparent;
      }

      &:hover {
        --calendar-day-button-border-color: var(--grey-light);

        border: var(--calendar-day-button-border-width) solid var(--calendar-day-button-border-color);
      }

      &_is_today {
        --calendar-day-button-border-color: var(--color-primary);
        --calendar-day-button-box-shadow: 0 0 1px 1px var(--white);

        z-index: 4;
        background-color: var(--calendar-day-button-background-color);
        border: var(--calendar-day-button-border-width) solid var(--calendar-day-button-border-color);

        &:hover {
          --calendar-day-button-border-color: var(--color-primary);
        }
      }

      &_is_active,
      &:focus,
      &:active {
        --calendar-day-button-border-color: var(--color-primary);
        --calendar-day-button-text-color: var(--white);
        --calendar-day-button-box-shadow: 0 0 1px 1px var(--white);

        z-index: 4;
        background-color: var(--color-primary);
        border: var(--calendar-day-button-border-width) solid var(--calendar-day-button-border-color);

        #{$root}__day-button-event-indicator {
          background-color: var(--white);
        }

        &:hover {
          --calendar-day-button-border-color: var(--color-primary);
        }
      }
    }

    &__day-button-label {
      display: inline-flex;
      align-self: center;
      justify-self: center;
      height: 100%;
      font-size: var(--size-6);
    }

    &__day-button-event-indicator {
      position: absolute;
      bottom: 3px;
      left: calc(50% - 2.5px);
      display: flex;
      width: 5px;
      height: 5px;
      margin: auto;
      background-color: var(--color-primary);
      border-radius: 100%;
    }

    // padding-top: var(--spacing);
    // padding-bottom: var(--spacing);
  }
</style>
