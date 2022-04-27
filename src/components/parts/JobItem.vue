<template>
  <div class="job-item" @click="routeToJobDetails()">
    <h2>{{ job.title }} in {{ job.location }}</h2>
    <div class="salary">
      <img
        src="@/assets/rupee.svg"
        width="30"
        height="42"
        loading="lazy"
        alt="rupee icon"
      />
      <p>{{ job.salary }} rupees</p>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh nisl,
      consequat vitae diam at, vestibulum convallis erat. Aenean aliquam
      consequat lectus, ut suscipit nisl volutpat eget. Class aptent taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      Quisque fringilla gravida felis rhoncus commodo. Ut congue, orci sed
      luctus varius, magna lacus rhoncus lacus, at viverra lorem arcu ut eros.
      Proin feugiat consequat mi, at dignissim magna tristique nec. Maecenas et
      luctus ante, in pellentesque tellus.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useRouter } from "vue-router";

import Job from "@/types/job";

export default defineComponent({
  props: {
    job: {
      type: Object as PropType<Job>,
      required: true,
    },
  },

  setup(props) {
    const router = useRouter();

    function routeToJobDetails() {
      const linkFormat: string = props.job.title
        .replace(/ /g, "-")
        .toLowerCase();

      router.push({
        name: "JobDetails",
        params: {
          job: linkFormat,
        },
      });
    }

    return { routeToJobDetails };
  },
});
</script>

<style scoped>
.job-item {
  padding: 16px;
  cursor: pointer;
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
