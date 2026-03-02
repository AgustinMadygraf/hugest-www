<script setup lang="ts">
// Navigation header component
</script>

<template>
  <header class="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="flex items-center p-4 justify-between max-w-screen-xl mx-auto">
      <div class="flex items-center gap-2">
        <div class="text-primary">
          <span class="material-symbols-outlined text-3xl">park</span>
        </div>
        <h2 class="text-slate-900 dark:text-slate-100 text-xl font-black leading-tight tracking-tight">HUGGEST</h2>
      </div>
      <div class="flex items-center gap-4">
        <button class="flex items-center justify-center p-2 text-slate-700 dark:text-slate-300">
          <span class="material-symbols-outlined">search</span>
        </button>
        <button class="flex items-center justify-center p-2 text-slate-700 dark:text-slate-300">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </div>
  </header>
</template>
