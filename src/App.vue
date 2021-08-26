<template>
	<div>
		<router-view v-slot="{ Component }">
			<keep-alive>
				<component :is="Component"></component>
			</keep-alive>
		</router-view>
    

		<MainTabBar />
	</div>
</template>
<script>
import MainTabBar from "./components/content/maintabbar/MainTabBar";

export default {
	name: "App",
	components: {
		MainTabBar,
	},
};
</script>
<style>
</style>
