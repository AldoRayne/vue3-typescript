import axios from "axios";

import { Commit } from "vuex";

import Users from "@/types/users";

export default {
  state: {
    users: [] as Users[],
  },
  getters: {
    users: (state: { users: Users[] }) => {
      return state.users;
    },
  },
  mutations: {
    getUsers(state: { users: Users[] }, payload: Users[]) {
      state.users = payload;
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
