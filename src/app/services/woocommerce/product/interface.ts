import { ProductImage } from '../image.interface';

export class Product {
    id: number;
    name: string;
    slug?: string;
    type: string;
    catalog_visibility: string;
    short_description?: string;
    price?: number;
    regular_price?: number;
    sale_price?: number;
    price_html?: string;
    images: ProductImage[];
    categories: [{
        id: number;
        name: string;
        slug: string;
    }];
    stock_status?: string;
    average_rating: string;
    rating_count: string;
    attributes: { id: number, name: string, variation: boolean, options: string[], visible: boolean}[];
    variations?: number[];
    related_ids: number[];
    meta_data: [{
        id: number;
        key: string;
        value: string;
    }];
}

export class Review {
    date_created: string;
    reviewer: string;
    review: string;
    rating: number;
    reviewer_avatar_urls: object;
}

export class Variation {
    id: number;
    date_created: string;
    description?: string;
    price: number;
    regular_price: number;
    sale_price: number;
    stock_status: string;
    image: object;
    attributes: any[];
}
