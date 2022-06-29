<script setup>
import Card from '@/components/ui/Card.vue'
import Button from '@/components/ui/Button.vue'
import Nav from '@/components/layout/Nav.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <Nav />

  <RouterView />
</template>

<style>
@import '../assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
