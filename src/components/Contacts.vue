<template>
<ul class="contacts">
  <li v-for="(item, i) in contacts" :key=i>
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
        },
        {
          href: 'https://www.linkedin.com/in/valsaven',
          title: 'Val Saven\'s CV on LinkedIn',
          label: 'LinkedIn',
        },
        {
          href: 'https://github.com/valsaven',
          title: 'Val Saven on Github',
          label: 'GitHub',
        },
        {
          href: 'https://twitter.com/valsaven',
          title: 'Val Saven on Twitter',
          label: 'Twitter',
        }],
      }
    },
  };
</script>

<style scoped>
</style>
