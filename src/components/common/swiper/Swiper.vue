<template>
  <div id="hy-swiper">
    <div @click="imgClick" 
        class="swiper" 
        :style="swiperStyle" 
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
        @touchmove="onTouchMove">
      <slot></slot>
    </div>
    <div v-if="this.list.length > 1" class="indicator">
      <div v-for="(item, index) in list" class="indi-item"
      :class="{active: index == currentIndex}" 
      :key="index">
      </div>
    </div>  
  </div>
  
</template>

<script>
import SwiperItem from 'components/common/swiper/SwiperItem'

// index list的数组长度
// isAuto 是否自动播放
// interval 自动播放的间隔时间
// radtio 手指拖动比例来决定是否拖到下一页
// list 包含图片信息的数组

// swiperWidth 轮播图的宽度
// currentIndex 当前图片的索引
// timer 定时器
// touchStart 记录触摸开始位置
// touchEnd 记录触摸结束位置
// distance
// isScrolling

// imgClick 图片点击
// onTouchStart 监听触摸事件的开始
// onTouchEnd 监听触摸事件的结束
// onTouchMove 监听触摸事件的移动
// handleMove 处理图片的拖动
// autoHandleMove 自动进行图片移动，即自动播放
export default {
  name: "Swiper",
  components: {
    SwiperItem
  },
  props: {
    isAuto: {
      type: Boolean,
      default: true  
    },
    interval: {
      type: Number,
      default: 2500
    },
    radtio: {
      type: Number,
      default: 0.3
    },
    list: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      index: this.list.length,
      swiperWidth: 0,
      currentIndex: 0,
      timer: {},
      touchStart: {},
      touchEnd: {},
      swiperStyle: {},
      distance: 0,
      isScrolling: false,
    }
  },
  computed: {
   
  },
  mounted() {
    this.autoHandleMove()

    // 适应不同移动端的宽度，防止轮播图滚动超模
    this.swiperWidth = document.querySelector('.swiper').offsetWidth
  },
  methods: {
// 点击跳转    
    imgClick() {
      // return toLink.indexOf('/') !== -1 ? this.$router.replace(toLink) : '/'
      return console.log(this.swiperWidth)
    },
// 在轮播图收尾分别添加节点，以实现流畅的第一张与最后一张切换
    handleDom() {
      // 获取swipeitem
      
    },
// 封装一个设置transform的方法，方便实时管理图片的移动
    setTransform(position, time=0.8) {
      this.isScrolling = true
      if (time === 0) {
        this.swiperStyle.transition = 'all 0s ease 0s'
        time = 0.8
      }else{
        this.swiperStyle.transition = '0.8s'
      }
      this.swiperStyle.transform = `translateX(-${position}px)`
      this.isScrolling = false
    },
// 处理移动
    handleMove() {
      // 这个判断避免拖动进入负超模
      if(this.currentIndex < 0) this.currentIndex = 0
      
      let moveX = this.swiperWidth * this.currentIndex
      return (this.currentIndex %= this.index) ? this.setTransform(moveX) : this.setTransform(0,0)
      // if(this.currentIndex %= this.index){
        // this.swiperStyle.transform = `translate3d(-${moveX}px, 0, 0)`
        // this.setTransform(moveX)
      // }else{
        //实现快速回到第一张图片的效果
        // this.swiperStyle.transform = `translate3d(0px, 0, 0)`
        // this.swiperStyle.transform = `translateX(0px)`
        // this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
        // this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
      
      // }
    },

// 实现自动移动
    autoHandleMove() {
      
        if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setInterval(() => {
          this.currentIndex++
          this.handleMove()
        },this.interval)

    },

// 管理触摸事件
// 通过在标签中@touchstart绑定触摸开始事件
// 触摸事件开始
    onTouchStart(e) {
      // console.log('start');

      // 在开始触摸事件的时候检查是否正在滚动
      if (this.isScrolling) {
        return
      }

      // 记录开始触摸点

      this.touchStart = e.changedTouches[0].pageX
    },
// 触摸事件的拖动
    onTouchMove(e) {
      // 停止定时器
      clearInterval(this.timer)
      this.touchEnd = e.changedTouches[0].pageX
      this.distance = this.touchStart - this.touchEnd
      let currentPosition = this.currentIndex * this.swiperWidth + this.distance

      this.setTransform(currentPosition)
    },
// 触摸事件结束

    onTouchEnd(e) {
      // 记录结束触摸点
      // this.touchEnd = e.changedTouches[0].pageX
      // 计算差值
      let q = this.distance
      if (q === 0) {
        return
      } else if (q > this.radtio * this.swiperWidth) { // left
        this.currentIndex++
      }else if (q < -this.radtio * this.swiperWidth){ // right
        this.currentIndex--
      }
      this.handleMove()
      this.autoHandleMove()
      // console.log('end');
    }    
  },
}
</script>

<style>
#hy-swiper {
  height: 240px;
  overflow: hidden;
  position: relative;
}

.swiper {
  display: flex;
}

.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 8px;
}

.indi-item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #b7b4b4;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
}

.indi-item.active {
  /**
  *background-color: rgba(212,62,46,1.0);
  */
  background-color: #515151
}

</style>