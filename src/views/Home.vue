<template>
  <div class="block-body home">
    <div class="home-item">
      <h3 class="home-title">
        Site overview
      </h3>
      <p>Hi! My name is Val Saven. This is my working alias.</p>
      <p>Welcome to my homepage (´• ω •`).</p>
      <p>If you want to contact me, please use the ones listed in the contacts menu.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import Component from 'vue-class-component';

@Component({})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
/* Fonts */
@import url('https://fonts.googleapis.com/css?family=Poiret+One');
@import '../assets/_vars.scss';

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
    margin: 10px 20px;
  }

  &-title {
    text-align: center;
  }

  &-item {
    margin: 20px;
    padding: 10px;
    /*background-color: #353535;*/
  }
}
</style>
