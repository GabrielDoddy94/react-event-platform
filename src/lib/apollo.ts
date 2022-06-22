import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4pwpntx2mhk01xl88srgs1x/master",
  cache: new InMemoryCache(),
});
