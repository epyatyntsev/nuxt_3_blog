import { defineStore } from "pinia";

export const useUsersStore = defineStore({
  id: "users-store",
  state: () => {
    return {
      users: null,
    };
  },
  actions: {
    setUsers(users: User[]) {
      this.users = users;
    },

    getUserById(id: number) {
      return this.users.find((u: User) => u.id === id);
    },
  },
});
