<template>
  <nav class="Nav">
    <!-- https://router.vuejs.org/api/#to -->
    <RouterLink to="/" class="Nav__link">Home</RouterLink>
    <RouterLink to="/personajes" class="Nav__link">Personajes</RouterLink>
    <Button text="enviar" />
  </nav>
</template>

<script>
import Button from '../ui/Button.vue'
export default {
    name: "Nav",
    components: { Button }
}
</script>

<style lang="scss" scoped>
.Nav {
  border-bottom: 1px solid black;
  &__link {
    padding: 10px 15px;
  }
}
</style>
