import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  Time: any;
};

export type Mutation = {
  __typename?: "Mutation";
  /** Create a new document in the collection of 'Result' */
  createResult: Result;
  /** Create a new document in the collection of 'User' */
  createUser: User;
  /** Delete an existing document in the collection of 'Result' */
  deleteResult?: Maybe<Result>;
  /** Delete an existing document in the collection of 'User' */
  deleteUser?: Maybe<User>;
  /** Partially updates an existing document in the collection of 'Result'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateResult?: Maybe<Result>;
  /** Partially updates an existing document in the collection of 'User'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateUser?: Maybe<User>;
  /** Update an existing document in the collection of 'Result' */
  updateResult?: Maybe<Result>;
  /** Update an existing document in the collection of 'User' */
  updateUser?: Maybe<User>;
};

export type MutationCreateResultArgs = {
  data: ResultInput;
};

export type MutationCreateUserArgs = {
  data: UserInput;
};

export type MutationDeleteResultArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["ID"];
};

export type MutationPartialUpdateResultArgs = {
  data: PartialUpdateResultInput;
  id: Scalars["ID"];
};

export type MutationPartialUpdateUserArgs = {
  data: PartialUpdateUserInput;
  id: Scalars["ID"];
};

export type MutationUpdateResultArgs = {
  data: ResultInput;
  id: Scalars["ID"];
};

export type MutationUpdateUserArgs = {
  data: UserInput;
  id: Scalars["ID"];
};

/** 'Result' input values */
export type PartialUpdateResultInput = {
  curriculumName?: InputMaybe<Scalars["String"]>;
  score?: InputMaybe<Scalars["Int"]>;
  user?: InputMaybe<ResultUserRelation>;
};

/** 'User' input values */
export type PartialUpdateUserInput = {
  email?: InputMaybe<Scalars["String"]>;
  emailVerified?: InputMaybe<Scalars["Int"]>;
  image?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  results?: InputMaybe<UserResultsRelation>;
};

export type Query = {
  __typename?: "Query";
  /** Find a document from the collection of 'Result' by its id. */
  findResultByID?: Maybe<Result>;
  /** Find a document from the collection of 'User' by its id. */
  findUserByID?: Maybe<User>;
  results: ResultPage;
  users: UserPage;
};

export type QueryFindResultByIdArgs = {
  id: Scalars["ID"];
};

export type QueryFindUserByIdArgs = {
  id: Scalars["ID"];
};

export type QueryResultsArgs = {
  _cursor?: InputMaybe<Scalars["String"]>;
  _size?: InputMaybe<Scalars["Int"]>;
};

export type QueryUsersArgs = {
  _cursor?: InputMaybe<Scalars["String"]>;
  _size?: InputMaybe<Scalars["Int"]>;
};

export type Result = {
  __typename?: "Result";
  /** The document's ID. */
  _id: Scalars["ID"];
  /** The document's timestamp. */
  _ts: Scalars["Long"];
  curriculumName: Scalars["String"];
  score?: Maybe<Scalars["Int"]>;
  user: User;
};

/** 'Result' input values */
export type ResultInput = {
  curriculumName: Scalars["String"];
  score?: InputMaybe<Scalars["Int"]>;
  user?: InputMaybe<ResultUserRelation>;
};

/** The pagination object for elements of type 'Result'. */
export type ResultPage = {
  __typename?: "ResultPage";
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars["String"]>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars["String"]>;
  /** The elements of type 'Result' in this page. */
  data: Array<Maybe<Result>>;
};

/** Allow manipulating the relationship between the types 'Result' and 'User' using the field 'Result.user'. */
export type ResultUserRelation = {
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'User' and associate it with the current document. */
  create?: InputMaybe<UserInput>;
};

export type User = {
  __typename?: "User";
  /** The document's ID. */
  _id: Scalars["ID"];
  /** The document's timestamp. */
  _ts: Scalars["Long"];
  email: Scalars["String"];
  emailVerified?: Maybe<Scalars["Int"]>;
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  results: ResultPage;
};

export type UserResultsArgs = {
  _cursor?: InputMaybe<Scalars["String"]>;
  _size?: InputMaybe<Scalars["Int"]>;
};

/** 'User' input values */
export type UserInput = {
  email: Scalars["String"];
  emailVerified?: InputMaybe<Scalars["Int"]>;
  image?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  results?: InputMaybe<UserResultsRelation>;
};

/** The pagination object for elements of type 'User'. */
export type UserPage = {
  __typename?: "UserPage";
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars["String"]>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars["String"]>;
  /** The elements of type 'User' in this page. */
  data: Array<Maybe<User>>;
};

/** Allow manipulating the relationship between the types 'User' and 'Result'. */
export type UserResultsRelation = {
  /** Connect one or more documents of type 'Result' with the current document using their IDs. */
  connect?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** Create one or more documents of type 'Result' and associate them with the current document. */
  create?: InputMaybe<Array<InputMaybe<ResultInput>>>;
  /** Disconnect the given documents of type 'Result' from the current document using their IDs. */
  disconnect?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type GetResultsQueryVariables = Exact<{ [key: string]: never }>;

export type GetResultsQuery = {
  __typename?: "Query";
  users: {
    __typename?: "UserPage";
    data: Array<{
      __typename?: "User";
      results: {
        __typename?: "ResultPage";
        data: Array<{
          __typename?: "Result";
          curriculumName: string;
          score?: number | null;
        } | null>;
      };
    } | null>;
  };
};

export const GetResultsDocument = gql`
  query GetResults {
    users {
      data {
        results {
          data {
            curriculumName
            score
          }
        }
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    GetResults(
      variables?: GetResultsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetResultsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetResultsQuery>(GetResultsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetResults",
        "query"
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
