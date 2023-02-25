<template>
  <div>
    <Header>
      <router-view></router-view>
    </Header>
  </div>
</template>


<script>
import Header from "./Header.vue";
export default {
  components: { Header },
};
</script>

<style>
</style>