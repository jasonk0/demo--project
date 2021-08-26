<template>
  <div class="tab-bar">
    <slot>
    </slot>
  </div>
</template>

<script>
import TabBarItem from './TabBarItem'

export default {
  name: "TabBar",
  components: {
    TabBarItem
  }
  
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
.tab-bar {
  position: fixed;
  display: flex;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -2px 0px rgba(100, 100, 100, .15);
}


</style>
