<script setup>
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>

    <div class="wrapper">
      <Card
        title="Deseos de Pau"
        description="Una ucranianita hermosa miamor <3 me caso con todas"
      />
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
