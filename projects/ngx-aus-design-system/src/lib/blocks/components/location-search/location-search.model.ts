export type LocationResponse = {
  id: string;
  link: string;
  feUrl: string;
  postLocation: {
    locationGoogleMap: {
      latitude: string;
      longitude: string;
      city: string;
      state: string;
      countryShort: string;
    };
    locationPhone: string;
    locationName: string;
    locationStreetAddress: string;
    locationZipCode: string;
  };
};
