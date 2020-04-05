import React from 'react';
import { BaseNavigator } from "./src/BaseNavigator";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { NavigationContainer } from '@react-navigation/native';

// TODO make config based
const client = new ApolloClient({
  uri: "http://localhost:4000/gql",
  headers: {
    "Authorization": "123admin123"
  }
});

export default function App() {

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <BaseNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}


