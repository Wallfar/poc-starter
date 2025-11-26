<script setup lang="ts">
const params = reactive({
  backgroundColor: '#000000',
  showBorder: true,
  borderSize: 2
})

onMounted(() => {
  const pane = usePane()

  pane.addBinding(params, 'backgroundColor')
  pane.addBinding(params, 'showBorder')
  pane.addBinding(params, 'borderSize')
})
</script>

<template>
  <NuxtLayout>
    <div class="flex-1 flex items-center justify-center">
      <div
        class="p-4"
        :style="{
          backgroundColor: params.backgroundColor,
          border: params.showBorder ? `${params.borderSize}px solid red` : 'none'
        }"
      >
        Hey there!
      </div>
    </div>
  </NuxtLayout>
</template>