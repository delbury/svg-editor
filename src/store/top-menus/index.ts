import { Module, MutationTree } from 'vuex';

export interface TopMenusState {
  showRulers: boolean;
  showGrid: boolean;
}

export const state: TopMenusState = {
  showRulers: true,
  showGrid: true,
};

const mutations: MutationTree<TopMenusState> = {
  toggleRulersStateMutation(state: TopMenusState, value? : boolean): any {
    state.showRulers = value ?? !state.showRulers;
  },
  toggleGridStateMutation(state: TopMenusState, value? : boolean): any {
    state.showGrid = value ?? !state.showRulers;
  }
}

const module: Module<TopMenusState, BaseState> = {
  namespaced: true,
  state,
  mutations,
};

export default module;