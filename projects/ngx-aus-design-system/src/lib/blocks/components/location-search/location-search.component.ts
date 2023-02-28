import { Component, Input, ViewChild } from "@angular/core";
import { ChangeDetectorRef } from "@angular/core";
import { GoogleMap } from "@angular/google-maps";
import { Apollo, gql } from "apollo-angular";

import { ButtonConfig } from "../../../shared/components/button/button.component.model";
import { LocationService } from "../../../shared/services/location-service/location.service";
import { LocationsFiltersSearchParams } from "../locations-filters/locations-filters.model";
import { LocationMapItem } from "../location-map/location-map.model";
import { LocationResponse } from "./location-search.model";

@Component({
  selector: "aus-location-search",
  templateUrl: "./location-search.component.html",
  styleUrls: ["./location-search.component.scss"],
})
export class LocationSearchComponent {
  @Input() title: string = "Aramark Uniform Services Locations";
  @Input() button: ButtonConfig = {
    url: "#",
    variant: "red",
    target: "_blank",
    title: "Request a Quote",
  };

  locations: LocationMapItem[] = [];
  noResults: boolean = false;

  @ViewChild("map") map?: {
    getMap(): GoogleMap;
    showAndFixSidebar: VoidFunction;
  };

  constructor(
    private apollo: Apollo,
    private ls: LocationService,
    private cd: ChangeDetectorRef
  ) {}

  findCleanroom() {
    this.findLocation({ search: "Cleanroom" });
  }

  findZip(params: LocationsFiltersSearchParams) {
    const { zip, city, state, search } = params;

    // If only the state is provided, we don't need anything else
    if (state && !zip && !city && !search) {
      this.findLocation({ zip: "", city: "", state: state });
    } else {
      let search_string = "";
      if (zip) {
        search_string = "zipcode" + zip;
      } else if (city || state) {
        if (city) {
          search_string += city;
        }
        if (city && state) {
          search_string += ",";
        }
        if (state) {
          search_string += state;
        }
      }
      fetch(
        "https://maps.googleapis.com/maps/api/geocode/json?new_forward_geocoder=true&address=" +
          search_string +
          "&key=AIzaSyBWaX8u3DnZGSFBO1DoKMP3cRHzgQXYWpk"
      )
        .then((response) => response.json())
        .then((data) => {
          if (data["results"].length) {
            let lat = data["results"][0]["geometry"].location.lat;
            let lng = data["results"][0]["geometry"].location.lng;
            this.findLocation({
              zip: "",
              city: "",
              state: "",
              latitude: lat.toString(),
              longitude: lng.toString(),
            });
          } else {
            this.noResults = true;
          }
        });
    }
  }

  findLocation(params: LocationsFiltersSearchParams) {
    this.noResults = false;
    let { zip, city, state, search, latitude, longitude } = params;

    this.apollo
      .query({
        query: gql`
          query findLocations(
            $state: String
            $search: String
            $city: String
            $zipCode: String
            $longitude: String
            $latitude: String
          ) {
            locations(
              first: 10
              where: {
                search: $search
                state: $state
                city: $city
                zipCode: $zipCode
                latitude: $latitude
                longitude: $longitude
              }
            ) {
              edges {
                node {
                  id
                  link
                  feUrl
                  postLocation {
                    locationGoogleMap {
                      latitude
                      longitude
                      city
                      state
                      countryShort
                    }
                    locationPhone
                    locationName
                    locationStreetAddress
                    locationZipCode
                  }
                }
              }
            }
          }
        `,
        variables: {
          ...(zip && { zipCode: zip }),
          ...(city && { city }),
          ...(state && { state: this.ls.getStateShortForm(state) }),
          ...(search && { search }),
          ...(latitude && { latitude }),
          ...(longitude && { longitude }),
        },
      })
      .subscribe((res: any) => {
        // If no results
        if (!res.data.locations.edges.length) {
          this.noResults = true;
          return;
        }
        // Reset locations based on search parameters
        const _locations = res.data.locations.edges;
        this.locations = [];
        _locations.forEach((location: { node: LocationResponse }) => {
          this.locations.push({
            name: location.node.postLocation.locationName,
            address: location.node.postLocation.locationStreetAddress,
            city: `${
              location.node.postLocation.locationGoogleMap.city
            }, ${this.ls.getStateShortForm(
              location.node.postLocation.locationGoogleMap.state
            )}`,
            state: this.ls.getStateShortForm(
              location.node.postLocation.locationGoogleMap.state
            ),
            zip: location.node.postLocation.locationZipCode,
            phone: location.node.postLocation.locationPhone,
            hours: "Opens 8AM - Closes 5PM",
            coords: {
              lat: parseFloat(
                location.node.postLocation.locationGoogleMap.latitude
              ),
              lng: parseFloat(
                location.node.postLocation.locationGoogleMap.longitude
              ),
            },
            img: "",
            url: location.node.feUrl,
          });
          this.cd.detectChanges();
        });
        const timeout = setTimeout(() => {
          clearTimeout(timeout);
          this.map?.showAndFixSidebar();
        }, 500);
        // Center map so that it fits all markers
        if (this.locations.length > 1) {
          const bounds = new google.maps.LatLngBounds();
          for (let i = 0; i < this.locations.length; i += 1) {
            bounds.extend({
              lat: this.locations[i].coords.lat,
              lng: this.locations[i].coords.lng,
            });
          }
          const timeout = setTimeout(() => {
            clearTimeout(timeout);
            this.map?.getMap().fitBounds(bounds);
          }, 500);
        }
      });
  }
}
