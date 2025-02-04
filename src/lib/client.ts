import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: process.env.NEXT_API_URL ?? process.env.NEXT_PUBLIC_API_URL,
	cache: new InMemoryCache(),
	defaultOptions: {
		watchQuery: {
			fetchPolicy: "network-only",
			errorPolicy: "ignore",
		},
		query: {
			fetchPolicy: "network-only",
			errorPolicy: "all",
		},
	},
});

export default client;
