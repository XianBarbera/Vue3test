<!-- // http://localhost:4000/personajes/cell -->
<template>
  <div class="personaje">
    <div v-if="personaje">Persoanje info: {{ personaje }}</div>
    <div v-else>Personaje no encontrado</div>
    <!-- https://router.vuejs.org/guide/essentials/navigation.html#traverse-history -->
    <Button text="volver" @click="$router.go(-1)" />
  </div>
</template>

<script>
import personajes from '../../db/personajes.json'
import Button from '../components/ui/Button.vue'

export default {
  name: 'personaje',
  data() {
    return {
      personaje: undefined
    }
  },
  // https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-hooks
  mounted() {
    // Acceder a :personaje via, `this.$route.params`
    console.log('this.$route', this.$route)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const personaje = personajes.find(personaje => personaje.id === this.$route.params.personaje)
    console.log('mounted ~ personaje', personaje)
    if (!personaje) {
      console.log('personaje no encontrado')
    } else {
      this.setPersonaje(personaje)
    }
  },
  methods: {
    setPersonaje(personaje) {
      this.personaje = personaje
    }
  },
  components: { Button }
}
</script>

<style lang="scss" scoped>
.personaje {
}
</style>
