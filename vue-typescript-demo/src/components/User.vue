<template>
  <div>
    <div>
      <input :value="firName" @input="onChangeFirName" />
    </div>
    姓名：{{userName}},
    年龄：{{age}},
    性别：{{SEX[sex]}}
    <button @click="changeAge(id)">年龄+1</button>
    <button @click="onMove(id)">删除</button>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Emit, Model,
} from 'vue-property-decorator';

enum Sex {
  '男' = 1,
  '女' = 0,
}

@Component({
  name: 'User',
})
export default class User extends Vue {
  SEX: any = Sex;

  @Model('changeFirName', { type: String })
  firName!: string;

  @Prop(Number)
  id!: number;

  @Prop(String)
  name!: string;

  @Prop(Number)
  age!: number;

  @Prop({ type: Number, default: 1 })
  sex!: number;

  get userName() {
    return this.name;
  }

  @Emit('on-move')
  onMove(id: number) {
    return id; // 不写return的话，默认将参数return回去
  }

  @Emit() // 不写函数名的话默认为事件的转换为小写的方法名，用横线分隔开 比如changeAge默认就为change-age
  changeAge(id: number) {
    return id;
  }

  @Emit('changeFirName')
  onChangeFirName(e: any) {
    return e.target.value;
  }
}
</script>
