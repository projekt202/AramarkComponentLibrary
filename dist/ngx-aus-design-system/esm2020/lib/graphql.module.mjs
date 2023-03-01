import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import * as i0 from "@angular/core";
export class GraphQLModule {
}
GraphQLModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: GraphQLModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GraphQLModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: GraphQLModule, exports: [ApolloModule] });
GraphQLModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: GraphQLModule, providers: [
        {
            provide: APOLLO_OPTIONS,
            deps: [HttpLink],
            useFactory: function (httpLink) {
                return {
                    link: httpLink.create({
                        uri: 'https://www-aramarkuniform-com-node-develop.go-vip.net/graphql',
                    }),
                    cache: new InMemoryCache(),
                };
            },
        },
    ], imports: [ApolloModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: GraphQLModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [ApolloModule],
                    providers: [
                        {
                            provide: APOLLO_OPTIONS,
                            deps: [HttpLink],
                            useFactory: function (httpLink) {
                                return {
                                    link: httpLink.create({
                                        uri: 'https://www-aramarkuniform-com-node-develop.go-vip.net/graphql',
                                    }),
                                    cache: new InMemoryCache(),
                                };
                            },
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhxbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXVzLWRlc2lnbi1zeXN0ZW0vc3JjL2xpYi9ncmFwaHFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUQsT0FBTyxFQUF1QixhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBbUIvQyxNQUFNLE9BQU8sYUFBYTs7MkdBQWIsYUFBYTs0R0FBYixhQUFhLFlBaEJkLFlBQVk7NEdBZ0JYLGFBQWEsYUFmYjtRQUNUO1lBQ0UsT0FBTyxFQUFFLGNBQWM7WUFDdkIsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ2hCLFVBQVUsRUFBRSxVQUFVLFFBQWtCO2dCQUN0QyxPQUFPO29CQUNMLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDO3dCQUNwQixHQUFHLEVBQUUsZ0VBQWdFO3FCQUN0RSxDQUFDO29CQUNGLEtBQUssRUFBRSxJQUFJLGFBQWEsRUFBRTtpQkFDM0IsQ0FBQztZQUNKLENBQUM7U0FDRjtLQUNGLFlBZFMsWUFBWTs0RkFnQlgsYUFBYTtrQkFqQnpCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGNBQWM7NEJBQ3ZCLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQzs0QkFDaEIsVUFBVSxFQUFFLFVBQVUsUUFBa0I7Z0NBQ3RDLE9BQU87b0NBQ0wsSUFBSSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUM7d0NBQ3BCLEdBQUcsRUFBRSxnRUFBZ0U7cUNBQ3RFLENBQUM7b0NBQ0YsS0FBSyxFQUFFLElBQUksYUFBYSxFQUFFO2lDQUMzQixDQUFDOzRCQUNKLENBQUM7eUJBQ0Y7cUJBQ0Y7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBvbGxvTW9kdWxlLCBBUE9MTE9fT1BUSU9OUyB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcbmltcG9ydCB7IEFwb2xsb0NsaWVudE9wdGlvbnMsIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudC9jb3JlJztcbmltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWFuZ3VsYXIvaHR0cCc7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtBcG9sbG9Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUE9MTE9fT1BUSU9OUyxcbiAgICAgIGRlcHM6IFtIdHRwTGlua10sXG4gICAgICB1c2VGYWN0b3J5OiBmdW5jdGlvbiAoaHR0cExpbms6IEh0dHBMaW5rKTogQXBvbGxvQ2xpZW50T3B0aW9uczxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsaW5rOiBodHRwTGluay5jcmVhdGUoe1xuICAgICAgICAgICAgdXJpOiAnaHR0cHM6Ly93d3ctYXJhbWFya3VuaWZvcm0tY29tLW5vZGUtZGV2ZWxvcC5nby12aXAubmV0L2dyYXBocWwnLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBHcmFwaFFMTW9kdWxlIHt9XG4iXX0=