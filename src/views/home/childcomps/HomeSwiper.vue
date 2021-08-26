<template>
  <div name="main-swiper">
    <Swiper :list="list">
   
    <SwiperItem v-for="(item, index) in list" :key="index">
         <img :src="item" @load="imgLoaded">
     </SwiperItem>
     
     <!--
    <SwiperItem>
      <img src="../../../assets/image/tabbar/fenlei.png">
    </SwiperItem>
        <SwiperItem>
      <img src="@/assets/image/tabbar/shouye.png">
    </SwiperItem>
        <SwiperItem>
      <img src="@/assets/image/tabbar/shouye.png">
    </SwiperItem>
        <SwiperItem>
      <img src="@/assets/image/tabbar/wode.png">
    </SwiperItem>
    -->
    </Swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
  name: "MainSwiper",
  data() {
    return {
      isLoaded: false,
      list: [
        require('@/assets/image/tabbar/shouye.png'),
        require('@/assets/image/tabbar/fenlei.png'),
        require('@/assets/image/tabbar/wode.png'),
        require('@/assets/image/tabbar/gouwuchekong.png'),
      ]
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    // 监听图片加载完成
    imgLoaded() {
      if(!this.isLoaded) {
        this.$emit("swiperImgLoaded")
        this.isLoaded = true
      }
    }
  },
}
</script>