export interface Yacht {
    id: string;                                   
    permalink: string;                             
    name: string;                                
    coverImage: {                                
        url: string;                           
    };
    hidePrice: boolean;                       
    buyPrice?: {                                  
        EUR: number;
        USD: number;
        GBP: number;
    };
    charterSummerPrice?: {                       
        EUR: number;
        USD: number;
        GBP: number;
    };
    charterSummerHotspots?: Array<{              
        id: string;
        name: string;
    }>;
    charterWinterPrice?: {                       
        EUR: number;
        USD: number;
        GBP: number;
    };
    charterWinterHotspots?: Array<{             
        id: string;
        name: string;
    }>;
    guestsNumber: number;                         
    cabinsNumber: number;                         
    length: {                                     
        meters: string;                          
        feet: string;                            
    };
}

// Interfaz que representa la estructura de la respuesta de la API
export interface ApiResponse {
    meta: {
        total: number;      
        page: number;       
        totalPages: number; 
    };
    data: Yacht[];         
}
