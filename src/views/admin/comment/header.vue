<template>
  <div class="header-content">
    <div class="pull-left" @click="navMenuStatus">
      <span class="icon iconxitong-copy icon-font"></span>
    </div>
    <!--        <div class="pull-right" @click="logoutBtn">-->

    <!--        </div>-->
    <el-dropdown class="pull-right" @command="handleCommand">
          <span class="el-dropdown-link">
            <el-image class="img-style" :src="url"></el-image>
          </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="userInfo">个人中心</el-dropdown-item>
        <el-dropdown-item command="logout"><span style="color: #df5000">退出登录</span></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import {logout} from "../../../api/auth";
import {removeIsCollapse, removeMenu, removeToken, removeUsername, getUserHeadUrl} from "../../../utils/app";

export default {
  name: "headerMenu",
  data() {
    return {
      url: getUserHeadUrl()
    }
  },
  methods: {
    navMenuStatus() {
      this.$store.commit('app/SET_isCollapse');
    },
    logoutBtn() {
      logout().then((res) => {
        this.$message.success(res.data.message);
        removeToken();
        removeMenu();
        removeUsername();
        removeIsCollapse();
        this.$router.push({
          name: "login"
        });
      }).catch()
    },
    gotoUserInfo() {
      this.$router.push({
        name: "adminPerInfo"
      });
    },
    handleCommand(command) {
      if (command === 'logout') {
        this.logoutBtn();
      }
      if (command === 'userInfo') {
        this.gotoUserInfo();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/config";

.img-style {
  cursor: pointer;
  margin-top: 5px;
  margin-right: 40px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  box-shadow: 2px 2px 10px #909090;
}

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
