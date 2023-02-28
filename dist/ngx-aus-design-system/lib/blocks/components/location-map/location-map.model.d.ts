export declare type LocationMapVariant = 'single' | 'multiple';
export declare type LocationMapItem = {
    name?: string;
    address: string;
    city: string;
    state?: string;
    zip: string;
    phone: string;
    hours: string;
    services?: string;
    coords: {
        lat: number;
        lng: number;
    };
    img?: string;
    url: string;
};
