export type Tweet = {
    id: string;
    text: string;
    sentimentScore: number;
}

export type TwitterResponse = {
    user?: TwitterUser;
    tweets: Tweet[];
}

export type TwitterUser = {
    id: string;
    name: string;
    handle: string;
    profilePicture: string;
  };