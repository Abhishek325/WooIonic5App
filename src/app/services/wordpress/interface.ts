export interface WpPage {
    id: number;
    date: string;
    modified: string;
    slug: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };

}

