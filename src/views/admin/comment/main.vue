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

<style lang="scss" scoped>
    @import "../../../styles/config";

    .main-content {
        padding-left: $adminNavMenu;
        padding-top: 60px;
        @include webkit(transition, all .3s ease 0s);
    }

    .content {
        margin: 30px;
    }

    .open {
        .main-content {
            padding-left: $adminNavMenu;
        }
    }

    .close {
        .main-content {
            padding-left: $adminNavMenuMin;
        }
    }
</style>
