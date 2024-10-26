<template>
    <div class="navbar">
      <p class="title">YACHTS FOR SALE</p>
      <div class="buttons-container">
        <p>VIEW |</p>
        <button @click="setView(true)" class="image-toggle-button" :class="{ active: showFourImages }">
          <img :src="showFourImages ? iconGrid4Relleno : iconGrid" alt="Show 4 Images" class="icon" />
        </button>
        <button @click="setView(false)" class="image-toggle-button" :class="{ active: !showFourImages }">
          <img :src="showFourImages ? iconGrid2Vacio : iconGrid2Relleno" alt="Show 2 Images" class="icon2" />
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import iconGrid from '@/assets/icons/red24.png';
  import iconGrid4Relleno from '../assets/icons/redRelleno24.png';
  import iconGrid2Relleno from '@/assets/icons/grid2Relleno.png';
  import iconGrid2Vacio from '@/assets/icons/grid2Vacio.png'


  
  // Definimos las propiedades que recibirá el componente
  const props = defineProps<{
  showFourImages: boolean;
  toggleImages: () => void; // Ya no se usa directamente
  }>();

  // Función para establecer la vista según el botón clicado
  const setView = (isFourImages: boolean) => {
  props.toggleImages(); // Llama al método para alternar imágenes
  };

  </script>
  
  <style scoped>


  .navbar {
    background-color: white;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px; /* Espaciado opcional */
    font-family: 'UrbanGroteskReBoRegular';
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: 80px; /* Pegado a la parte superior */
    left: 0;
  }

  .title{
    margin-left: 20px;
  }

  .buttons-container {
    display: flex;
    margin-right: 20px;
  }


  .image-toggle-button{
    border: none;
    background: none;
  }

  .icon2{
    width: 15px;
    height: 15px;
  }
  
  </style>
  