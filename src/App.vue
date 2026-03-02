<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import StatsBar from './components/StatsBar.vue'
import PortfolioCarousel from './components/PortfolioCarousel.vue'
import ServicesGrid from './components/ServicesGrid.vue'
import BottomNav from './components/BottomNav.vue'
import WhatsAppFAB from './components/WhatsAppFAB.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />

    <main class="relative flex-grow">
      <HeroSection />
      <StatsBar />
      <PortfolioCarousel />
      <ServicesGrid />
      <WhatsAppFAB />
    </main>

    <BottomNav />
  </div>
</template>

<style scoped>
/* Scoped styles if needed */
</style>
