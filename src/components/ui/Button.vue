<template>
  <!-- v-bind class https://vuejs.org/guide/essentials/class-and-style.html --->
  <button class="button" :class="[color, { 'full-width': fullWidth }]">
    {{ text }}
  </button>
</template>
  
<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
    fullWidth: Boolean,
  },
};
</script>

<style lang="scss">
.button {
  background: #0099ff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  margin: 20px;

  &:hover {
    filter: brightness(80%);
  }
}

.green {
  background: green;

  &:hover {
    filter: brightness(80%);
  }
}

.red {
  background: red;

  &:hover {
    filter: brightness(80%);
  }
}

.full-width {
  width: 100%;
}
</style>