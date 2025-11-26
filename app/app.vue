<script setup lang="ts">
const params = usePane({
  backgroundColor: '#67c270',
  borderColor: '#0d8528',
  showBorder: true,
  borderSize: {
    default: 2,
    min: 0,
    max: 100,
    step: 1,
  }
})
</script>

<template>
  <NuxtLayout>
    <div class="flex-1 flex items-center justify-center">
      <div
        class="p-4"
        :style="{
          backgroundColor: params.backgroundColor,
          border: params.showBorder ? `${params.borderSize}px solid ${params.borderColor}` : 'none'
        }"
      >
        Hello world!
      </div>
    </div>
  </NuxtLayout>
</template>