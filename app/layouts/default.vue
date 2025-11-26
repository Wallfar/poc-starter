<script setup lang="ts">
import { FlaskConical, MoonIcon, RotateCcw, SunIcon } from 'lucide-vue-next';

const colorMode = useColorMode()
const router = useRouter()
const route = useRoute()

const showPocSelector = ref(false)

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const pocRoutes = computed(() => {
  return router.getRoutes()
    .filter(r => r.path.startsWith('/pocs/'))
    .sort((a, b) => a.path.localeCompare(b.path))
})

const formatPocName = (path: string) => {
  const name = path.split('/').pop() || ''
  return name.split('-').join(' ').replace(/^\w/, c => c.toUpperCase())
}

const currentPocName = computed(() => {
  if (route.path.startsWith('/pocs/')) {
    return formatPocName(route.path)
  }
  return 'Select POC'
})

const handlePocClick = (path: string) => {
  showPocSelector.value = false
  if (route.path === path) {
    window.location.reload()
  } else {
    router.push(path)
  }
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

    <span v-if="route.path !== '/'" class="absolute top-4 left-4 select-none z-[9999999]">
      <Popover v-model:open="showPocSelector">
        <PopoverTrigger as-child>
          <Button>
            {{ currentPocName }}
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-80">
          <div class="grid gap-4">
            <div class="space-y-2">
              <h4 class="font-medium leading-none">
                Proof of Concepts
              </h4>
            </div>
            <div v-if="pocRoutes.length === 0" class="text-gray-500">
              No POCs found.
            </div>

            <ul v-else class="grid gap-2">
              <li v-for="r in pocRoutes" :key="r.path">
                <button 
                  @click="handlePocClick(r.path)"
                  :class="[
                    'flex w-full text-left items-center gap-2 px-3 py-2 border rounded-lg transition-colors',
                    r.path === route.path 
                      ? 'bg-gray-100 border-gray-400 dark:bg-zinc-700 dark:border-zinc-500' 
                      : 'bg-white hover:bg-gray-50 dark:bg-zinc-800 dark:hover:bg-zinc-700'
                  ]"
                >
                  <FlaskConical class="size-4 inline-block text-green-500" />
                  <div class="font-medium">{{ formatPocName(r.path) }}</div>
                  <RotateCcw v-if="r.path === route.path" class="size-4 ml-auto text-gray-400" />
                </button>
              </li>
            </ul>
          </div>
        </PopoverContent>
      </Popover>
    </span>

    <div class="relative flex flex-col w-full flex-1 max-w-[1800px] sm:px-4 md:px-8 lg:px-16 xl:px-24 mx-auto">
      <slot />
    </div>

    <div id="tpane" class="fixed top-4 right-4 min-w-[300px]" />

    <Button
      variant="outline"
      @click="toggleColorMode"
      class="absolute bottom-4 right-4 z-[9999999]"
    >
        <MoonIcon class="size-4" v-if="colorMode.value === 'dark'" />
        <SunIcon class="size-4" v-else />
    </Button>
  </div>
</template>
