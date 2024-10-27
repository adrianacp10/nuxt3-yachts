import { ref, computed } from 'vue';
import type { Yacht } from '~/types/typesYatchs';

export function useYachts() {

    const error = ref<string>(''); // Manejo de errores
    const products = ref<Yacht[]>([]); // Aquí se almacenan los productos de la API
    const showFourImages = ref(true); // Estado para alternar entre 2 o 4 imágenes
    const currentCount = ref(40); // Contador de productos mostrados
    const currentPage = ref(1); // Página actual de la API
    const totalPages = ref(1); // Total de páginas (se actualizará después de la primera llamada)

    // Computed para mostrar cuántos productos mostrar
    const visibleProducts = computed(() => {
    return products.value ? products.value.slice(0, currentCount.value) : [];
    });

    // Toggle para alternar la cantidad de imágenes
    const toggleImages = (isFourImages?: boolean) => {
        showFourImages.value = isFourImages !== undefined ? isFourImages : !showFourImages.value;
      };
      
    const loadMore = async () => {
        if (currentPage.value < totalPages.value) {
            currentPage.value += 1; // Incrementar la página actual antes de la llamada
            console.log(`Cargando más productos, página solicitada: ${currentPage.value}`);
            await fetchYachts(currentPage.value); // Cargar la siguiente página
        }
    
        // Incrementa los productos visibles según la selección
        currentCount.value += showFourImages.value ? 4 : 2;
    };
    

    // Computed para controlar si hay más productos que cargar
    const canLoadMore = computed(() => {
        console.log(`canLoadMore: ${currentPage.value < totalPages.value}`);
        return currentPage.value < totalPages.value;
    });
    
    //Llamada a la API
    const fetchYachts = async (page = 1) => {
        try {
            console.log(`Solicitando datos de la página: ${page}`);
            const response = await $fetch<{ meta: { totalPages: number }; data: Yacht[] }>(`/api/apiYachts?buy=true&page=${page}`);
            //console.log('Respuesta completa de la API:', response);

            // Esto convierte la respuesta a objeto si es un string
            const data = typeof response === 'string' ? JSON.parse(response) : response;
            //console.log('Estructura de respuesta:', JSON.stringify(data, null, 2));

            // Esto verifica que la meta indique la página correcta y las páginas totales
            console.log('Meta información:', data.meta);

            // Validamos que data sea un objeto y que data.data sea un array
            if (data && typeof data === 'object' && Array.isArray(data.data)) {
                console.log(`Yates recibidos de la página ${page}:`, data.data.map((yacht: Yacht) => yacht.name));
                // Concatenar los productos nuevos en lugar de sobrescribirlos
                products.value = [...products.value, ...data.data]; 
                console.log('Todos los productos cargados hasta ahora:', products.value.map((yacht: Yacht) => yacht.name));

                // Esto es para actualizar el total de páginas desde la respuesta de la API
                if (data.meta && data.meta.totalPages) {
                    totalPages.value = data.meta.totalPages;
                }

            } else {
                console.error('La respuesta no contiene una propiedad data válida o no es un array:', data);
            }
        } catch (err) {
            console.error('Error Fetching Yachts:', err);
            error.value = 'No se pudieron cargar los datos de los yates.';
        }
    };

    
    return {
        products,
        visibleProducts,
        showFourImages,
        error,
        fetchYachts,
        loadMore,
        canLoadMore,
        toggleImages
    };

}