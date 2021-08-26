<template>
  <div class="home-nav">
  <NavBar>
    <template #center>
      首页
    </template>
  </NavBar>  
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: "HomeNavBar",
  components: {
    NavBar
  }
}
</script>

<style>
.home-nav {
  background-color: #fcfcfc;
}
</style>