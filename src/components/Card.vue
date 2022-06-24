<template>
  <div class="card">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31da5RtxSPvf2xLuMRUHuyCXV7EhCWru6x_vg6vlIChTfMiYpVHFHG8r_p6sLdCrW8sY&usqp=CAU"
      alt="Bigote"
    />
    <h1>{{ title }}</h1>
    <p>
      {{ description }}
    </p>
    <button href="#">SAPE</button>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    description: String,
  },
};
</script>

<style scoped>
.card {
  font-family:Arial;
  border: 1px solid #c0c0c0;
  width: 300px;
  border-radius:10px;
}

h1 {
  margin: 40px 0 0;
  color: black;
  margin:20px;
}
p {
  color: #696969;
  margin:20px;
}

button {
  background:#0099FF;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  margin:20px;
}

button:hover {
  filter: brightness(80%);
}

img {
  width: 100%;

}
</style>
