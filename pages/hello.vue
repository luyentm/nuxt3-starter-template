<template>
  <div
    class="w-full h-200 w-full border border-blue-700 rounded-md flex flex-col justify-center items-center"
  >
    <div class="flex space-x-3 my-5">
      <div class="relative group">
        <div class="bg-white shadow-md px-3 py-1 cursor-pointer">Menu 1</div>
        <div
          class="absolute rounded-b-xl overflow-hidden bg-white shadow-md group-hover:(block animate-ddd) flex flex-col animate-dddout"
        >
          <div
            class="bg-white hover:bg-gray-200 min-w-max px-3 cursor-pointer py-1 transition-colors duration-400"
          >
            Submenu 1
          </div>
          <div
            class="bg-white hover:bg-gray-200 min-w-max px-3 cursor-pointer py-1 transition-colors duration-400"
          >
            Submenu 2
          </div>
          <div
            class="bg-white hover:bg-gray-200 min-w-max px-3 cursor-pointer py-1 transition-colors duration-400"
          >
            Submenu 3
          </div>
          <div
            class="bg-white hover:bg-gray-200 min-w-max px-3 cursor-pointer py-1 transition-colors duration-400"
          >
            Submenu 4
          </div>
        </div>
      </div>
      <div class="relative group">
        <div class="bg-white shadow-md px-3 py-1 cursor-pointer">Menu 1</div>
        <div
          class="absolute rounded-b-xl overflow-hidden bg-white shadow-md group-hover:(block animate-ddd) flex flex-col animate-dddout"
        >
          <div
            class="bg-white hover:bg-gray-200 min-w-max px-3 cursor-pointer py-1 transition-colors duration-400"
          >
            Submenu 1
          </div>
          <div
            class="bg-white hover:bg-gray-200 min-w-max px-3 cursor-pointer py-1 transition-colors duration-400"
          >
            Submenu 2
          </div>
          <div
            class="bg-white hover:bg-gray-200 min-w-max px-3 cursor-pointer py-1 transition-colors duration-400"
          >
            Submenu 3
          </div>
          <div
            class="bg-white hover:bg-gray-200 min-w-max px-3 cursor-pointer py-1 transition-colors duration-400"
          >
            Submenu 4
          </div>
        </div>
      </div>
      <div class="relative group">
        <div class="bg-white shadow-md px-3 py-1 cursor-pointer">Menu 1</div>
        <div
          class="absolute rounded-b-xl overflow-hidden bg-white shadow-md group-hover:(block animate-ddd) flex flex-col animate-dddout"
        >
          <div
            class="bg-white hover:bg-gray-200 min-w-max px-3 cursor-pointer py-1 transition-colors duration-400"
          >
            Submenu 1
          </div>
          <div
            class="bg-white hover:bg-gray-200 min-w-max px-3 cursor-pointer py-1 transition-colors duration-400"
          >
            Submenu 2
          </div>
          <div
            class="bg-white hover:bg-gray-200 min-w-max px-3 cursor-pointer py-1 transition-colors duration-400"
          >
            Submenu 3
          </div>
          <div
            class="bg-white hover:bg-gray-200 min-w-max px-3 cursor-pointer py-1 transition-colors duration-400"
          >
            Submenu 4
          </div>
        </div>
      </div>
      <div class="relative group">
        <div class="bg-white shadow-md px-3 py-1 cursor-pointer">Menu 1</div>
        <div
          class="absolute rounded-b-xl overflow-hidden bg-white shadow-md group-hover:(block animate-ddd) flex flex-col animate-dddout"
        >
          <div
            class="bg-white hover:bg-gray-200 min-w-max px-3 cursor-pointer py-1 transition-colors duration-400"
          >
            Submenu 1
          </div>
          <div
            class="bg-white hover:bg-gray-200 min-w-max px-3 cursor-pointer py-1 transition-colors duration-400"
          >
            Submenu 2
          </div>
          <div
            class="bg-white hover:bg-gray-200 min-w-max px-3 cursor-pointer py-1 transition-colors duration-400"
          >
            Submenu 3
          </div>
          <div
            class="bg-white hover:bg-gray-200 min-w-max px-3 cursor-pointer py-1 transition-colors duration-400"
          >
            Submenu 4
          </div>
        </div>
      </div>
      <div class="relative group">
        <div class="bg-white shadow-md px-3 py-1 cursor-pointer">Menu 1</div>
        <div
          class="absolute rounded-b-xl overflow-hidden bg-white shadow-md group-hover:(block animate-ddd) flex flex-col animate-dddout"
        >
          <div
            class="bg-white hover:bg-gray-200 min-w-max px-3 cursor-pointer py-1 transition-colors duration-400"
          >
            Submenu 1
          </div>
          <div
            class="bg-white hover:bg-gray-200 min-w-max px-3 cursor-pointer py-1 transition-colors duration-400"
          >
            Submenu 2
          </div>
          <div
            class="bg-white hover:bg-gray-200 min-w-max px-3 cursor-pointer py-1 transition-colors duration-400"
          >
            Submenu 3
          </div>
          <div
            class="bg-white hover:bg-gray-200 min-w-max px-3 cursor-pointer py-1 transition-colors duration-400"
          >
            Submenu 4
          </div>
        </div>
      </div>
    </div>
    <canvas
      id="myCanvas"
      width="500"
      height="500"
      style="border: 1px solid #d3d3d3"
    ></canvas>
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
  mounted() {
    this.initdraw();
  },
  methods: {
    add() {
      console.log("Click");
      this.counter.increment();
    },
    initdraw() {
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(0, 0, 100, 20);
      ctx.font = "80px Comic Sans MS";
      ctx.fillStyle = "red";
      ctx.textAlign = "left";
      ctx.fillText("Hello World", 0, canvas.height / 2);
    },
  },
};
</script>
