import { Apollo } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable } from 'rxjs';
import { getMediaLinkRes, getPostRes } from './post.model';
import * as i0 from "@angular/core";
export declare class PostService {
    private apollo;
    constructor(apollo: Apollo);
    getPost(slug: string): Observable<ApolloQueryResult<getPostRes>>;
    getPostByIds(slug: number[]): Observable<ApolloQueryResult<getPostRes>>;
    getPostByPages(numPerPage: number, typePostToLoad?: string, after?: string | null, loadAllTabs?: boolean): Observable<ApolloQueryResult<getPostRes>>;
    getMediaLink(id: string): Observable<ApolloQueryResult<getMediaLinkRes>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PostService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PostService>;
}
