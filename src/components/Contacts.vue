<template>
<ul class="contacts">
  <li class="contact" v-for="(item, i) in contacts" :key="i">
    <i :class="item.icon"></i>
    <a :href="item.href" target="_blank" :title="item.title">{{item.label}}</a>
  </li>
</ul>
</template>

<script>
  export default {
    name: 'contacts',
    data() {
      return {
        contacts: [{
          href: 'mailto:val.saven@gmail.com?subject=Message%20from%20valsaven.com',
          title: 'Contact Val Saven',
          label: 'Email',
          icon: 'icon-mail-squared',
        },
        {
          href: 'https://www.linkedin.com/in/valsaven',
          title: 'Val Saven\'s CV on LinkedIn',
          label: 'LinkedIn',
          icon: 'icon-linkedin-squared',
        },
        {
          href: 'https://github.com/valsaven',
          title: 'Val Saven on Github',
          label: 'GitHub',
          icon: 'icon-github-squared',
        },
        {
          href: 'https://twitter.com/valsaven',
          title: 'Val Saven on Twitter',
          label: 'Twitter',
          icon: 'icon-twitter-squared',
        }],
      }
    },
  };
</script>

<style scoped>
@import url('../assets/style/contacts-icons.css');

.contacts {
  margin: 20px;
  padding: 0;
  list-style: none;
}

.contact {
  display: flex;
  align-items: center;
}

.contact > i {
  font-size: 2rem;
  color: #fff;
}

.contact > a {
  font-size: 1.2rem;
}
</style>
