<template>

    <div>
    <!-- Pantalla de carga con spinner -->
    <div v-if="loading" class="loading-screen">
      <div class="spinner"></div>
      <p>Loading...</p> <!-- Mensaje opcional -->
    </div>

    <div v-else class="product-grid-container">
        <Navbar :showFourImages="showFourImages" :toggleImages="toggleImages" />

        <div :class="{'product-grid': true, 'grid-4': showFourImages, 'grid-2': !showFourImages}">
        <ProductCard
        v-for="product in visibleProducts"
        :key="product.id"
        :title="product.name"  
        :image="product.coverImage.url"
        :cabinsNumber="product.cabinsNumber"
        :length="product.length"
        :guestsNumber="product.guestsNumber"
        :buyPrice="{ EUR: product.buyPrice?.EUR ?? null }"
        :hidePrice="product.hidePrice"
        />
        <!-- Muestra un mensaje de error si ocurre uno -->
        <p v-if="error">{{ error }}</p>
        </div>

        <LoadMoreButton :canLoadMore="canLoadMore" @loadMore="loadMore" />

    </div>
</div>
</template>



<script setup lang="ts">
    import { onMounted } from 'vue';
    import ProductCard from '~/components/ProductCard.vue';
    import Navbar from '~/components/Navbar.vue';
    import { useYachts } from '~/composables/useYachts';
    import LoadMoreButton from './LoadMoreButton.vue';

    const loading = ref<boolean>(true);

    // Usamos el composable para gestionar los productos
    const {
    visibleProducts,
    showFourImages,
    error,
    fetchYachts,
    loadMore,
    canLoadMore,
    toggleImages
    } = useYachts();

    // Llamamos a fetchYachts cuando se monta el componente
    onMounted(async() => {
    await fetchYachts();
    loading.value = false; // Cambia a false cuando los datos estén cargados
    });

</script>


<style scoped>

    /* Estilo para el spinner de carga a pantalla completa */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white; /* Fondo blanco */
  z-index: 9999; /* que esté por encima del contenido */
}

.spinner {
  width: 50px;
  height: 50px;
  border: 6px solid #ccc;
  border-top: 6px solid #333;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}








    .product-grid {
        display: grid;
        width: 100%;
        box-sizing: border-box;
        gap: 3px; /* Espaciado entre los elementos */
        padding: 10px; /* Espacio interno */
        justify-items: center;
    }

    /* Por defecto, se mostrarán 4 columnas */
    .grid-4 {
        grid-template-columns: repeat(4, 1fr);
    }

    /* Para pantallas móviles, solo un producto por fila */
    @media (max-width: 600px) {
        .product-grid {
            grid-template-columns: 1fr; /* Un producto por fila en móviles */
        }
    }

    /* Para 2 columnas, asegurando que no interfiera con móviles */
    @media (min-width: 601px) {
        .grid-2 {
            grid-template-columns: repeat(2, 1fr); /* Dos columnas para pantallas más grandes */
        }
    }
</style>
