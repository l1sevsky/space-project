import { $apiApod } from "resources/api";
import { 
  TApodPost, 
  TApodRequestBetweenDatesParams, 
  TApodRequestPostFromDate 
} from './entities';

export const apodService = {
  getPostsBetweenDates: async ({ start_date, end_date }: TApodRequestBetweenDatesParams) => {
    return $apiApod.get<TApodPost[]>('', { params: { start_date, end_date } })
  },

  getPostFromDate: async ({ date }: TApodRequestPostFromDate) => {
    return $apiApod.get<TApodPost>('', { params: { date } })
  }
};
