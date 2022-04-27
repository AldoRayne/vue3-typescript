<template>
  <div class="job-list">
    <p>Ordered by {{ order }}</p>
    <transition-group name="list" tag="ul">
      <li v-for="job in orderedJobs" :key="job.id">
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div class="salary">
          <img
            src="../assets/rupee.svg"
            width="30"
            height="42"
            loading="lazy"
            alt="rupee icon"
          />
          <p>{{ job.salary }} rupees</p>
        </div>
        <div class="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh
            nisl, consequat vitae diam at, vestibulum convallis erat. Aenean
            aliquam consequat lectus, ut suscipit nisl volutpat eget. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Quisque fringilla gravida felis rhoncus commodo.
            Ut congue, orci sed luctus varius, magna lacus rhoncus lacus, at
            viverra lorem arcu ut eros. Proin feugiat consequat mi, at dignissim
            magna tristique nec. Maecenas et luctus ante, in pellentesque
            tellus.
          </p>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import Job from "@/types/job";
import OrderTerm from "@/types/orderTerm";
export default defineComponent({
  props: {
    jobs: {
      type: Array as PropType<Job[]>,
      required: true,
    },
    order: {
      type: String as PropType<OrderTerm>,
      required: true,
    },
  },
  setup(props) {
    const orderedJobs = computed(() => {
      const orderedArray = [...props.jobs].sort((a: Job, b: Job) => {
        return a[props.order] > b[props.order] ? 1 : -1;
      });

      return orderedArray;
    });

    return { orderedJobs };
  },
});
</script>

<style scoped>
.job-list {
  max-width: 960px;
  margin: 40px auto;
}
.job-list ul {
  padding: 0;
}
.job-list li {
  list-style-type: none;
  background: white;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}
.job-list h2 {
  margin: 0 0 10px;
  text-transform: capitalize;
}
.salary {
  display: flex;
}
.salary img {
  width: 30px;
}
.salary p {
  color: #17bf66;
  font-weight: bold;
  margin: 10px 4px;
}
.list-move {
  transition: all 1s;
}
</style>
