<template>
    <div class="main-content">
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mainMenu"
    }
</script>

<style scoped>
    .main-content {
        /*position: fixed;*/
        padding-left: 200px;
        padding-top: 60px;
    }

    .content {
        margin: 30px;
        background-color: #fff;
    }
</style>
