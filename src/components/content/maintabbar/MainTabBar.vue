
<template>
  <TabBar>
    <TabBarItem path="/home">
      <template #item-icon-active >
        <img src="@/assets/image/tabbar/shouye-active.png"/>
      </template>
       <template #item-icon >
        <img src="@/assets/image/tabbar/shouye.png"/>
      </template>
      <template #item-text >
        <div>首页</div>
      </template>
    </TabBarItem>
     <TabBarItem path="/catogory">
      <template #item-icon-active >
        <img src="@/assets/image/tabbar/fenlei-active.png"/>
      </template>
       <template #item-icon >
        <img src="@/assets/image/tabbar/fenlei.png"/>
      </template>
      <template #item-text >
        <div>分类</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/cart">
      <template #item-icon-active >
        <img src="@/assets/image/tabbar/gouwuchekong-active.png"/>
      </template>
       <template #item-icon >
        <img src="@/assets/image/tabbar/gouwuchekong.png"/>
      </template>
      <template #item-text >
        <div>购物车</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/profile">
      <template #item-icon-active >
        <img src="@/assets/image/tabbar/wode-active.png"/>
      </template>
       <template #item-icon >
        <img src="@/assets/image/tabbar/wode.png"/>
      </template>
      <template #item-text >
        <div>我的</div>
      </template>
    </TabBarItem>  
   
  </TabBar>
</template>

<script>
// path对应路由地址，用于筛选出被选中状态的item
// activeBackColor 被选中后的背景颜色
// activeFontColor 被选中后的字体颜色
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>