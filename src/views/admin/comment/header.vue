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
                this.$store.commit('app/SET_isCollapse');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../styles/config";

    .header-content {
        position: fixed;
        top: 0;
        left: $adminNavMenu;
        height: 60px;
        right: 0;
        z-index: 2000;
        background-color: #ffffff;
        @include webkit(transition, all .3s ease 0s);
    }

    .icon-font {
        font-size: 35px;
        line-height: 60px;
        margin-left: 10px;
    }

    .open {
        .header-content {
            left: $adminNavMenu;
        }
    }

    .close {
        .header-content {
            left: $adminNavMenuMin;
        }
    }
</style>
