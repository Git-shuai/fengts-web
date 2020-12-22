<template>
    <div :class="[this.isCollapse?'close':'open']">
        <navMenu/>
        <headerMenu/>
        <mainMenu/>
    </div>
</template>

<script>
    import headerMenu from "./header.vue";
    import mainMenu from "./main.vue";
    import navMenu from "./nav.vue";

    export default {
        name: "index",
        components: {
            headerMenu,
            mainMenu,
            navMenu
        },
        computed:{
            isCollapse:function () {
                return this.$store.state.app.isCollapse;
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>
