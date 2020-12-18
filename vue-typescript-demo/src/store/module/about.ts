// cnpm install -S vuex-module-decorators
// 后台管理系统框架 vue-typescript-admin-template
import {
  Module, VuexModule, Mutation, Action, getModule,
}
  from 'vuex-module-decorators';

// eslint-disable-next-line import/no-cycle
import store from '@/store';

export interface UAboutState {
  count: number;
  list: Array<number>;
}

const getList = () => new Promise<Array<number>>((resolve) => {
  setTimeout(() => {
    resolve([1, 2, 3, 4, 5, 6]);
  }, 500);
});

@Module({
  name: 'about',
  dynamic: true, // 是一个动态的模块
  store,
})
export default class About extends VuexModule implements UAboutState {
  count: number = 1;

  list: Array<number> = [];

  get filterList() {
    return this.list.filter((item) => item % 2 === 0);
  }

  @Mutation
  updateCount(payload: number) {
    this.count += payload;
  }

  @Mutation
  updateList(payload: Array<number>) {
    this.list = payload;
  }

  @Action
  async getList() {
    const res: Array<number> = await getList();
    this.updateList(res); // action中不能直接修改值
  }
}

export const AboutStore = getModule(About);
