<template>
  <div class="tabbar-item" @click="itemClick" :style="activeStyle">
    <div v-if="isActive"><slot name="item-icon-active"></slot></div>
    <div v-else><slot name="item-icon"></slot></div>
    <div ><slot name="item-text"></slot></div>

  </div>
</template>

<script>
// 三个插槽管理三个元素，显示图标icon和名字
export default {
  name: 'TabBarItem',
  props: {
// 获取父元素的path，四个item的path都不同
    path: String,
    activeBackColor: {
      type: String,
      default: '#515151'
    },
    activeFontColor: {
      type: String,
      default: 'white'
    }
  },
  data() {
    return {
    }
  },
  computed: {
// 计算属性的isActive用来标识当前活跃item
// 从而使活跃item可以呈现被选中状态
    isActive() {
      return this.path == this.$route.path
    },
// 被选中状态item的css风格，可以通过在父组件添加activeFontColor和activeBackColor来动态改变风格
    activeStyle() {
      return this.isActive ? {color: this.activeFontColor, backgroundColor: this.activeBackColor} : {}
    }
  },
  methods: {
// 绑定点击跳转路由，大页面用replace比较好
    itemClick() {
      this.$router.replace(this.path)
    }
  },
}
</script>

<style>
  .tabbar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 15px;
}
  .tabbar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: bottom;
  }
</style>