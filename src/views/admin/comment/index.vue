<template>
    <div :class="[this.isCollapse?'close':'open']">
        <div class="index">
            <navMenu/>
            <headerMenu/>
            <div class="mainMenu">
                <mainMenu/>
            </div>
        </div>
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
        computed: {
            isCollapse: function () {
                return this.$store.state.app.isCollapse;
            }
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    .index{
        .mainMenu{
            top: 0;
            right: 0;
            left: 0;
        }
    }
</style>
