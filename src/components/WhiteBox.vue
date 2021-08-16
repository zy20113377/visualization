<template>
  <div class="white-box" :style="box_style">
    <div class="title" v-if="title" :style="title_style">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class WhiteBox extends Vue {
  @Prop({ default: '' }) private title!: string;
  @Prop({ default: 8 }) private borderRadius!: number;
  @Prop({ default: 33 }) private marginBottom!: number;
  @Prop({ default: -10 }) private titleTop!: number;
  @Prop({ default: '' }) private bgImage!: string;
  fontSize = Number(
    (getComputedStyle(window.document.documentElement) as any)['font-size'].slice(0, -2),
  );
  get box_style() {
    return {
      borderRadius: (this.borderRadius * this.fontSize) / 75 + 'px',
      marginBottom: (this.marginBottom * this.fontSize) / 75 + 'px',
      backgroundImage: this.bgImage ? `url(${this.bgImage})` : '',
    };
  }
  get title_style() {
    return {
      top: (this.titleTop * this.fontSize) / 75 + 'px',
    };
  }
}
</script>
<style scoped lang="scss">
.white-box {
  position: relative;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 100% auto;
  width: 100%;
  display: inline-block;
  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: r(349);
    height: r(50);
    box-sizing: border-box;
    // padding-top: r(3);
    background: url(../assets/index1/title_bg.png) no-repeat center center;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: r(30);
    font-weight: bold;
    color: #ffffff;
  }
}
</style>
