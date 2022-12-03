import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApodStateTypes, RequestStatuses } from 'resources/helpers';
import { getNextPostsAsync, getPostFromDateAsync } from './asyncActions';
import { TApodState, TApodPost } from './entities';


const initialState = {
  postsType: ApodStateTypes.init,
  data: [],
  currentPost: null,
  status: RequestStatuses.IDLE,
  error: null
} as TApodState


const apodSlice = createSlice({
  name: 'apod',
  initialState,
  reducers: {},
  extraReducers: {
    [getNextPostsAsync.pending.type]: (state) => ({
      ...state,
      postsType: ApodStateTypes.betweenDates,
      status: RequestStatuses.LOADING,
      error: null,
    }),
    [getNextPostsAsync.fulfilled.type]: (state, { payload }: PayloadAction<TApodPost[]> ) => {
      const newState: TApodState = {
        ...state,
        postsType: ApodStateTypes.betweenDates,
        status: RequestStatuses.SUCCESS,
        error: null,
      };

      if (state.postsType === ApodStateTypes.betweenDates)
        newState.data = [ ...state.data, ...(payload.reverse()) ];
      else
        newState.data = [ ...(payload.reverse()) ];

      return newState;
    },
    [getNextPostsAsync.rejected.type]: (state, { payload }: PayloadAction<Error>) => ({
      ...state,
      data: [],
      status: RequestStatuses.FAILURE,
      error: payload,
    }),

    [getPostFromDateAsync.pending.type]: (state) => ({
      ...state,
      status: RequestStatuses.LOADING,
      error: null,
    }),
    [getPostFromDateAsync.fulfilled.type]: (state, { payload }: PayloadAction<TApodPost> ) => ({
      ...state,
      currentPost: payload,
      status: RequestStatuses.SUCCESS,
      error: null
    }),
    [getPostFromDateAsync.rejected.type]: (state, { payload }: PayloadAction<Error>) => ({
      ...state,
      currentPost: null,
      status: RequestStatuses.FAILURE,
      error: payload,
    }),
  }
});


export const apodReducer = apodSlice.reducer;