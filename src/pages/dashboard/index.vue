<template>
  <p>Dashboard <tt-icon name="bell" /></p>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

import TtIcon from '@/components/icon/index.vue';
import {
  i18n,
} from '@/plugins/vue-i18n';
import {
  getTitle,
} from '@/utils/meta-info-helper';

@Component({
  name: 'dashboard-index-page',
  components: { TtIcon },
  metaInfo: {
    title: getTitle(i18n.t('pages.dashboard.index.meta.title')),
  },
})
export default class DashboardIndexPage extends Vue {}
</script>
