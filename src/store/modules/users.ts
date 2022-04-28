import axios from "axios";

import { Commit } from "vuex";

import Users from "@/types/users";

export default {
  state: {
    users: [] as Users[],
  },
  getters: {
    users: (state: { value: Users[] }) => {
      return state.value;
    },
  },
  mutations: {
    getUsers(state: { value: Users[] }, payload: Users[]) {
      state.value = payload;
    },
  },
  actions: {
    async getUsers({ commit }: { commit: Commit }) {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      commit("getUsers", data);
    },
  },
};
