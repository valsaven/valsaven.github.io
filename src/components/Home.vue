<template>
  <div class="wrapper">
    <!-- Menu -->
    <nav>
      <h2>Menu</h2>
      <ul>
        <li v-for="item in menu">
          <a href="">{{item}}</a>
        </li>
      </ul>
    </nav>
    <!-- Main block -->
    <article>
      <h2>Current path</h2>
      <img src="../assets/logo.png">
      <h2>Contacts:</h2>
      <ul class="contacts">
        <li v-for="(item, i) in contacts" :key=i>
          <a :href="item.href" target="_blank" :title="item.title">{{item.label}}</a>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        menu: [
          'Home',
          'Programming',
          'Anime',
          'Movies',
          'Books',
          'Photography',
          'Contacts',
        ],
        contacts: [{
          href: 'mailto:val.saven@gmail.com?subject=Message%20from%20valsaven.com',
          title: 'Contact Val Saven',
          label: 'email',
        },
        {
          href: 'https://www.linkedin.com/in/valsaven',
          title: 'Val Saven\'s CV on LinkedIn',
          label: 'LinkedIn',
        },
        {
          href: 'https://github.com/valsaven',
          title: 'Val Saven on Github',
          label: 'Github',
        },
        {
          href: 'https://twitter.com/valsaven',
          title: 'Val Saven on Twitter',
          label: 'Twitter',
        }],
      };
    },
  };
</script>

<style scoped>
  .contacts {
    list-style: none;
  }

  .contacts li {
    display: inline;
  }

  .contacts li:after {
    content: ' / ';
  }

  .contacts li:last-child:after {
    content: '';
  }
</style>
