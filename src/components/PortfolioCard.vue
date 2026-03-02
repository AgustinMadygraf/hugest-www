<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  image: string
  tag?: string
}>()
</script>

<template>
  <div class="snap-center shrink-0 w-[280px] group">
    <div 
      class="relative w-full aspect-square bg-cover bg-center rounded-2xl overflow-hidden mb-3" 
      :style="{ backgroundImage: `url(${image})` }"
    >
      <div v-if="tag" class="absolute top-3 left-3 px-2 py-1 bg-background-dark/80 backdrop-blur-sm text-white text-[10px] font-bold rounded">
        {{ tag }}
      </div>
    </div>
    <h3 class="text-slate-900 dark:text-slate-100 text-lg font-bold">{{ title }}</h3>
    <p class="text-slate-500 dark:text-slate-400 text-sm">{{ subtitle }}</p>
  </div>
</template>
