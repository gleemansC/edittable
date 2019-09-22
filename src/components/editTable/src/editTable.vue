
<template>
  <div>
    <div>
      <ElButton @click="add">新增</ElButton>
      <ElButton @click="reduce">删除</ElButton>
    </div>
    <el-form :model="model" ref="editTable" :rules="model.rules">
      <el-table
        :data="model.tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        class="table"
      >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column label="状态" width="150px">
          <template slot-scope="scope">
            <el-form-item :prop="'tableData[' + scope.$index + '].whether'" :rules="rules.whether">
              <ElSelect
                v-model="scope.row.whether"
                @change="change(scope.$index, scope.row.whether)"
              >
                <ElOption label="是" value="1"></ElOption>
                <ElOption label="否" value="0"></ElOption>
              </ElSelect>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="内容">
          <template slot-scope="scope">
            <el-form-item
              :prop="'tableData[' + scope.$index + '].name'"
              :rules="scope.row.ruleName"
            >
              <ElInput v-model="scope.row.name" :disabled="scope.row.disName"></ElInput>
            </el-form-item>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {
        tableData: []
      },
      rules: {
        whether: [{ required: true, message: "请输入", trigger: "blur" }],
        rule: [{ required: true, message: "请输入", trigger: "blur" }],
        disRule: [{}]
      },
      currentRow: 0
    };
  },
  props: {
    pModel: {
      type: Object
    }
  },
  methods: {
    change(index, value) {
      if (value === "1") {
        this.model.tableData[index].disName = false;
        this.model.tableData[index].ruleName = this.rules.rule;
      } else {
        this.model.tableData[index].name = "";
        this.model.tableData[index].disName = true;
        this.model.tableData[index].ruleName = this.rules.disRule;
      }
    },
    add() {
      this.model.tableData.push({
        whether: "1",
        name: "",
        disName: false,
        ruleName: this.rules.rule
      });
    },
    reduce() {
      // this.model.tableData.splice(this.currentRow, 1);
    },
    handleCurrentChange(currentRow) {
      this.currentRow = currentRow;
    },
    validate() {
      this.$refs.editTable.validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  created() {
    if (this.pModel.tableData) {
      this.model.tableData = this.pModel.tableData;
    }
    if (this.pModel.rules) {
      this.model.rules = this.pModel.rules;
    }
  }
};
</script>
<style>
.table {
  width: 700px;
  margin: 0 auto;
}
</style>