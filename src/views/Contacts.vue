<template>
  <ul class="contacts">
    <li
      v-for="(item, i) in contacts"
      :key="i"
      class="contact"
    >
      <a
        :href="item.href"
        :title="item.title"
        class="contact-title"
        target="_blank"
      >
        <i
          :class="item.icon"
          class="contact-icon"
        />
        {{ item.label }}
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Contacts',
  data() {
    return {
      contacts: [
        {
          href: 'mailto:val.saven@gmail.com?subject=Message%20from%20valsaven.com',
          title: 'Contact Val Saven',
          label: 'Email',
          icon: 'fas fa-envelope',
        },
        {
          href: 'https://www.linkedin.com/in/valsaven',
          title: 'Val Saven on LinkedIn',
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
        {
          href: 'https://medium.com/@valsaven',
          title: 'Val Saven on Medium',
          label: 'Medium',
          icon: 'fab fa-medium-m',
        },
        {
          href: 'https://instagram.com/valsaven',
          title: 'Val Saven on Instagram',
          label: 'Instagram',
          icon: 'fab fa-instagram instagram',
        },
      ],
    };
  },
});
</script>

<style scoped>
.contacts {
  padding: 0;
  list-style: none;
}

.contact {
  align-items: center;
  display: flex;
  padding: 4px 0;
}

.contact-icon {
  font-size: 32px;
  height: 32px;
  margin-right: 10px;
  width: 32px;
}

.contact-icon.fa-envelope {
  color: #d44638;
}

.contact-icon.fa-github-alt {
  color: #24292e;
}

.contact-icon.fa-linkedin-in {
  color: #0e72a3;
}

.contact-icon.fa-twitter {
  color: #1c9ceb;
}

.contact-title {
  align-items: center;
  display: flex;
  font-family: 'Lato', sans-serif;
  font-size: 1.1rem;
}

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
