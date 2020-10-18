export interface Customer {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    username: string;
    avatar_url: string;
    role: string;
    orders_count: number;
    total_spent: number;
    billing_address: any;
    shipping_address: object;
}

export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    username: string;
    role: string;
    avatar_url: string;
    orders_count: number;
    total_spent: number;
    billing: any;
    shipping_address: object;
    password?: string;
}

export interface CustomerOrder {
    id: number;
    product_id: number;
    order_number: string;
    created_at: string;
    updated_at: string;
    total: string;
    subtotal: string;
    status: string;
    total_shipping: string;
    shipping_methods: string;
    line_items: any[];
}
