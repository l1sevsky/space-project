import { TApodPost, TApodState } from './entities';
import { createAsyncThunk, miniSerializeError } from '@reduxjs/toolkit';
import { apodService } from './services';
import { calcNextDatesRange } from 'resources/helpers';

export const getNextPostsAsync = createAsyncThunk(
  'apod/getNextPosts',
  async (amountPrevDays: number, { rejectWithValue, getState }) => {
    try {
      const { apod } = getState() as { apod: TApodState};
      const lastDate = apod.data.length ? apod.data[apod.data.length - 1].date : null;

      const range = calcNextDatesRange({
        prevDate: lastDate,
        amountDays: amountPrevDays,
      });

      const { data } = await apodService.getPostsBetweenDates({
        start_date: range.startDate,
        end_date: range.endDate,
      });

      return data;
    } catch (error) {
      const serializedError = miniSerializeError(error);
      return rejectWithValue(serializedError);
    }
  },
);
