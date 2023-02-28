import { Injectable } from '@angular/core';
import { MetaDefinition } from '@angular/platform-browser';

import { Node } from '../post/post.model';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  removeTags(text: string) {
    return text.replace(/<.*?>/g, '');
  }

  getCustomDescription(type: string, data: Node): MetaDefinition[] {
    let content = '';
    switch (type) {
      case 'Product':
        content = this.removeTags(
          data.postProduct?.attributes.productDescription || ''
        );
        break;
      case 'Location':
        {
          const block = data.blocks.find(
            (b) => b.aramarkBlock.name === 'acf/location-specific-hero'
          );
          if (block) {
            const info = JSON.parse(block.aramarkBlock.data);
            content = this.removeTags(info.description);
          }
        }
        break;
      default:
        content = '';
        break;
    }

    return [
      {
        name: 'description',
        content,
      },
      {
        name: 'og:description',
        content,
      },
    ];
  }
}
