import { InjectionKey } from 'vue';
import { createStore, Store, useStore as useStoreOrigin } from 'vuex';
import topMenus, { TopMenusState } from './top-menus';
import leftTools, { LeftToolsState } from './left-tools';

export const key: InjectionKey<Store<BaseState>> = Symbol('store');

export interface RootStoreState extends BaseState {
  topMenus: TopMenusState;
  leftTools: LeftToolsState;
}

export const useStore = () => useStoreOrigin<RootStoreState>(key);


export const store: Store<BaseState> = createStore({
  state: {
  },
  modules: {
    topMenus,
    leftTools,
  }
});
