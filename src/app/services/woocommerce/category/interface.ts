import { ProductImage } from '../image.interface';

export interface Category {
    id: number;
    name: string;
    count?: number;
    slug?: string;
    image?: ProductImage;
}
