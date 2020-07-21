<template>
  <figure class="t-avatar"
          :class="{
            [`t-avatar_gender_${gender}`]: gender,
            [`t-avatar_size_${size}`]: size,
          }">
    <img v-if="image"
         class="t-avatar__image"
         :src="image"
         :alt="getFullName">
    <span v-else
          class="t-avatar__name-abbr">
      {{ getNameAbbr }}
    </span>
  </figure>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

import { TSizes } from '@/types';

enum Genders {
  male = 'male',
  female = 'female',
  unknown = 'unknown',
}

type Gender =
  Genders.male |
  Genders.female |
  Genders.unknown;

@Component({
  name: 'TAvatar',
})
export default class TIcon extends Vue {

  @Prop({ type: String })
  public size?: TSizes;

  @Prop({ type: String })
  public image?: string;

  @Prop({ type: String })
  public firstName?: string;

  @Prop({ type: String })
  public lastName?: string;

  @Prop({ type: String })
  public gender?: Gender;

  get getFullName(): string {
    return `${this.firstName ? this.firstName : ''} ${this.lastName ? this.lastName : ''}`;
  }

  get getNameAbbr(): string {
    return `${this.firstName ? this.firstName.charAt(0) : ''}${this.lastName ? this.lastName.charAt(0) : ''}`;
  }
}
</script>

<style lang="scss">
.t-avatar {
  // Root element
  $root: &;

  // Config
  --avatar-border-radius: 100%;
  --avatar-size: var(--size-normal);
  --avatar-size-small: var(--size-small);
  --avatar-size-medium: var(--size-medium);
  --avatar-size-large: var(--size-large);
  --avatar-border: 2px solid var(--white);
  --avatar-background-color: var(--grey-light);

  // Props
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: var(--avatar-size);
  height: var(--avatar-size);
  overflow: hidden;
  font-size: 1em;
  font-weight: var(--weight-bold);
  color: var(--white-bis);
  user-select: none;
  background-color: var(--avatar-background-color);
  border: var(--avatar-border);
  border-radius: var(--avatar-border-radius);

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: var(--avatar-border-radius);
  }

  &__name-abbr {
    display: inline-flex;
    font-size: calc(var(--avatar-size) / 2);
  }

  &_size {
    &_large {
      --avatar-size: var(--avatar-size-large);
    }

    &_medium {
      --avatar-size: var(--avatar-size-medium);
    }

    &_small {
      --avatar-size: var(--avatar-size-small);
    }

    &_32 {
      --avatar-size: 32px;
    }

    &_48 {
      --avatar-size: 48px;
    }

    &_64 {
      --avatar-size: 64px;
    }

    &_128 {
      --avatar-size: 128px;
    }
  }

  &_gender {
    &_male {
      background-color: var(--cyan);
    }

    &_female {
      background-color: var(--pink);
    }
  }
}
</style>
