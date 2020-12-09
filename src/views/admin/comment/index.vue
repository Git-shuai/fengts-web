<template>
    <div>
        <navMenu />
        <headerMenu />
        <mainMenu />
    </div>
</template>

<script>
    import headerMenu from "./header.vue";
    import mainMenu from "./main.vue";
    import navMenu from "./nav.vue";
    export default {
        name: "index",
        components:{
            headerMenu,
            mainMenu,
            navMenu
        }
    }
</script>

<style scoped>

</style>
