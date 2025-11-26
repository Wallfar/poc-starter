<script setup lang="ts">
const router = useRouter()

const pocRoutes = computed(() => {
  return router.getRoutes()
    .filter(r => r.path.startsWith('/pocs/'))
    .sort((a, b) => a.path.localeCompare(b.path))
})

const formatPocName = (path: string) => {
  const name = path.split('/').pop() || ''
  return name.split('-').join(' ').replace(/^\w/, c => c.toUpperCase())
}
</script>

<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-6">Proof of Concepts</h1>
    
    <div v-if="pocRoutes.length === 0" class="text-gray-500">
      No POCs found.
    </div>

    <ul v-else class="grid gap-4">
      <li v-for="route in pocRoutes" :key="route.path">
        <NuxtLink 
          :to="route.path"
          class="block p-4 border rounded-lg bg-white hover:bg-gray-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors"
        >
          <div class="font-medium">{{ formatPocName(route.path) }}</div>
          <div class="text-sm text-zinc-500">{{ route.path }}</div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>