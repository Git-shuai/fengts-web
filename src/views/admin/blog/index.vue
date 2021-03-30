<template>
  <div class="blogList-content">
    <!--搜索-->
    <div class="search-content">
      <el-form :inline="true" ref="formInline" :model="searchParam" class="demo-form-inline">
        <el-form-item class="search-form-item" label="关键字:" prop="keyWord">
          <el-input size="small" v-model="searchParam.keyWord"></el-input>
        </el-form-item>
        <el-form-item class="search-form-item" label="博客状态:" prop="blogStatus">
          <el-select size="small" v-model="searchParam.blogStatus">
            <el-option value="草稿箱" label="草稿箱"></el-option>
            <el-option value="发布" label="发布"></el-option>
            <el-option value="回收站" label="回收站"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="search-form-item" label="博客分类:" prop="classifyId">
          <el-select size="small" v-model="searchParam.classifyId">
            <el-option v-for="item in this.blogClassifyList" :key="item.id" :label="item.classifyName"
                       :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="submitForm">查询</el-button>
          <el-button size="small" @click="resetForm('formInline')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--写文章-->
    <div class="write-button">
      <el-button size="mini" type="primary" @click="toWrite">写文章</el-button>
    </div>

    <!--博客列表-->
    <div class="blog-list">
      <el-table :default-sort="{prop: 'date', order: 'descending'}" :data="tableData"
                style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="title" label="标题" width="180"></el-table-column>
        <el-table-column prop="auth" label="作者" width="180"></el-table-column>
        <el-table-column prop="blogStatus" label="状态" width="100">
          <template slot-scope="scope">
            <el-tag style="margin: 5px;padding: 0 5px" v-if="scope.row.blogStatus==='发布'" type="success"><span style="line-height: 32px;">{{scope.row.blogStatus}}</span></el-tag>
            <el-tag style="margin: 5px;padding: 0 5px" v-else type="warning"><span style="line-height: 32px;">{{scope.row.blogStatus}}</span></el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="classifyName" label="分类" width="180">
          <template slot-scope="scope">
            <el-tag style="margin: 5px;padding: 0 5px" v-for="item in scope.row.classifyName" :key="item.id"><span
                style="line-height: 32px;">{{ item }}</span></el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="tagName" label="标签" width="250">
          <template slot-scope="scope">
            <el-tag style="margin: 5px;padding: 0 5px" v-for="item in scope.row.tagName" type="success" :key="item.id">
              <span style="line-height: 32px;">{{ item }}</span></el-tag>
          </template>
        </el-table-column>
        <el-table-column sortable prop="readNum" label="访问" width="100"></el-table-column>
        <el-table-column sortable prop="createTime" label="发布时间" width="180"></el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button @click="editBlog(scope.row)" type="text" size="small">编辑</el-button>
            <el-popconfirm title="你确定要删除该文章吗？" @confirm="deleteBlog(scope.row)">
              <el-button slot="reference" type="text" size="small">删除</el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--批量删除-->
    <el-row class="block">
      <el-col :span="12">
        <el-popconfirm title="永久删除选中的文章？" placement="right" @confirm="deleteBatchList()">
          <el-button slot="reference" type="danger" plain size="mini">批量删除</el-button>
        </el-popconfirm>
      </el-col>
      <el-col :span="12">
        <!--分页-->
        <div class="pagination-plugin">
          <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pagination.currentPage"
              :page-sizes="pagination.pageSizes"
              :page-size="pagination.pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="pagination.total">
          </el-pagination>

        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import {
  deleteBatchIdList,
  deleteBlogById,
  selectBlogList,
  selectBlogListByParam,
  selectClassify
} from "../../../api/blog";

export default {
  name: "index",
  data() {
    return {
      //搜索数据
      dialogVisible: false,
      searchParam: {
        keyWord: '',
        blogStatus: "",
        classifyId: ''
      },
      blogClassifyList: [],
      //表格数据
      tableData: [],
      blogIdList: [],
      //分页数据
      pagination: {
        currentPage: 1,
        hideOnSinglePage: false,
        pageSizes: [8, 15, 30, 40],
        pageSize: 8,
        total: 50
      }
    }
  },
  created() {
    this.selectBlogList();
    this.selectBlogClassifyList();
  },
  methods: {
    deleteBatchList() {
      let data = {
        "batchId": this.blogIdList
      };
      deleteBatchIdList(data).then((response) => {
        this.$message.success(response.data.message);
        this.selectBlogList();
      }).catch()
    },
    selectBlogList() {
      let data = {
        "page": this.pagination.currentPage,
        "size": this.pagination.pageSize
      };
      selectBlogList(data).then((response) => {
        this.tableData = response.data.data.records;
        this.pagination.total = response.data.data.total;
      }).catch()
    },
    selectBlogClassifyList() {
      selectClassify().then((res) => {
        this.blogClassifyList = res.data.data;
      }).catch()
    },
    deleteBlog(row) {
      deleteBlogById(row.id).then((response) => {
        this.$message.success(response.data.message)
        this.selectBlogList();
      }).catch();

    },
    editBlog(row) {
      this.$router.push({
        name: "writeBlog",
        query: {
          "id": row.id
        }
      });
    },
    toWrite() {
      this.$router.push({
        name: "writeBlog"
      });
    },
    submitForm() {
      let data = {
        "keyWord": this.searchParam.keyWord,
        "classifyId": this.searchParam.classifyId,
        "blogStatus": this.searchParam.blogStatus,
        "page": this.pagination.currentPage,
        "size": this.pagination.pageSize
      };
      selectBlogListByParam(data).then((res) => {
        let data = res.data.data;
        this.tableData = data.records;
        this.pagination.total = data.total;
      }).catch(() => {
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleSelectionChange(val) {
      let data = val.map(item => {
        return item.id
      });
      this.blogIdList = data;
    },
    handleSizeChange(val) {
      this.pagination.pageSize = val;
      if (this.judgeSelectParam()) {
        this.submitForm();
      } else {
        this.selectBlogList();
      }
    },
    handleCurrentChange(val) {
      this.pagination.currentPage = val;
      if (this.judgeSelectParam()) {
        this.submitForm();
      } else {
        this.selectBlogList();
      }
    },
    judgeSelectParam() {
      if (this.searchParam.keyWord !== "" || this.searchParam.blogStatus !== "" || this.searchParam.classifyId !== "") {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.blogList-content {
  background-color: #fff;
}

.search-content {
  padding: 17px;
}

.search-form-item {
  margin-right: 80px;
}

.write-button {
  padding: 0 0 0 17px;
}

.blog-list {
  padding: 17px;
}

.pagination-plugin {
  float: right;
  margin-right: 20px;
}

.block {
  margin: 0 15px;
  padding-bottom: 15px;
}
</style>
