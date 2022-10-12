export interface Tweet {
  author_id: string;
  text: string;
  edit_history_tweet_ids: string[];
  id: string;
  attachments?: {
    media_keys: string[];
  };
}

export interface MediaDetails {
  media_key: string;
  type: string;
  url: string;
  height: number;
}

export interface TweetAuthor {
  name: string;
  id: string;
  username: string;
  profile_image_url: string;
}

export interface TweeterResponse {
  result: {
    data: Tweet[];
    includes: {
      users: TweetAuthor[];
      media: MediaDetails[];
    };
  };
}
