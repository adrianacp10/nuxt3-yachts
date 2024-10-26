import { defineEventHandler } from "h3";
import { ApiResponse, Yacht } from "~/types/typesYatchs" // Importa tus interfaces


export default defineEventHandler (async (event) => {

    try {
        // Extraer los parámetros de consulta (como `page`) desde el frontend
        const query = getQuery(event);


        const apiUrl ='https://royaloceanyachts.com/api/yachts';
        const response : ApiResponse = await $fetch(apiUrl, {
            params: query, // Pasar todos los parámetros que recibe
            headers: {
                'CORS': 'Access-Control-Allow-Origin',
            }
        });
        //console.log('Respuesta de la API', response);
        return response;

    } catch(error) {
        console.log('Error fetching yachts data', error)
        return {
            statusCode: 500,
            message: 'Error al obtener los datos de yates.'
        };
    }


});