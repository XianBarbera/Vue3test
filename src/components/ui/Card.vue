<template>
  <div class="card" @click="goToCharacter()">
    <img :src="img" :alt="name" />
    <h3>{{ name }}</h3>

    <div class="skills-container">
      <h4 class="skills-title">Skills</h4>
      <div class="skills">
        <span v-for="skill in skills">{{ skill }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    name: String,
    description: String,
    img: String,
    id: String,
    skills: Array
  },
  methods: {
    goToCharacter() {
      this.$router.push({ name: 'personaje', params: { personaje: this.id } })
    }
  }
}
</script>

<style scoped>
.card {
  font-family: Arial;
  border: 1px solid #c0c0c0;
  width: 200px;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
  padding-bottom: 10px;
  cursor: pointer;
}

img {
  max-height: 200px;
}

h1 {
  margin: 40px 0 0;
  color: black;
  margin: 20px;
}

.skills-container {
  width: 80%;
  margin: 0 auto;
}
ul,
.skills {
  display: flex;
  flex-direction: column;
}

.skills-title {
  text-align: start;
}

li {
  color: #696969;
  font-size: 15px;
  margin: 5px 0;
}

img {
  width: 100%;
}
</style>
