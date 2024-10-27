<template>
    <div class="product-card">
        <div class="image-container">
        <img :src="image" :alt="title" class="product-image" />
        <img :src="SavedIcon" alt="Saved Icon" class="saved-icon" />
        </div>
        <div class="text-container">
            <p class="priceDetails">
                <span>Price: {{ buyPrice?.EUR ? `${buyPrice.EUR}€` : "Not Available" }}</span>
            </p>
            <p class="details">
                Guests: {{ guestsNumber }} | Length: {{ length.meters }}m | Cabins: {{ cabinsNumber }} 
            </p>
            <div class="title-buttonEnquiry">
                <h3 class="title">{{ title }}</h3>
                <EnquiryButton class="enquiry-button" />
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { defineProps } from 'vue';
import EnquiryButton from "./EnquiryButton.vue";
import SavedIcon from '@/assets/icons/marcador.png';


const props = defineProps<{
    title: string;
    image: string;
    buyPrice: { EUR: number | null};
    guestsNumber: number;
    cabinsNumber: number;
    length: { meters: string};
}>();

</script>



<style scoped>

.product-card {
    border: 3px solid white;
    border-radius: 2px;
    padding:5px;
    background-color: white;
    transition: box-shadow 0.3s;
    width: 100%;
    min-height: 220px; /* Establecido un alto mínimo */
    justify-content: space-between;
    font-family: 'UrbanGroteskReBoRegular';
    position: relative; /* Necesario para posicionar el button */
}


/* Icono de guardado (hidden by default) */
.saved-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Icono de guardado al hacer hover sobre la tarjeta */
.product-card:hover .saved-icon {
  opacity: 1;
}


/* Agregar la clase para mostrar el botón al hacer hover */
.product-card:hover .enquiry-button {
    display: block; /* Mostrar el botón al hacer hover */
}

.title-buttonEnquiry {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Estilo para ocultar el botón inicialmente */
.enquiry-button {
    display: none; /* Ocultar por defecto */
}

.text-container{
    text-align: left;
}

.product-image {
    width: 100%;
    height: 220px;
    object-fit: cover;
}
.priceDetails {
    color: grey;
}
.details{
    font-family: 'UrbanGroteskReBoRegular';
}

</style>