import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class BranfolderService {
    constructor() { }
    parse(branfolder, retunrOnlyTheImageUrl = false) {
        let imageUrl = branfolder?.brandfolder_asset ??
            branfolder?.url ?? '';
        if (retunrOnlyTheImageUrl)
            return imageUrl;
        return {
            imageUrl: imageUrl,
            alt: branfolder?.altText ?? '',
            title: branfolder?.title
        };
    }
}
BranfolderService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BranfolderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
BranfolderService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BranfolderService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BranfolderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhbmZvbGRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1cy1kZXNpZ24tc3lzdGVtL3NyYy9saWIvc2hhcmVkL3NlcnZpY2VzL2JyYW5mb2xkZXIvYnJhbmZvbGRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsZ0JBQWUsQ0FBQztJQUVoQixLQUFLLENBQUMsVUFBZSxFQUFFLHdCQUFpQyxLQUFLO1FBQzNELElBQUksUUFBUSxHQUFHLFVBQVUsRUFBRSxpQkFBaUI7WUFDMUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFFeEIsSUFBSSxxQkFBcUI7WUFDdkIsT0FBTyxRQUFRLENBQUM7UUFFbEIsT0FBTztZQUNMLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLEdBQUcsRUFBRSxVQUFVLEVBQUUsT0FBTyxJQUFJLEVBQUU7WUFDOUIsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLO1NBQ3pCLENBQUE7SUFDSCxDQUFDOzsrR0FmVSxpQkFBaUI7bUhBQWpCLGlCQUFpQixjQUZoQixNQUFNOzRGQUVQLGlCQUFpQjtrQkFIN0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBCcmFuZm9sZGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwYXJzZShicmFuZm9sZGVyOiBhbnksIHJldHVuck9ubHlUaGVJbWFnZVVybDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgbGV0IGltYWdlVXJsID0gYnJhbmZvbGRlcj8uYnJhbmRmb2xkZXJfYXNzZXQgPz9cbiAgICAgIGJyYW5mb2xkZXI/LnVybCA/PyAnJztcblxuICAgIGlmIChyZXR1bnJPbmx5VGhlSW1hZ2VVcmwpIFxuICAgICAgcmV0dXJuIGltYWdlVXJsO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGltYWdlVXJsOiBpbWFnZVVybCxcbiAgICAgIGFsdDogYnJhbmZvbGRlcj8uYWx0VGV4dCA/PyAnJyxcbiAgICAgIHRpdGxlOiBicmFuZm9sZGVyPy50aXRsZVxuICAgIH1cbiAgfVxufVxuIl19