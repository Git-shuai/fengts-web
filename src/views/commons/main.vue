<template>
  <div class="main-content">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "mainIndex"
}
</script>

<style lang="scss" scoped>
@import "../../styles/config.scss";

.main-content {
  width: 100%;
  height: 100vh;
}
</style>
