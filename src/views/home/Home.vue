<template>
	<div name="home">
		<home-nav-bar />
			<control-bar :titles="titles" 
			class="control-bar1"
			@tabClick="tabClick"
			ref="ControlBar1" 
			v-show="isShowCBar"/>
		<scroll
			ref="scroll"
			@scroll="listenScroll"
			:probe-type="3"
		>
			<template #content>
				<home-swiper @swiperImgLoaded="getTop"/>
				<home-recommends :recommends="recommends" />
				<control-bar :titles="titles" @tabClick="tabClick" ref="ControlBar2"/>
					<goods-list />
					<ul>
			<li>suibiandemingzi1</li>
			<li>suibiandemingzi2</li>
			<li>suibiandemingzi3</li>
			<li>suibiandemingzi4</li>
			<li>suibiandemingzi5</li>
			<li>suibiandemingzi6</li>
			<li>suibiandemingzi7</li>
			<li>suibiandemingzi8</li>
			<li>suibiandemingzi9</li>
			<li>suibiandemingzi10</li>
			<li>suibiandemingzi11</li>
			<li>suibiandemingzi12</li>
			<li>suibiandemingzi13</li>
			<li>suibiandemingzi14</li>
			<li>suibiandemingzi15</li>
			<li>suibiandemingzi16</li>
			<li>suibiandemingzi17</li>
			<li>suibiandemingzi18</li>
			<li>suibiandemingzi19</li>
			<li>suibiandemingzi20</li>
			<li>suibiandemingzi21</li>
			<li>suibiandemingzi22</li>
			<li>suibiandemingzi23</li>
			<li>suibiandemingzi24</li>
			<li>suibiandemingzi25</li>
			<li>suibiandemingzi26</li>
			<li>suibiandemingzi27</li>
			<li>suibiandemingzi28</li>
			<li>suibiandemingzi29</li>
			<li>suibiandemingzi30</li>
			<li>suibiandemingzi31</li>
			<li>suibiandemingzi32</li>
			<li>suibiandemingzi33</li>
			<li>suibiandemingzi34</li>
			<li>suibiandemingzi35</li>
			<li>suibiandemingzi36</li>
			<li>suibiandemingzi37</li>
			<li>suibiandemingzi38</li>
			<li>suibiandemingzi39</li>
			<li>suibiandemingzi40</li>
			<li>suibiandemingzi41</li>
			<li>suibiandemingzi42</li>
			<li>suibiandemingzi43</li>
			<li>suibiandemingzi44</li>
			<li>suibiandemingzi45</li>
			<li>suibiandemingzi46</li>
			<li>suibiandemingzi47</li>
			<li>suibiandemingzi48</li>
			<li>suibiandemingzi49</li>
			<li>suibiandemingzi50</li>
					</ul>
			</template>
		</scroll>
		<back-top @click.native="backClick" v-show="isShowBackTop"/>
	</div>
</template>

<script>
import HomeSwiper from "./childcomps/HomeSwiper";
import HomeNavBar from "./childcomps/HomeNavBar";
import HomeRecommends from "./childcomps/HomeRecommends";
import ControlBar from "../../components/content/controlbar/ControlBar.vue";
import GoodsList from '../../components/content/goods/GoodsList.vue';
import Scroll from '../../components/common/scroll/Scroll.vue';
import BackTop from '../../components/content/backtop/BackTop.vue';


export default {
	name: "Home",
	components: {
		HomeSwiper,
		HomeNavBar,
		HomeRecommends,
		ControlBar,
		GoodsList,
		Scroll,
BackTop,
	},
	data() {
		return {
			ControlBarTop: 0,
			isShowBackTop: false,
			isShowCBar: false,
			saveY: 0,
      titles: [
        '流行','新品', '热销' 
      ],
			recommends: [
				{
					title: "x",
					link: "www.baidu.com",
					img: require('@/assets/image/tabbar/wode.png'),
          // img: '',
				},
				{
					title: "k",
					link: "www.baidu.com",
					img: require('../../assets/image/tabbar/wode.png'),
          // img: '',
				},
				{
					title: "k",
					link: "www.baidu.com",
					img: require('../../assets/image/tabbar/wode.png'),
          // img: '',
				},
			],
		};
	},

	// 进入
	activated() {
		this.$refs.scroll.scrollTo(0, this.saveY, 0)

	},
	// 离开
	deactivated() {
		this.saveY = this.$refs.scroll.getScrollY()
	},
  methods: {
		// 可以重新计算contentScroll的方法
		// 通常会包装一层防抖函数
		// this.$refs.scroll.refresh()

		// 通过监听swiper的图片加载完成后，
		// 来获取controlBar的offsetTop
		getTop() {
			this.ControlBarTop = this.$refs.ControlBar2.$el.offsetTop
			// console.log(this.ControlBarTop);
		},
		// backTop功能实现
		backClick() {
			this.$refs.scroll.scrollTo(0, 0)
		},
		// 在home中实现监听滚动位置
		listenScroll(position) {
			this.isShowBackTop = -position.y > 700
			// 通过滚动位置来决定controlBar是否吸顶
			this.isShowCBar = this.ControlBarTop < -position.y
		},
		// 防抖动函数
		debunce(func, delay){
			let timer = null
			if (timer) {
				clearTimeout(timer)
			}
			return function (...args){
				timer = setTimeout(() => {
					func.apply(this, args)
				},delay)
			}
		},
    tabClick(index) {

    }
  },
};
</script>
<style>
#home {
	position: relative;
}
.control-bar1 {
	position:relative;
	z-index: 9;
}
</style>