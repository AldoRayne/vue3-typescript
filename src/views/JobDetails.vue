<template>
  <div>{{ users }}</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "JobDetails",

  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("updateUsers");
    });

    const users = computed(() => {
      return store.getters.users;
    });

    return { users };
  },
});
</script>

<style scoped></style>
