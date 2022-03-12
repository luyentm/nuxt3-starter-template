<template>
  <div class="w-full h-full p-5 flex flex-col">
    <div>
      <nuxt-link to="/" class="bg-blue-600 px-3 py-1 text-white"
        >Home</nuxt-link
      >
    </div>
    <div class="mt-10">
      <button @click="add" class="bg-blue-600 px-3 py-1 text-white">add</button>
      <span class="px-5">
        {{ counter ? counter.count : "" }}
      </span>
    </div>
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
  methods: {
    add() {
      console.log("Click");
      this.counter.increment();
    },
  },
};
</script>
