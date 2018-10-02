<template>
  <div class="block-body home">
    <div class="home-item">
      <h1>Site overview</h1>
      <p>This website is a homepage of Val Saven.</p>
      <p>If you want to contact me, please use the ones listed in the contacts menu.</p>
    </div>
    <div class="home-item">
      <h1>Simple self-introduction</h1>
      <p>My name is Val Saven. This is my working alias.</p>
      <p>I'm a software developer.</p>
      <p>My favorite language is JavaScript, I develop on Linux and Windows.</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
/* Fonts */
@import url('https://fonts.googleapis.com/css?family=Poiret+One');

$main-text-color: #fffffa;
$main-bg-color: #222;
$head-bg-color: #41b883;
$body-bg-color: #525252;
$wings-1-color: #45ccca;
$wings-2-color: #8fd67a;
$wings-3-color: #e5d59a;
$wings-4-color: #e7966a;
$wings-5-color: #ed5589;
$wings-6-color: #b565c6;
$wings-7-color: #3366ff;
$wings-8-color: #7392ec;

/* Flandre Theme */
/* :root {
  --main-text-color: #fffffa;
  --main-bg-color: #941737;
  --head-bg-color: #cf343e;
  --body-bg-color: #b51833;

  --wings-1-color: #45ccca;
  --wings-2-color: #8fd67a;
  --wings-3-color: #e5d59a;
  --wings-4-color: #e7966a;
  --wings-5-color: #ed5589;
  --wings-6-color: #b565c6;
  --wings-7-color: #7392ec;
} */

.home {
  p {
    color: $main-text-color;
    margin: 10px 20px;
  }
}

.home-item {
  margin: 20px;
  padding: 10px;
  background-color: #353535;
}
</style>
