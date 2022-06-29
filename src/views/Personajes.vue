<!-- // http://localhost:4000/personajes -->
<template>
  <div class="Personajes">
    <Card
      class="Personajes__card"
      v-for="personaje in personajes"
      :key="personaje.id"
      :name="personaje.name"
      :description="personaje.bio"
      :img="personaje.img"
      :skills="personaje.abilities"
      :id="personaje.id"
    />
  </div>
</template>

<script>
import Card from '@/components/ui/Card.vue'
import personajes from '../../db/personajes.json'

export default {
  name: 'Personajes',
  components: { Card },
  data() {
    return {
      personajes: personajes
    }
  }
}
</script>

<style lang="scss" scoped>
.Personajes {
  display: flex;
  flex-wrap: wrap;

  &__card {
    margin:10px;
  }
}
</style>
