<template>
  <div class="w-full h-screen flex flex-col items-center">
    <div class="w-full h-16 bg-red-500 shadow-md text-center font-bold">
      Header
    </div>
    <div class="w-4/5 h-full bg-red-200">
      <slot />
    </div>
  </div>
</template>
