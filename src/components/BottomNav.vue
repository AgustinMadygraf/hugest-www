<script setup lang="ts">
const navItems = [
  { label: 'Home', icon: 'home', active: true },
  { label: 'Services', icon: 'grid_view', active: false },
  { label: 'Portfolio', icon: 'photo_library', active: false },
  { label: 'Contact', icon: 'mail', active: false },
]
</script>

<template>
  <nav class="fixed bottom-0 left-0 right-0 z-50 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 px-6 pb-6 pt-3">
    <div class="flex justify-between items-center max-w-md mx-auto">
      <a 
        v-for="item in navItems" 
        :key="item.label"
        href="#" 
        class="flex flex-col items-center gap-1 transition-colors"
        :class="item.active ? 'text-slate-900 dark:text-slate-100' : 'text-slate-400 dark:text-slate-500'"
      >
        <span class="material-symbols-outlined">{{ item.icon }}</span>
        <span class="text-[10px] font-bold uppercase tracking-tighter">{{ item.label }}</span>
      </a>
    </div>
  </nav>
</template>
