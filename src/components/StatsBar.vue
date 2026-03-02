<script setup lang="ts">
const stats = [
  { value: '1500+', label: 'Trees Trimmed' },
  { value: '12+', label: 'Years Exp', border: true },
  { value: '4.9/5', label: 'Rating' },
]
</script>

<template>
  <section class="grid grid-cols-3 gap-1 px-4 py-8 text-center bg-slate-100 dark:bg-slate-900/50">
    <div 
      v-for="stat in stats" 
      :key="stat.label"
      :class="{ 'border-x border-slate-200 dark:border-slate-800': stat.border }"
    >
      <p class="text-primary text-xl font-black">{{ stat.value }}</p>
      <p class="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold">{{ stat.label }}</p>
    </div>
  </section>
</template>
