<template>
	<div class="home-recommend">
		<div
			@click="click(item)"
			class="recommend-item"
			v-for="(item, index) in recommends"
			:key="item.title"
		>
			<a :href="item.link" >
				<img :src="item.img" alt="" />
			</a>
      <span>{{item.title}}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "HomeRecommends",
	props: {
		recommends: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	data() {
		return {};
	},
	methods: {
		click(item){
			console.log(item);
		}
  }
}
</script>
<style>
.home-recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 14px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
    flex: 1;
  }
.recommend-item img {
      height: 70px;
      margin-bottom: 10px;
    }
.recommend-item span {
	display: block;
}		
</style>