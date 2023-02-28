export type LocationMapVariant = 'single' | 'multiple';

export type LocationMapItem = {
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
