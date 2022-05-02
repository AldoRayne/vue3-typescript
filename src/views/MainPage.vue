<template>
  <div>
    <PageHeader>
      <template v-slot:title>Hyrule Jobs</template>
      <template v-slot:buttons>
        <MainButton @click="sortBy('title')">Order by title</MainButton>
        <MainButton @click="sortBy('salary')">Order by salary</MainButton>
        <MainButton @click="sortBy('location')">Order by location</MainButton>
      </template>
    </PageHeader>
    <JobList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import JobList from "@/components/JobsList.vue";

import PageHeader from "@/components/ui/PageHeader.vue";
import MainButton from "@/components/ui/MainButton.vue";

import Job from "@/types/job";
import OrderTerm from "@/types/orderTerm";

export default defineComponent({
  components: {
    JobList,
    PageHeader,
    MainButton,
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

    const order = ref<OrderTerm>("title");

    function sortBy(term: OrderTerm): void {
      order.value = term;
    }

    return { jobs, order, sortBy };
  },
});
</script>
