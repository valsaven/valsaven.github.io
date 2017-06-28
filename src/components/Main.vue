<template>
  <div class="main">
    <img src="../assets/logo.png">
    <h2>Contacts:</h2>
    <ul class="contacts">
      <li>
        <a href="mailto:val.saven@gmail.com?subject=Message%20from%20valsaven.com" title="Contact Val Saven">email</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/valsaven" target="_blank" title="Val Saven's CV on LinkedIn">LinkedIn</a>
      </li>
      <li>
        <a href="https://github.com/valsaven" target="_blank" title="Val Saven on Github">Github</a>
      </li>
      <li>
        <a href="https://twitter.com/valsaven" target="_blank" title="Val Saven on Twitter">Twitter</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'main',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
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
