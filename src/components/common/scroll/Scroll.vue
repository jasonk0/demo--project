<template>
	<div class="wrapper" ref="scroll">
		<div class="content"><slot name="content"></slot></div>
	</div>
</template>
<script>
import BScroll from "better-scroll";

export default {
	name: "Scroll",
	props: {
		probeType: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {};
	},
	mounted() {
		this.init();
	},
	methods: {
		// 刷新bs以重新计算content高度
		refresh() {
      this.bs && this.bs.refresh();
    },
		// 移动到目标位置，backTop按钮
		scrollTo(x, y, time = 300) {
			this.bs && this.bs.scrollTo(x, y, time);
		},
    getScrollY(){
      this.bs.y ? this.bs.y : 0
    },
		// 下拉超过阈值，加载商品内容
		pullingUp() {},

		init() {
			this.bs = new BScroll(this.$refs.scroll, {
				probeType: this.probeType,
				click: true,
			});
			this.bs.on("contentChanged", (content) => {
				// console.log("--- newContent ---");
				// console.log(content);
			});
			this.bs.on("scrollStart", () => {
				// console.log("scrollStart");
			});
			this.bs.on("scrollEnd", () => {
				// console.log("scrollingEnd");
			});
      // 监听滚动的位置，并返回给父组件
			if (this.probeType === 2 || this.probeType === 3) {
				this.bs.on("scroll", (position) => {
					this.$emit("scroll", position);
				})
			};
		},
	},
};
</script>
<style>
.wrapper .content {
     position: relative;  
}
.wrapper {
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  position: absolute;
	overflow: hidden;
  height: calc(100vh - 93px);
}
</style>