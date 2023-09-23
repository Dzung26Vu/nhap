<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    congLenMot() {
      this.count++;
    },
    truDiMot() {
      this.count--;
    },
  },
};
</script>

<template>
  <!-- html -->
  <div>
    <p>Has puslished book:</p>
    <span>{{}}</span>
    <button @click="truDiMot">-</button>

    <p>Biến đếm: {{ count }}</p>

    <button @click="congLenMot">+</button>
  </div>
</template>

<style scoped>
/* css */
</style>
