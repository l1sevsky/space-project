import { createSelector } from "@reduxjs/toolkit";
import { TState } from "store/configureStore";
import { RequestStatuses } from "resources/helpers";


const getApodSlice = (state: TState) => state.apod;

export const apodPosts = createSelector(getApodSlice, (slice) => slice.data);
export const apodPostsIsLoading = createSelector(getApodSlice, (slice) => slice.status === RequestStatuses.LOADING);
export const apodPostsIsError = createSelector(getApodSlice, (slice) => slice.status === RequestStatuses.FAILURE);