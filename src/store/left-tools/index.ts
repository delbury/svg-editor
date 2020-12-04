import { Module, MutationTree } from 'vuex';
import { SingleToolsEnum } from '/@/views/canvas/left/tools';

export interface LeftToolsState {
  currentTool: SingleToolsEnum;
};

const state: LeftToolsState = {
  currentTool: 0,
};

const mutations: MutationTree<LeftToolsState> = {
  setCurrentToolMutation(state: LeftToolsState, payload: SingleToolsEnum) {
    state.currentTool = payload;
    console.log(state.currentTool)
  }
};

const module: Module<LeftToolsState, BaseState> = {
  namespaced: true,
  state,
  mutations,
};

export default module;