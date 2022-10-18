import { AxiosResponse } from 'axios';
import { api } from '../utils/api';
import { sortDate } from '../utils/tools';
import {
  MediaDetails,
  TweetAuthor,
  Tweet,
  TweeterResponse,
  FormattedTweet,
} from './Home.type';

const formatTweets = (twitterData: TweeterResponse): FormattedTweet[] => {
  const {
    media: medias,
    users,
  }: { media: MediaDetails[]; users: TweetAuthor[] } =
    twitterData.result.includes;
  return twitterData.result.data.map((tweet: Tweet) => {
    const author = users.find(
      (user: TweetAuthor) => user.id === tweet.author_id,
    ) as TweetAuthor;
    let mediaDetails = <MediaDetails>{};
    if (tweet.attachments?.media_keys) {
      const media = medias.find(
        (media: MediaDetails) =>
          media.media_key === tweet.attachments?.media_keys[0],
      );
      if (media) {
        mediaDetails = media;
      }
    }
    return {
      ...tweet,
      ...mediaDetails,
      author,
    };
  });
};

export const useTweets = async (): Promise<FormattedTweet[]> => {
  return api(`${import.meta.env.VITE_APP_API_BASE_URL}/users/tweets`)
    .then((result: AxiosResponse<TweeterResponse>) => {
      console.log(formatTweets(result.data));
      return formatTweets(result.data).sort(
        (tweetA: FormattedTweet, tweetB: FormattedTweet) => {
          return sortDate(tweetA.created_at, tweetB.created_at);
        },
      );
    })
    .catch(() => []);
};
