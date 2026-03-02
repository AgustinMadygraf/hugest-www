<script setup lang="ts">
import PortfolioCard from './PortfolioCard.vue'

const projects = [
  {
    title: 'Residential Pruning',
    subtitle: 'Safe & efficient clearance',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa6Lvkvk1vRj0yiPw1vfJ0BNFQk47VVVBu3ml-444ef6GtnRr6YVEEFmBOorF77tYe8Exw0GJxDIYnAV_uJaEZDrj6NZ5LZrWePs82vtR9vmEj0Nia1tCujNH6OpRHMk-_Ydukjua2YPRuF8EUObumKc3AZZKSWU0oMlQvNBcmmiKIJB9EAnZHifUfvmwSC1dKDKyG9ne8nLeMo8LY58kBeQLTOeh1WX5wZ4T_5Z83EXwiU8xOg6iDK4xiyxZt_KeRx_QBD1YE2I8',
    tag: 'BEFORE & AFTER'
  },
  {
    title: 'Garden Clearing',
    subtitle: 'Immediate visual impact',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2UlKPHwAMuOwAtseFwjO4_KDYBxSDkWm-mXzMdrgcwORP0qEcPDXQqhi5IbmQWcAZc17mXpapDCnA-0Kf60pydlZGy5isveOhk2OXxqHWI8N0fWOPCQYKOxfY2Gz19zyBNSBmkLZG8wKahryZhS8R3fxO42DS6VUEoUzfY7m6KfPJAA_ewwOqqjNPkRQvi1oIcS_pPRdqIRmOe9uCPlfwG43yQwTO_lqsxRQlSsldkj4ZjOR4i8D5frpWw6xKRpy_ESbu5XAjIr8',
    tag: 'FINISHED'
  },
  {
    title: 'Hedge Sculpting',
    subtitle: 'Urban aesthetic precision',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTVQZ-UkFNwg--MEXlpCvHHnwUZwSknjg_ySfB3uGM6va0j3MBz6XuSnkfx7LhoUntwpXCE4-4iDVWyMCtp5JB_taJht1HDypLc9aaqEkyt-oJxo4M3Khiws7GQy0dLAT6ZWEu8h3Juvm19nmuL7uBj9IHbjdgzpZs30CRkI8-vEuhsKAK57weVdkOkTZlJc5ctyZMeE9daJKhPkJroR-ZeY7wDWv6tvjJO18Wbn_7NSdHLBvWT5QU_405saylhAHYbJg4s8ZaoI',
    tag: 'UPGRADE'
  }
]
</script>

<template>
  <section class="py-8">
    <div class="flex items-center justify-between px-4 mb-4">
      <h2 class="text-slate-900 dark:text-slate-100 text-2xl font-black leading-tight">Project Results</h2>
      <a class="text-primary text-sm font-bold flex items-center gap-1" href="#">
        View all <span class="material-symbols-outlined text-sm">arrow_forward</span>
      </a>
    </div>
    <div class="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4">
      <div class="flex gap-4 px-4">
        <PortfolioCard 
          v-for="project in projects" 
          :key="project.title"
          v-bind="project"
        />
      </div>
    </div>
  </section>
</template>
