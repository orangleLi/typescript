<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{firstName}}</p>
    <p>{{lastName}}</p>
    <p>{{fullName}}</p>
    <button @click="motifyFullName">点击修改fullName</button>

    <hr>

    <user v-for="item in userList" :key="item.id" v-bind="item" @on-move='onMove'
    v-model="firstName" @change-age="changeAge"></user>

    <hr>

    <div>
      <p>{{num}}<button @click="add">+1</button></p>
      <p>{{filterList.join('-')}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import User from '../components/User.vue';
import { AboutStore } from '../store/module/about';

/*
  vue-property-decorator
  @Component
  @Watch
  @Prop
  @Model
  @Emit
*/
/*
  export default {
    name: 'About',
    data() {
      return {
        firstName: '',
        lastName: ''
      }
    },
    computed: {
      fullName: {
        get() {
          return this.firstName + this.lastName;
        }
      }
    },
    methods: {
      motifyFullName() {}
    }
  }
*/

interface TUser {
  id: number;
  name: string;
  age: number;
  sex?: number;
}

@Component({
  components: {
    User,
  },
})
export default class About extends Vue {
  firstName: string = 'zhang';

  lastName: string = 'san';

  userList: Array<TUser> = [
    {
      id: 1,
      name: '张三',
      age: 20,
      sex: 1,
    },
    {
      id: 2,
      name: '李四',
      age: 18,
      sex: 0,
    },
    {
      id: 3,
      name: '王五',
      age: 20,
      sex: 1,
    },
  ]

  get fullName() {
    return this.firstName + this.lastName;
  }

  set fullName(val) {
    const arr = val.split(' ');
    [this.firstName, this.lastName] = arr;
  }

  get num() {
    return AboutStore.count;
  }

  get filterList() {
    return AboutStore.filterList;
  }

  add() {
    AboutStore.updateCount(1);
  }

  motifyFullName() {
    this.fullName = 'li si';
  }

  @Watch('firstName')
  onFirstNameChange(newVal: string, oldVal: string) {
    console.log(newVal, oldVal);
  }

  @Watch('fullName')
  onFullNameChange(newVal: string, oldVal: string) {
    console.log(newVal, oldVal);
  }

  onMove(id: number) {
    const index = this.userList.findIndex((item) => item.id === id);
    this.userList.splice(index, 1);
  }

  changeAge(id: number) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const user: TUser = this.userList.find((item) => item.id === id)!;
    user.age += 1;
  }

  created() {
    AboutStore.getList();
  }

  mounted() {
    //
  }
}
</script>
