import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token");
  operation.setContext({
    headers: {
      Authorization: `${token}`,
    },
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: ApolloLink.from([authMiddleware, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
