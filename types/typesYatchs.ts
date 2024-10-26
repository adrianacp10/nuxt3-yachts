export interface Yacht {
    id: string;                                   // Identificador único del yate
    permalink: string;                             // Enlace permanente del yate
    name: string;                                 // Nombre del yate
    coverImage: {                                 // Objeto que contiene la imagen principal
        url: string;                              // URL de la imagen
    };
    hidePrice: boolean;                           // Indica si el precio debe ser ocultado
    buyPrice?: {                                  // Precio de compra en diferentes monedas (opcional)
        EUR: number;
        USD: number;
        GBP: number;
    };
    charterSummerPrice?: {                        // Precio de charter en verano (opcional)
        EUR: number;
        USD: number;
        GBP: number;
    };
    charterSummerHotspots?: Array<{              // Hotspots de charter en verano (opcional)
        id: string;
        name: string;
    }>;
    charterWinterPrice?: {                        // Precio de charter en invierno (opcional)
        EUR: number;
        USD: number;
        GBP: number;
    };
    charterWinterHotspots?: Array<{              // Hotspots de charter en invierno (opcional)
        id: string;
        name: string;
    }>;
    guestsNumber: number;                         // Número de huéspedes que el yate puede acomodar
    cabinsNumber: number;                         // Número de cabinas en el yate
    length: {                                     // Longitud del yate
        meters: string;                           // Longitud en metros
        feet: string;                             // Longitud en pies
    };
}

// Interfaz que representa la estructura de la respuesta de la API
export interface ApiResponse {
    meta: {
        total: number;      // Número total de yates disponibles
        page: number;       // Página actual de resultados
        totalPages: number; // Número total de páginas disponibles
    };
    data: Yacht[];         // Array de yates
}
