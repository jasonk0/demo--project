<template>
	<div class="control-bar">
		<div
      @click="barClick(index)"
			class="bar-item"
			v-for="(item, index) in titles"
			:key="index"
			:class="{ active: index == currentIndex }"
		>
			<span>{{ item }}</span>
		</div>
	</div>
</template>
<script>
export default {
	name: "ControlBar",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
	data() {
		return {
			currentIndex: 0,
		};
	},
	computed: {},
  methods: {
    // 点击切换处于活跃状态的标签
    barClick(index) {
      this.currentIndex = index
      // 向父元素返回当前标签的currentIndex
			this.$emit('tabClick', index)
    }
  },
};
</script>
<style>
.control-bar {
	display: flex;
	font-size: 15px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	background-color: #fff;
}
.control-bar .bar-item {
	flex: 1;
}
.control-bar .bar-item span {
	padding: 3px;
  
}
.active span {
  color: #515151;
  border-bottom: 2px solid #515151;
}
</style>