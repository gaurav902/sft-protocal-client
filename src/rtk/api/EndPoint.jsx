import BaseQuery from "./BaseQuery";

const InjectEndpoint = BaseQuery.injectEndpoints({
  endpoints: (builder) => ({
    CreateAccount: builder.mutation({
      query: (arg) => ({
        url: '/create-account',
        method: 'POST',
        body: arg,
      }),
      invalidatesTags: ["user"]
    }),
    FindAccount: builder.query({
      query: (arg) => ({
        url: `/find-account?userId=${arg}`, // Append userId directly to the URL
        method: 'GET',
      }),
      providesTags: ["user"]
   }),

    UpdateAccount: builder.mutation({
      query: (arg) => ({
        url: '/update-account',
        method: 'PUT',
        body: arg,
      }),
      invalidatesTags: ["user"]
    }),

    Leaderboard: builder.query({
      query: () => ({
        url: '/leaderboard',
        method: 'GET'
      }),
   }),
  }),
});

export const { useCreateAccountMutation, useFindAccountQuery, useUpdateAccountMutation, useLeaderboardQuery } = InjectEndpoint;
