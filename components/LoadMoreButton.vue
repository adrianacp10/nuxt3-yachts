<template>
  <div class="button-container">
    <button @click="$emit('loadMore')" :disabled="!canLoadMore">
      Load More
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  canLoadMore: {
    type: Boolean,
    required: true
  }
});
</script>

<style scoped>

.button-container{
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom:40px;
}

button {
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.624);
  border-radius: 1px;
  cursor: pointer;
}

button:disabled {
  background-color: #cccccc; 
  cursor: not-allowed; 
}

button:hover:not(:disabled) {
  background-color: rgba(128, 128, 128, 0.142);
}
</style>
