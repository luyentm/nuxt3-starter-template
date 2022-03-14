<template>
  <div class="w-full h-full p-5">
    <nuxt-link to="/hello" class="bg-blue-600 px-3 py-1 text-white"
      >Hello 2ádfasfdsdfsdf</nuxt-link
    >
    <div>{{ counter.count }}</div>
  </div>
</template>
<script>
import { useCounterStore } from "@/stores/counter";
export default {
  setup() {
    const counter = useCounterStore();
    return {
      counter,
    };
  },
};
</script>
