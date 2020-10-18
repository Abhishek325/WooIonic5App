export interface CartItem {
    product_id: number;
    quantity: number;
    variation_id?: number;
    variation?: number[];
    product_name?: string;
    product_image?: string;
}

export interface CartAddPayload {
    product_id: number;
    quantity: number;
    variation_id: number;
    variation: number[];
}
