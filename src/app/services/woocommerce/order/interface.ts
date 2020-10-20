export interface Order {
    customer_id: number;
    set_paid: boolean;
    payment_method: string;
    payment_method_title: string;
    billing: BillingAddress;
    shipping: ShippingAddress;
    line_items: Item[];
    shipping_lines: ShippingLine[];
    customer_note: string;
    status: string;
    total: string;
    created_via: string;
}

export interface ShippingAddress {
    first_name: string;
    last_name: string;
    address_1: string;
    address_2: string;
    city: string;
    postcode: string;
    country: string;
}

export interface BillingAddress {
    first_name: string;
    last_name: string;
    address_1: string;
    address_2: string;
    city: string;
    postcode: string;
    country: string;
    email: string;
    phone: string;
}

export interface Item {
    product_id: number;
    quantity: number;
    variation_id?: number;
}

export interface ShippingLine {
    method_id: string;
    method_title: string;
    meta_data?: {
        key: string;
        value: string
    }[];
    total?: string;
}
