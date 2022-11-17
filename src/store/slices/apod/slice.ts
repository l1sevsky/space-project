import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestStatuses } from 'resources/helpers';
import { getNextPostsAsync } from './asyncActions';
import { TApodState, TApodPost } from './entities';


const initialState = {
  postsType: null,
  data: [],
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
      status: RequestStatuses.LOADING,
      error: null,
    }),
    [getNextPostsAsync.fulfilled.type]: (state, { payload }: PayloadAction<TApodPost[]> ) => {
      const newState: TApodState = {
        ...state,
        postsType: 'betweenDates',
        status: RequestStatuses.SUCCESS,
        error: null,
      };

      if (state.postsType === 'betweenDates')
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
    })
  }
});


export const apodReducer = apodSlice.reducer;