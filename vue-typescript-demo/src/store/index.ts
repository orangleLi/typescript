import Vue from 'vue';
import Vuex from 'vuex';

// eslint-disable-next-line import/no-cycle
import { UAboutState } from './module/about';

Vue.use(Vuex);

interface TRootState {
  about: UAboutState;
}

export default new Vuex.Store<TRootState>({});
// export default new Vuex.Store({});
