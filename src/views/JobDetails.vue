<template>
  <div>
    <transition-group tag="ul" class="user-list">
      <li
        v-for="(user, index) in users"
        :key="user.id"
        class="user-item"
        :data-aos="aosParity(index) ? 'fade-right' : 'fade-left'"
      >
        <p class="user-name">{{ user.name }}</p>
        <p class="user-email">{{ user.email }}</p>
        <p class="user-address">{{ user.address.street }}</p>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import Users from "@/types/users";

import { defineComponent, onMounted, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "JobDetails",

  setup() {
    const store = useStore();

    onMounted((): void => {
      store.dispatch("getUsers");
    });

    const users = computed<Users[]>(() => {
      return store.getters.users;
    });

    const aosParity = (index: number): boolean => {
      const isEven = !(index % 2);

      return isEven;
    };

    return { users, aosParity };
  },
});
</script>

<style scoped>
.user-list {
  max-width: 960px;
  margin: 40px auto;
  list-style-type: none;
}
.user-item {
  padding: 16px;
  background: #fff;
}
.user-item:not(:last-child) {
  margin-bottom: 20px;
}
</style>
