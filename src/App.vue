<template>
  <div>
    <header>
      <div class="title">
        <img
          src="./assets/heart.svg"
          width="60"
          height="64"
          loading="lazy"
          alt="site logo"
        />
        <h1>Hyrule Jobs</h1>
      </div>
      <div class="order">
        <button @click="handleClick('title')">Order by title</button>
        <button @click="handleClick('salary')">Order by salary</button>
        <button @click="handleClick('location')">Order by location</button>
      </div>
    </header>
    <JobList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import JobList from "./components/JobsList.vue";

import Job from "./types/job";
import OrderTerm from "./types/orderTerm";

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

    const order = ref<OrderTerm>("title");

    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };

    return { jobs, handleClick, order };
  },
});
</script>

<style scoped>
header {
  text-align: center;
}
header .title {
  display: flex;
  justify-content: center;
  align-items: center;
}
header img {
  width: 60px;
  margin-right: 20px;
}
header .order {
  margin-top: 20px;
}
button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>
