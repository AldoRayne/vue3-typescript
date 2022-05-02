<template>
  <div>
    <PageHeader>
      <template v-slot:title>Job Details</template>
      <template v-slot:buttons>
        <MainButton @click="routeToMainPage()">To Main Page</MainButton>
      </template>
    </PageHeader>
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
import { defineComponent, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

import PageHeader from "@/components/ui/PageHeader.vue";
import MainButton from "@/components/ui/MainButton.vue";

import Users from "@/types/users";

export default defineComponent({
  components: {
    PageHeader,
    MainButton,
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    onMounted((): void => {
      store.dispatch("getUsers");
    });

    const title = computed(() => {
      return route.params.job;
    });

    const users = computed<Users[]>(() => {
      return store.getters.users;
    });

    const aosParity = (index: number): boolean => {
      const isEven = !(index % 2);

      return isEven;
    };

    function routeToMainPage(): void {
      router.push({
        name: "MainPage",
      });
    }

    return { users, aosParity, routeToMainPage };
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
