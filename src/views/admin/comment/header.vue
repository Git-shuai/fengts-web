<template>
    <div class="header-content">
        <div class="pull-left" @click="navMenuStatus">
            <span class="icon iconxitong-copy icon-font"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headerMenu",
        methods: {
            navMenuStatus() {
                console.log("123")
            }
        }
    }
</script>

<style scoped>
    .header-content {
        position: fixed;
        top: 0;
        left: 200px;
        height: 60px;
        right: 0;
        background-color: #ffffff;
    }
    .icon-font{
        font-size: 35px;
        line-height: 60px;
        margin-left: 10px;
    }
</style>
