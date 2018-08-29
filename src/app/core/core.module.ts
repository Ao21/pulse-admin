import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

import {} from './middleware/network.middleware';
import { from } from 'apollo-link';
import { MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, HttpClientModule, ApolloModule, HttpLinkModule, MatNativeDateModule],
  declarations: [],
})
export class CoreModule {
  constructor(private apollo: Apollo, private httpLink: HttpLink) {
    apollo.create({
      link: from([httpLink.create({})]),
      cache: new InMemoryCache(),
    });

    apollo
      .query({
        query: gql`
          query {
            moods {
              id
            }
          }
        `,
      })
      .subscribe(next => {
        console.log(next);
      });
  }
}
