<template>
  <div>
    <button @click="login">登陆</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push("/index");
    },
  },
};
</script>

<style>
</style>