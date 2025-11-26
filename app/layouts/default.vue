<script setup lang="ts">
import { MoonIcon, SunIcon } from 'lucide-vue-next';

const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="relative flex flex-col w-full min-h-screen bg-gray-100 text-black dark:bg-black dark:text-white p-8">
    <div class="absolute top-0 left-0 w-full h-full max-h-[calc(min(100vh,1000px))] pointer-events-none overflow-hidden">
      <div 
        class="absolute top-0 left-0 w-full h-full"
        style="
          background-size: 60px 60px;
          background-image: linear-gradient(to right, rgba(128, 128, 128, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.2) 1px, transparent 1px);
          mask-image: radial-gradient(circle at top left, black, transparent 75%);
          -webkit-mask-image: radial-gradient(circle at top left, black, transparent 75%);
        "
      />
    </div>

    <span class="absolute top-2 left-4 select-none">POC {{ new Date().toLocaleDateString() }}</span>

    <div class="relative flex flex-col w-full flex-1 max-w-[1800px] sm:px-4 md:px-8 lg:px-16 xl:px-24 mx-auto">
      <slot />
    </div>

    <div id="tpane" class="fixed top-4 right-4 min-w-[300px]" />

    <Button
      variant="outline"
      @click="toggleColorMode"
      class="absolute bottom-4 right-4 z-10"
    >
        <MoonIcon class="size-4" v-if="colorMode.value === 'dark'" />
        <SunIcon class="size-4" v-else />
    </Button>
  </div>
</template>
