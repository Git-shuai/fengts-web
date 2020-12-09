<template>
    <div class="main-content">
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "main"
    }
</script>

<style scoped>
.main-content{
    /*position: fixed;*/
    height: 100%;
    padding-left: 200px;
    padding-top: 60px;
}
</style>
