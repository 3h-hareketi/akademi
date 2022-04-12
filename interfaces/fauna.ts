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

export type Answer = {
  __typename?: "Answer";
  /** The document's ID. */
  _id: Scalars["ID"];
  /** The document's timestamp. */
  _ts: Scalars["Long"];
  answer?: Maybe<Scalars["String"]>;
  articleId: Scalars["String"];
  submission: Submission;
};

/** 'Answer' input values */
export type AnswerInput = {
  answer?: InputMaybe<Scalars["String"]>;
  articleId: Scalars["String"];
  submission?: InputMaybe<AnswerSubmissionRelation>;
};

/** The pagination object for elements of type 'Answer'. */
export type AnswerPage = {
  __typename?: "AnswerPage";
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars["String"]>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars["String"]>;
  /** The elements of type 'Answer' in this page. */
  data: Array<Maybe<Answer>>;
};

/** Allow manipulating the relationship between the types 'Answer' and 'Submission' using the field 'Answer.submission'. */
export type AnswerSubmissionRelation = {
  /** Connect a document of type 'Submission' with the current document using its ID. */
  connect?: InputMaybe<Scalars["ID"]>;
  /** Create a document of type 'Submission' and associate it with the current document. */
  create?: InputMaybe<SubmissionInput>;
};

export type Mutation = {
  __typename?: "Mutation";
  /** Create a new document in the collection of 'Answer' */
  createAnswer: Answer;
  /** Create a new document in the collection of 'Result' */
  createResult: Result;
  /** Create a new document in the collection of 'Submission' */
  createSubmission: Submission;
  /** Create a new document in the collection of 'User' */
  createUser: User;
  /** Delete an existing document in the collection of 'Answer' */
  deleteAnswer?: Maybe<Answer>;
  /** Delete an existing document in the collection of 'Result' */
  deleteResult?: Maybe<Result>;
  /** Delete an existing document in the collection of 'Submission' */
  deleteSubmission?: Maybe<Submission>;
  /** Delete an existing document in the collection of 'User' */
  deleteUser?: Maybe<User>;
  /** Partially updates an existing document in the collection of 'Answer'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateAnswer?: Maybe<Answer>;
  /** Partially updates an existing document in the collection of 'Result'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateResult?: Maybe<Result>;
  /** Partially updates an existing document in the collection of 'Submission'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateSubmission?: Maybe<Submission>;
  /** Partially updates an existing document in the collection of 'User'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateUser?: Maybe<User>;
  /** Update an existing document in the collection of 'Answer' */
  updateAnswer?: Maybe<Answer>;
  /** Update an existing document in the collection of 'Result' */
  updateResult?: Maybe<Result>;
  /** Update an existing document in the collection of 'Submission' */
  updateSubmission?: Maybe<Submission>;
  /** Update an existing document in the collection of 'User' */
  updateUser?: Maybe<User>;
};

export type MutationCreateAnswerArgs = {
  data: AnswerInput;
};

export type MutationCreateResultArgs = {
  data: ResultInput;
};

export type MutationCreateSubmissionArgs = {
  data: SubmissionInput;
};

export type MutationCreateUserArgs = {
  data: UserInput;
};

export type MutationDeleteAnswerArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteResultArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteSubmissionArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["ID"];
};

export type MutationPartialUpdateAnswerArgs = {
  data: PartialUpdateAnswerInput;
  id: Scalars["ID"];
};

export type MutationPartialUpdateResultArgs = {
  data: PartialUpdateResultInput;
  id: Scalars["ID"];
};

export type MutationPartialUpdateSubmissionArgs = {
  data: PartialUpdateSubmissionInput;
  id: Scalars["ID"];
};

export type MutationPartialUpdateUserArgs = {
  data: PartialUpdateUserInput;
  id: Scalars["ID"];
};

export type MutationUpdateAnswerArgs = {
  data: AnswerInput;
  id: Scalars["ID"];
};

export type MutationUpdateResultArgs = {
  data: ResultInput;
  id: Scalars["ID"];
};

export type MutationUpdateSubmissionArgs = {
  data: SubmissionInput;
  id: Scalars["ID"];
};

export type MutationUpdateUserArgs = {
  data: UserInput;
  id: Scalars["ID"];
};

/** 'Answer' input values */
export type PartialUpdateAnswerInput = {
  answer?: InputMaybe<Scalars["String"]>;
  articleId?: InputMaybe<Scalars["String"]>;
  submission?: InputMaybe<AnswerSubmissionRelation>;
};

/** 'Result' input values */
export type PartialUpdateResultInput = {
  curriculumName?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["Time"]>;
  score?: InputMaybe<Scalars["Int"]>;
  user?: InputMaybe<ResultUserRelation>;
};

/** 'Submission' input values */
export type PartialUpdateSubmissionInput = {
  answers?: InputMaybe<SubmissionAnswersRelation>;
  curriculumName?: InputMaybe<Scalars["String"]>;
  score?: InputMaybe<Scalars["Int"]>;
  user?: InputMaybe<SubmissionUserRelation>;
};

/** 'User' input values */
export type PartialUpdateUserInput = {
  email?: InputMaybe<Scalars["String"]>;
  emailVerified?: InputMaybe<Scalars["Time"]>;
  image?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  results?: InputMaybe<UserResultsRelation>;
};

export type Query = {
  __typename?: "Query";
  answers: AnswerPage;
  /** Find a document from the collection of 'Answer' by its id. */
  findAnswerByID?: Maybe<Answer>;
  /** Find a document from the collection of 'Result' by its id. */
  findResultByID?: Maybe<Result>;
  /** Find a document from the collection of 'Submission' by its id. */
  findSubmissionByID?: Maybe<Submission>;
  /** Find a document from the collection of 'User' by its id. */
  findUserByID?: Maybe<User>;
  results: ResultPage;
  submissions: SubmissionPage;
  users: UserPage;
};

export type QueryAnswersArgs = {
  _cursor?: InputMaybe<Scalars["String"]>;
  _size?: InputMaybe<Scalars["Int"]>;
};

export type QueryFindAnswerByIdArgs = {
  id: Scalars["ID"];
};

export type QueryFindResultByIdArgs = {
  id: Scalars["ID"];
};

export type QueryFindSubmissionByIdArgs = {
  id: Scalars["ID"];
};

export type QueryFindUserByIdArgs = {
  id: Scalars["ID"];
};

export type QueryResultsArgs = {
  _cursor?: InputMaybe<Scalars["String"]>;
  _size?: InputMaybe<Scalars["Int"]>;
};

export type QuerySubmissionsArgs = {
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
  date?: Maybe<Scalars["Time"]>;
  score?: Maybe<Scalars["Int"]>;
  user: User;
};

/** 'Result' input values */
export type ResultInput = {
  curriculumName: Scalars["String"];
  date?: InputMaybe<Scalars["Time"]>;
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

export type Submission = {
  __typename?: "Submission";
  /** The document's ID. */
  _id: Scalars["ID"];
  /** The document's timestamp. */
  _ts: Scalars["Long"];
  answers: AnswerPage;
  curriculumName: Scalars["String"];
  score?: Maybe<Scalars["Int"]>;
  user: User;
};

export type SubmissionAnswersArgs = {
  _cursor?: InputMaybe<Scalars["String"]>;
  _size?: InputMaybe<Scalars["Int"]>;
};

/** Allow manipulating the relationship between the types 'Submission' and 'Answer'. */
export type SubmissionAnswersRelation = {
  /** Connect one or more documents of type 'Answer' with the current document using their IDs. */
  connect?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** Create one or more documents of type 'Answer' and associate them with the current document. */
  create?: InputMaybe<Array<InputMaybe<AnswerInput>>>;
  /** Disconnect the given documents of type 'Answer' from the current document using their IDs. */
  disconnect?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

/** 'Submission' input values */
export type SubmissionInput = {
  answers?: InputMaybe<SubmissionAnswersRelation>;
  curriculumName: Scalars["String"];
  score?: InputMaybe<Scalars["Int"]>;
  user?: InputMaybe<SubmissionUserRelation>;
};

/** The pagination object for elements of type 'Submission'. */
export type SubmissionPage = {
  __typename?: "SubmissionPage";
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars["String"]>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars["String"]>;
  /** The elements of type 'Submission' in this page. */
  data: Array<Maybe<Submission>>;
};

/** Allow manipulating the relationship between the types 'Submission' and 'User' using the field 'Submission.user'. */
export type SubmissionUserRelation = {
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
  emailVerified?: Maybe<Scalars["Time"]>;
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
  emailVerified?: InputMaybe<Scalars["Time"]>;
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

export type ResultMutationVariables = Exact<{
  curriculumName: Scalars["String"];
  user: ResultUserRelation;
  score?: InputMaybe<Scalars["Int"]>;
  date?: InputMaybe<Scalars["Time"]>;
}>;

export type ResultMutation = {
  __typename?: "Mutation";
  createResult: { __typename?: "Result"; _id: string };
};

export type ResultByIdQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type ResultByIdQuery = {
  __typename?: "Query";
  findResultByID?: {
    __typename?: "Result";
    curriculumName: string;
    date?: any | null;
  } | null;
};

export type UserFragment = {
  __typename?: "User";
  name?: string | null;
  email: string;
  image?: string | null;
};

export type UserResultFragment = {
  __typename?: "Result";
  _id: string;
  curriculumName: string;
  date?: any | null;
  user: {
    __typename?: "User";
    name?: string | null;
    email: string;
    image?: string | null;
  };
};

export type ResultsAndSubmissionsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type ResultsAndSubmissionsQuery = {
  __typename?: "Query";
  results: {
    __typename?: "ResultPage";
    data: Array<{
      __typename?: "Result";
      _id: string;
      curriculumName: string;
      date?: any | null;
      user: {
        __typename?: "User";
        name?: string | null;
        email: string;
        image?: string | null;
      };
    } | null>;
  };
  submissions: {
    __typename?: "SubmissionPage";
    data: Array<{
      __typename?: "Submission";
      _id: string;
      curriculumName: string;
      user: {
        __typename?: "User";
        name?: string | null;
        email: string;
        image?: string | null;
      };
    } | null>;
  };
};

export type ResultFragment = {
  __typename?: "Result";
  _id: string;
  curriculumName: string;
  score?: number | null;
  date?: any | null;
};

export type ResultsByUserIdQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type ResultsByUserIdQuery = {
  __typename?: "Query";
  findUserByID?: {
    __typename?: "User";
    results: {
      __typename?: "ResultPage";
      data: Array<{
        __typename?: "Result";
        _id: string;
        curriculumName: string;
        score?: number | null;
        date?: any | null;
      } | null>;
    };
  } | null;
};

export type SubmissionsByIdQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type SubmissionsByIdQuery = {
  __typename?: "Query";
  findSubmissionByID?: {
    __typename?: "Submission";
    score?: number | null;
    curriculumName: string;
    answers: {
      __typename?: "AnswerPage";
      data: Array<{
        __typename?: "Answer";
        _id: string;
        answer?: string | null;
        articleId: string;
      } | null>;
    };
    user: {
      __typename?: "User";
      _id: string;
      name?: string | null;
      email: string;
      image?: string | null;
    };
  } | null;
};

export const UserFragmentDoc = gql`
  fragment User on User {
    name
    email
    image
  }
`;
export const UserResultFragmentDoc = gql`
  fragment UserResult on Result {
    _id
    curriculumName
    date
    user {
      ...User
    }
  }
  ${UserFragmentDoc}
`;
export const ResultFragmentDoc = gql`
  fragment Result on Result {
    _id
    curriculumName
    score
    date
  }
`;
export const ResultDocument = gql`
  mutation Result(
    $curriculumName: String!
    $user: ResultUserRelation!
    $score: Int
    $date: Time
  ) {
    createResult(
      data: {
        curriculumName: $curriculumName
        user: $user
        score: $score
        date: $date
      }
    ) {
      _id
    }
  }
`;
export const ResultByIdDocument = gql`
  query ResultByID($id: ID!) {
    findResultByID(id: $id) {
      curriculumName
      date
    }
  }
`;
export const ResultsAndSubmissionsDocument = gql`
  query resultsAndSubmissions {
    results {
      data {
        ...UserResult
      }
    }
    submissions {
      data {
        _id
        curriculumName
        user {
          ...User
        }
      }
    }
  }
  ${UserResultFragmentDoc}
  ${UserFragmentDoc}
`;
export const ResultsByUserIdDocument = gql`
  query ResultsByUserID($id: ID!) {
    findUserByID(id: $id) {
      results {
        data {
          ...Result
        }
      }
    }
  }
  ${ResultFragmentDoc}
`;
export const SubmissionsByIdDocument = gql`
  query SubmissionsById($id: ID!) {
    findSubmissionByID(id: $id) {
      score
      answers {
        data {
          _id
          answer
          articleId
        }
      }
      curriculumName
      user {
        _id
        name
        email
        image
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
    Result(
      variables: ResultMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ResultMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ResultMutation>(ResultDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "Result",
        "mutation"
      );
    },
    ResultByID(
      variables: ResultByIdQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ResultByIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ResultByIdQuery>(ResultByIdDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "ResultByID",
        "query"
      );
    },
    resultsAndSubmissions(
      variables?: ResultsAndSubmissionsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ResultsAndSubmissionsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ResultsAndSubmissionsQuery>(
            ResultsAndSubmissionsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "resultsAndSubmissions",
        "query"
      );
    },
    ResultsByUserID(
      variables: ResultsByUserIdQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ResultsByUserIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ResultsByUserIdQuery>(
            ResultsByUserIdDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "ResultsByUserID",
        "query"
      );
    },
    SubmissionsById(
      variables: SubmissionsByIdQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<SubmissionsByIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SubmissionsByIdQuery>(
            SubmissionsByIdDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "SubmissionsById",
        "query"
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
