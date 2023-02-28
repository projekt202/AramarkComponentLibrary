import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      deps: [HttpLink],
      useFactory: function (httpLink: HttpLink): ApolloClientOptions<any> {
        return {
          link: httpLink.create({
            uri: 'https://www-aramarkuniform-com-node-develop.go-vip.net/graphql',
          }),
          cache: new InMemoryCache(),
        };
      },
    },
  ],
})
export class GraphQLModule {}
