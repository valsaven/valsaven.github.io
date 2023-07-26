<template>
  <button
    class="w-6"
    @click="$emit('click')"
  >
    <v-icon
      :active="active"
      :value="icon"
    />
  </button>
</template>

<script setup lang="ts">
import { PropType, toRefs } from 'vue';

import VIcon from './VIcon/VIcon.vue';
import { VIconType } from './VIcon/types';

const props = defineProps({
  icon: String as PropType<VIconType>,
  active: Boolean,
});

const { icon, active } = toRefs(props);
</script>
