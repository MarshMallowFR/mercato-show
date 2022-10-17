import { AxiosResponse } from 'axios';
import { api } from '../utils/api';
import { MediaDetails, TweetAuthor, Tweet, TweeterResponse } from './Home.type';

const formatTweets = (twitterData: TweeterResponse) => {
  const {
    media: medias,
    users,
  }: { media: MediaDetails[]; users: TweetAuthor[] } =
    twitterData.result.includes;
  return twitterData.result.data.map((tweet: Tweet) => {
    const author = users.find(
      (user: TweetAuthor) => user.id === tweet.author_id,
    );
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

export const useTweets = () => {
  api(`${import.meta.env.VITE_APP_API_BASE_URL}/users/330262748/tweets`)
    .then((result: AxiosResponse<TweeterResponse>) => {
      console.log({ result });
      return formatTweets(result.data);
    })
    .catch((err) => new Error(err));
};
