<template>
  <div>
    <h2>HTML + CSS</h2>
    <!-- 柱状图 -->
    <div class="bargraph">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <!-- 饼图 -->
    <div class="piegraph"></div>
    <!-- 面积图 -->
    <div class="clippath">
      <div></div>
      <div></div>
    </div>
    <h2>SVG</h2>
    <!--
      dataset = {
        total: [25, 26, 40, 45, 68],
        current: [15, 11, 17, 25, 37],
      }
    -->
    <!-- 柱状图 -->
    <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="240px" viewBox="0 0 60 100">
      <g transform="translate(0, 100) scale(1, -1)">
        <g>
          <rect x="1" y="0" width="10" height="25" fill="#37c"/>
          <rect x="13" y="0" width="10" height="26" fill="#37c"/>
          <rect x="25" y="0" width="10" height="40" fill="#37c"/>
          <rect x="37" y="0" width="10" height="45" fill="#37c"/>
          <rect x="49" y="0" width="10" height="68" fill="#37c"/>
        </g>
        <g>
          <rect x="1" y="0" width="10" height="15" fill="#3c7"/>
          <rect x="13" y="0" width="10" height="11" fill="#3c7"/>
          <rect x="25" y="0" width="10" height="17" fill="#3c7"/>
          <rect x="37" y="0" width="10" height="25" fill="#3c7"/>
          <rect x="49" y="0" width="10" height="37" fill="#3c7"/>
        </g>
      </g>
    </svg>
    <!-- 扇形 -->
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" baseProfile="full">
      <path fill="#110099" d="M 150 150 L 103.647 245.106 A 150 100 0 0 0 271.353 208.779 Z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 92" width="90%" height="100px">
      <path d="M 83 91 L 165 54 A 90 90 0 0 0 1 54 z" stroke-linejoin="round" stroke-width="2" stroke="#83b71c" stroke-opacity="1" fill="none" fill-opacity="1" stroke-dasharray="" stroke-dashoffset="0" stroke-linecap="butt"></path>
    </svg>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Index extends Vue {
  
  created() {
    
  }
  
}
</script>
<style lang="scss" scoped>
h2{
  margin: 30px 10px 20px;
}
/**
   dataset = {
     current: [15, 11, 17, 25, 37],
     total: [25, 26, 40, 45, 68],
   }
 */
.bargraph {
  display: grid;
  width: 150px;
  height: 100px;
  padding: 10px;
  transform: scaleY(3);
  grid-template-columns: repeat(5, 20%);
}
.bargraph div {
  margin: 0 2px;
}
.bargraph div:nth-child(1) {
 background: linear-gradient(to bottom, transparent 75%, #37c 0, #37c 85%, #3c7 0);
}
.bargraph div:nth-child(2) {
 background: linear-gradient(to bottom, transparent 74%, #37c 0, #37c 89%, #3c7 0);
}
.bargraph div:nth-child(3) {
 background: linear-gradient(to bottom, transparent 60%, #37c 0, #37c 83%, #3c7 0);
}
.bargraph div:nth-child(4) {
 background: linear-gradient(to bottom, transparent 55%, #37c 0, #37c 75%, #3c7 0);
}
.bargraph div:nth-child(5) {
 background: linear-gradient(to bottom, transparent 32%, #37c 0, #37c 63%, #3c7 0);
}


.piegraph {
  margin-top: 150px;
  display: inline-block;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-image: conic-gradient(#37c 30deg, #3c7 30deg, #3c7 65deg, orange 65deg, orange 110deg, #f73 110deg, #f73 200deg, #ccc 200deg);
}

.clippath {
  margin-top: 50px;
  width: 300px;
  height: 150px;
  position: relative;
  div{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    &:nth-child(1){
      z-index: 1;
      background:#f73;
      clip-path: polygon(0 40%, 20% 10%, 40% 20%, 60% 10%, 80% 30%, 100% 20%, 100% 100%, 0 100%, 0 0);
    }
    &:nth-child(2){
      z-index: 2;
      background: #3c7;
      clip-path: polygon(0 50%, 20% 30%, 40% 40%, 60% 30%, 80% 40%, 100% 30%, 100% 100%, 0 100%, 0 0);
    }
  }
}
</style>
