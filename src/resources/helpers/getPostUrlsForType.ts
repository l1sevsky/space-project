import { TApodPost } from 'store/slices/apod/entities';

type TReturn = {
  showUrl: string;
  linkUrl: string;
  linkText: string;
}

export const getPostUrlsForType = (post: TApodPost): TReturn => {
  let showUrl: string, linkUrl: string, linkText: string;

  if (post.media_type === 'image') {
    showUrl = post.url;
    linkUrl = post.hdurl;
    linkText = 'Show HD';
  } 
  else if (post.thumbnail_url.length) {
    showUrl = post.thumbnail_url;
    linkUrl = post.url;
    linkText = 'Open video';
  }
  else {
    showUrl = process.env.PUBLIC_URL + '/images/nasaActivityPlug.png';
    linkUrl = post.url;
    linkText = 'Visit activity';
  };

  return { showUrl, linkUrl, linkText };
}