<template>
  <div>
    <div class="not-found">404 NOT FOUND</div>
    <router-link class="router-to" to="/">
      <div>跳到首页</div>
    </router-link>

  </div>
</template>

<script>
export default {
  name: "404"
}
</script>

<style lang="scss" scoped>
.not-found {
  font-size: 100px;
  text-align: center;
  margin-top: 200px;
}

.router-to {
  text-align: center;
  margin-top: 20px;
  font-size: 32px;
}
</style>