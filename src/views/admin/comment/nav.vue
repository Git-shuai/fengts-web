<template>
  <div id="nav-wrap" class="nav-content">
    <!--用户信息展示-->
    <div>

      <el-image v-if="this.isCollapse" class="img-style-true" :src="url"></el-image>
      <el-image v-else class="img-style-false" :src="url"></el-image>
    </div>
    <el-menu class="el-menu-vertical-demo"
             background-color="#222d3b"
             text-color="#fff"
             :collapse-transition="false"
             :collapse="this.isCollapse"
             :default-active="defaultActive"
             @select="handleSelect"
             :router="true">
      <template v-for="item in menuList">
        <el-submenu :key="item.menuId" :index="item.menuUrl">
          <template slot="title">
            <i :class="item.iconName"></i>
            <span slot="title"> {{ item.menuItemName }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="itemC in item.child" :key="itemC.menuId" :index="itemC.menuUrl">
              <i :class="itemC.iconName"></i> {{ itemC.menuItemName }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import {getMenu, getUsername,getUserHeadUrl, setUserHeadUrl} from "@/utils/app";
import {queryUserByUsername} from "api/auth";

export default {
  name: "navMenu",
  computed: {
    //导航栏状态
    isCollapse: function () {
      return this.$store.state.app.isCollapse;
    }
  },
  data() {
    return {
      //导航路由
      menuList: [],
      url: getUserHeadUrl(),
      defaultActive: '/admin/dashBoard'

    }
  },
  created() {
    this.getMenuList();
    this.selectUserByUsername();
  },
  methods: {
    //加载前端菜单
    getMenuList() {
      let data = getMenu();
      this.menuList = JSON.parse(data);
    },
    handleSelect(keyPath) {
      this.defaultActive = keyPath;
    },
    //加载用户
    selectUserByUsername() {
      let userName = getUsername();
      queryUserByUsername(userName).then((res) => {
        this.url = res.data.data.headurl;
        setUserHeadUrl(this.url);
      }).catch()
    },
  },
  watch: {
    $route() {
      this.handleSelect(this.$route.path);
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../../../styles/config";

.img-style-false {
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 8px;
  margin-left: 50px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  box-shadow: 2px 2px 10px #909090;
  @include webkit(transition, all .3s ease 0s);
}

.img-style-true {
  cursor: pointer;
  width: 66px;
  height: 66px;
  box-shadow: 2px 2px 10px #909090;
  @include webkit(transition, all .3s ease 0s);
}

.nav-content {
  position: fixed;
  top: 0;
  left: 0;
  width: $adminNavMenu;
  height: 100vh;
  z-index: 9999;
  background-color: $adminNavColor;
  @include webkit(transition, all .3s ease 0s);
}

.open {
  #nav-wrap {
    width: $adminNavMenu;
  }
}

.close {
  #nav-wrap {
    width: $adminNavMenuMin;
  }
}

/deep/ .el-submenu {
  margin: -1px;
}

/deep/ .el-menu-item {
  font-size: 16px;
  margin: 0;
}

/deep/ .el-submenu__title {
  font-size: 16px;
}

/deep/ .el-menu-item-group__title {
  padding: 0;
}

</style>
