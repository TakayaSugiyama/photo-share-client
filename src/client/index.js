import { ApolloClient, InMemoryCache } from "@apollo/client";

const url = "http://localhost:4000/graphql";

const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

export default client;
