import axios from "axios";

export const apiApodUrl = () => {
  return 'https://api.nasa.gov/planetary/apod';
}

export const apiKeyNasa = () => {
  return 'UNB7Hfhl2iOrNxfA8pDstTkkRocfPJP4OQpHxya2';
}

export const $apiApod = axios.create({
  timeout: 10000,
  baseURL: apiApodUrl(),
  headers: {
    'Content-Type': 'application/json',
    Authorization: '',
  },
  params: {
    api_key: apiKeyNasa(),
    thumbs: true,
  }
});