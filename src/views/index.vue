<template>
    <div class="index-body">
        <!--导航-->
        <navMenu/>
        <!--主要内容-->
        <mainMenu/>

    </div>
</template>

<script>
    import navMenu from "./commons/nav.vue"
    import mainMenu from "./commons/main.vue"

    export default {
        name: "index",
        components: {
            mainMenu,
            navMenu
        }
    }
</script>

<style lang="scss" scoped>

</style>
