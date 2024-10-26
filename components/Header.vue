<template>
    <h1 class="logo">ROY</h1>
</template>


<script setup lang="ts">

import '../assets/styles/cssFonts.css'

</script>


<style>

body {
  padding-top: 120px; 
}

.logo {
  margin: 0;
 padding: 30px;
  text-align: center;
  font-family:'UrbanGroteskReBoRegular';
  color: black;
  position: fixed; 
  top: 0; 
  left: 50%; /* Alinea horizontalmente */
  transform: translateX(-50%); /* Centra el header */
  width: 100%;
  background-color: white;
  z-index: 100;
  font-weight: 200;
}


</style>

