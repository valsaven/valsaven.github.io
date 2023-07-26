<template>
  <!-- Contacts Page -->
  <ul class="list-none p-0">
    <li
      v-for="(item, i) in contacts"
      :key="i"
      class="flex items-center px-0 py-1"
    >
      <!-- Title -->
      <a
        :href="item.href"
        :title="item.title"
        class="flex items-center font-lato text-lg dark:text-vs-main-text-color-dark"
        target="_blank"
      >
        <!-- Icon -->
        <i
          :class="item.icon"
          class="mr-3 h-8 w-8 text-3xl"
        />
        {{ item.label }}
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const contacts = computed(() => [
  {
    href: 'mailto:val.saven@gmail.com?subject=Message%20from%20valsaven.com',
    title: t('contacts.email.title'),
    label: t('contacts.email.label'),
    icon: 'fas fa-envelope text-[#d44638]',
  },
  {
    href: 'https://github.com/valsaven',
    title: t('contacts.github.title'),
    label: t('contacts.github.label'),
    icon: 'fab fa-github-alt text-[#24292e] dark:text-vs-main-text-color-dark',
  },
  {
    href: 'https://twitter.com/valsaven',
    title: t('contacts.twitter.title'),
    label: t('contacts.twitter.label'),
    icon: 'fab fa-twitter text-[#1c9ceb]',
  },
  {
    href: 'https://medium.com/@valsaven',
    title: t('contacts.medium.title'),
    label: t('contacts.medium.label'),
    icon: 'fab fa-m text-[#24292e] dark:text-vs-main-text-color-dark',
  },
]);
</script>

<style>
/* Deprecated */
.contact-icon.fa-linkedin-in {
  color: #0e72a3;
}

/* Deprecated */
.instagram {
  color: transparent;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285AEB 90%
  );
  background-clip: text;
}
</style>
