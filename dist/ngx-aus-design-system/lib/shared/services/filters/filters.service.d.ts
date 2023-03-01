import { Apollo } from 'apollo-angular';
import { ProductCardInputs } from '../../components/product-card/product-card.model';
import * as i0 from "@angular/core";
export declare class FiltersService {
    private apollo;
    constructor(apollo: Apollo);
    getData(ids: {
        industries?: string[];
        services?: string[];
        brands?: string[];
        products?: string[];
    }): import("rxjs").Observable<import("@apollo/client/core").ApolloQueryResult<unknown>>;
    id2name(id: number, type: 'industry' | 'service'): Promise<string>;
    parseProduct(prod: ProductCardInputs & {
        fks: string[];
    }, data: any): ProductCardInputs & {
        fks: string[];
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<FiltersService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FiltersService>;
}
