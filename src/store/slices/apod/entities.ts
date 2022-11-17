import { RequestStatuses } from 'resources/helpers';

export type TApodPost = {
  url: string;
  hdurl: string;
  thumbnail_url: string;

  title: string;
  explanation: string;
  copyright: string;
  date: string;

  media_type: 'image' | 'video';
};

export type TApodState = {
  postsType: 'betweenDates' | 'randomDates' | null;
  data: TApodPost[];
  status: RequestStatuses;
  error: Error | null;
}

// export type TApodRequestParams = {
//   date?: string | null;
//   start_date?: string;	
//   end_date?: string;
//   count?: number;
// }

export type TApodRequestBetweenDatesParams = {
  start_date: string;
  end_date: string;
}
