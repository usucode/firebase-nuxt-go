import { MutationTree, ActionTree, GetterTree } from 'vuex'
export interface RootState {}
interface User {}
const state = () => ({})
const getters: GetterTree<RootState, RootState> = {}
const mutations: MutationTree<RootState> = {}
const actions: ActionTree<RootState, RootState> = {}
export default { state, getters, mutations, actions }
