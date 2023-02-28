import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BranfolderService {
  constructor() {}

  parse(branfolder: any, retunrOnlyTheImageUrl: boolean = false) {
    let imageUrl = branfolder?.brandfolder_asset ??
      branfolder?.url ?? '';

    if (retunrOnlyTheImageUrl) 
      return imageUrl;

    return {
      imageUrl: imageUrl,
      alt: branfolder?.altText ?? '',
      title: branfolder?.title
    }
  }
}
