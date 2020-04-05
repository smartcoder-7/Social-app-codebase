/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
  Date: any,
  JSON: any,
};




export type Mutation = {
   __typename?: 'Mutation',
  createUser: User,
  login: User,
  ping: Scalars['String'],
};


export type MutationCreateUserArgs = {
  userInput: UserInput
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  me?: Maybe<User>,
  users: Array<Maybe<User>>,
  version: Scalars['String'],
};

export type User = {
   __typename?: 'User',
  id: Scalars['String'],
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  fullName: Scalars['String'],
  admin: Scalars['Boolean'],
};

export type UserInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
};

export type LoadUsersQueryVariables = {};


export type LoadUsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'fullName'>
  )>> }
);


export const LoadUsersDocument = gql`
    query LoadUsers {
  users {
    id
    fullName
  }
}
    `;
export type LoadUsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LoadUsersQuery, LoadUsersQueryVariables>, 'query'>;

    export const LoadUsersComponent = (props: LoadUsersComponentProps) => (
      <ApolloReactComponents.Query<LoadUsersQuery, LoadUsersQueryVariables> query={LoadUsersDocument} {...props} />
    );
    
export type LoadUsersProps<TChildProps = {}> = ApolloReactHoc.DataProps<LoadUsersQuery, LoadUsersQueryVariables> & TChildProps;
export function withLoadUsers<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoadUsersQuery,
  LoadUsersQueryVariables,
  LoadUsersProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, LoadUsersQuery, LoadUsersQueryVariables, LoadUsersProps<TChildProps>>(LoadUsersDocument, {
      alias: 'loadUsers',
      ...operationOptions
    });
};

/**
 * __useLoadUsersQuery__
 *
 * To run a query within a React component, call `useLoadUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoadUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoadUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoadUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LoadUsersQuery, LoadUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<LoadUsersQuery, LoadUsersQueryVariables>(LoadUsersDocument, baseOptions);
      }
export function useLoadUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LoadUsersQuery, LoadUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LoadUsersQuery, LoadUsersQueryVariables>(LoadUsersDocument, baseOptions);
        }
export type LoadUsersQueryHookResult = ReturnType<typeof useLoadUsersQuery>;
export type LoadUsersLazyQueryHookResult = ReturnType<typeof useLoadUsersLazyQuery>;
export type LoadUsersQueryResult = ApolloReactCommon.QueryResult<LoadUsersQuery, LoadUsersQueryVariables>;