import { split } from 'apollo-link';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';

const wsClient = new SubscriptionClient(
  `ws://127.0.0.1:3000/device/api/graphql/subscriptions`,
  {
    reconnect: true,
  },
);
export const wsLink = new WebSocketLink(wsClient);
