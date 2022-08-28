<template>
    <div class="page-wrapper">
    <div class="page">
      <div class="page-inner">
        <HelloWorld/>
      </div>
    </div>
  </div>
</template>


<script>
import HelloWorld from './components/creative.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

@import '../node_modules/roboto-fontface/css/roboto/roboto-fontface.css';
@import '../node_modules/font-awesome/css/font-awesome.css';
@import '../node_modules/material-design-icons/iconfont/material-icons.css';
@import '../node_modules/source-sans-pro/source-sans-pro.css';
@import '../node_modules/npm-font-open-sans/open-sans.css';
@import '../node_modules/npm-font-open-sans-condensed/open-sans-condensed.css';
@import '../node_modules/raleway-webfont/raleway.css';

  .page-inner{
    height: 100%;
    width: 100%;
  }
  
  .page-wrapper {
    overflow-x: hidden;
    background: #CCCCCC;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    box-sizing: border-box;
  }
  
  .resume {
    height: 100%;
    width: 100%;
  }
  
  .page {
    background: white;
    position: relative;
    width: 21cm;
    height: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }
  </style>
  
