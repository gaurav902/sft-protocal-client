
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

    MarkAsComplete: builder.mutation({
      query: (arg) => ({
        url: '/complete-task',
        method: 'POST',
        body: arg,
      }),
      invalidatesTags: ["task"]
    }),

    FindAccount: builder.query({
      query: (arg) => ({
        url: `/find-account?userId=${arg}`, // Append userId directly to the URL
        method: 'GET',
      }),
      providesTags: ["user"]
   }),

   TaskList: builder.query({
    query: (arg) => ({
      url: '/task-list', // Append userId directly to the URL
      method: 'GET',
      params: {
        userId: arg
      }
    }),
   // providesTags: ["task"]
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
      providesTags: ["task"]
   }),
  }),
});

export const { useCreateAccountMutation, useMarkAsCompleteMutation, useFindAccountQuery, useUpdateAccountMutation, useLeaderboardQuery, useTaskListQuery } = InjectEndpoint;
