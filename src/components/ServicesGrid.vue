<script setup lang="ts">
const services = [
  {
    title: 'Precision Pruning',
    description: 'Aesthetic and health maintenance',
    icon: 'content_cut'
  },
  {
    title: 'Tree Removal',
    description: 'Safe extraction of hazardous trees',
    icon: 'dangerous'
  },
  {
    title: 'Health Audit',
    description: 'Disease detection and prevention',
    icon: 'health_and_safety'
  },
  {
    title: 'Storm Relief',
    description: '24/7 Emergency clearing services',
    icon: 'emergency_home'
  }
]
</script>

<template>
  <section class="px-4 py-8 bg-slate-900 text-white rounded-t-[2rem]">
    <h2 class="text-2xl font-black mb-6">Our Services</h2>
    <div class="grid grid-cols-2 gap-4">
      <div 
        v-for="service in services" 
        :key="service.title"
        class="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
      >
        <span class="material-symbols-outlined text-primary mb-3 text-3xl">{{ service.icon }}</span>
        <h4 class="font-bold text-lg mb-1">{{ service.title }}</h4>
        <p class="text-slate-400 text-xs">{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>
