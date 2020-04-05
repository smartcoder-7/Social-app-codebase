import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { gql } from 'apollo-boost';
import { useLoadUsersQuery } from '../../types/gqlReactTypings.generated.d';
import { compact } from 'lodash';

gql`
  query LoadUsers {
    users { 
      id, fullName
    }
  }
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface IProps {
  title?: string;
}

export const FeedSampleComponent: React.FC<IProps> = ({ title }: IProps) => {
  const { data, loading, refetch } = useLoadUsersQuery();
  const [counter, setCounter] = useState<number>(0);

  const sampleApiCall = async () => {
    setCounter(counter + 1);
    await refetch();
  }


  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Button onPress={sampleApiCall} title="Refresh sample API Call" />

      {data && !loading &&
        <Text>User Data [Run #{counter}]: {compact(data.users).map(user => `\n${user.fullName} (${user.id})`).join('\n')}</Text>
      }
    </View>
  );
}


