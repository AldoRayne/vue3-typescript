<template>
  <div>
    <button>Order by title</button>
    <JobList :jobs="jobs" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import JobList from "./components/JobsList.vue";

import Job from "./types/job";

export default defineComponent({
  components: {
    JobList,
  },
  setup() {
    const jobs = ref<Job[]>([
      {
        title: "Farm worker",
        location: "Lon Lon ranch",
        salary: 3000,
        id: 1,
      },
      {
        title: "Quarry man",
        location: "Death mountain",
        salary: 4000,
        id: 2,
      },
      {
        title: "Flute Player",
        location: "The lost woods",
        salary: 4500,
        id: 3,
      },
      {
        title: "Fisherman",
        location: "Lake Hylia",
        salary: 5000,
        id: 4,
      },
    ]);

    return { jobs };
  },
});
</script>
