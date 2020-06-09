<template>
  <ul class="contacts">
    <li
      v-for="(item, i) in contacts"
      :key="i"
      class="contact"
    >
      <a
        class="contact-title"
        :href="item.href"
        :title="item.title"
        target="_blank"
      >
        <i
          class="contact-icon"
          :class="item.icon"
        />
        {{ item.label }}
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Contacts extends Vue {
    contacts = [
      {
        href: 'mailto:val.saven@gmail.com?subject=Message%20from%20valsaven.com',
        title: 'Contact Val Saven',
        label: 'Email',
        icon: 'fas fa-envelope',
      },
      {
        href: 'https://www.linkedin.com/in/valsaven',
        title: "Val Saven's CV on LinkedIn",
        label: 'LinkedIn',
        icon: 'fab fa-linkedin-in',
      },
      {
        href: 'https://github.com/valsaven',
        title: 'Val Saven on Github',
        label: 'GitHub',
        icon: 'fab fa-github-alt',
      },
      {
        href: 'https://twitter.com/valsaven',
        title: 'Val Saven on Twitter',
        label: 'Twitter',
        icon: 'fab fa-twitter',
      },
    ];
}
</script>

<style lang="scss" scoped>
.contacts {
  padding: 0;
  list-style: none;
}

.contact {
  align-items: center;
  display: flex;
  padding: 4px 0;

  &-icon {
    font-size: 32px;
    height: 32px;
    margin-right: 10px;
    width: 32px;

    &.fa-envelope {
      color: #d44638;
    }

    &.fa-github-alt {
      color: #24292e;
    }

    &.fa-linkedin-in {
      color: #0E72A3;
    }

    &.fa-twitter {
      color: #1c9ceb;
    }
  }

  &-title {
    align-items: center;
    display: flex;
    font-size: 18px;
  }
}
</style>
