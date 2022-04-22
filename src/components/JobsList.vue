<template>
  <ul class="job-list">
    <li v-for="job in jobs" :key="job.id">
      <h2>{{ job.title }} in {{ job.location }}</h2>
      <div class="salary">
        <p>{{ job.salary }} rupees</p>
      </div>
      <div class="description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh
          nisl, consequat vitae diam at, vestibulum convallis erat. Aenean
          aliquam consequat lectus, ut suscipit nisl volutpat eget. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Quisque fringilla gravida felis rhoncus commodo. Ut congue,
          orci sed luctus varius, magna lacus rhoncus lacus, at viverra lorem
          arcu ut eros. Proin feugiat consequat mi, at dignissim magna tristique
          nec. Maecenas et luctus ante, in pellentesque tellus.
        </p>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Job from "@/types/job";

import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    jobs: {
      type: Array as PropType<Job[]>,
      required: true,
    },
  },
  setup() {
    return {};
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
</style>
