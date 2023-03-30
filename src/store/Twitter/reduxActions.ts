import { TwitterResponse } from "../../types/Twitter";

export const GET_TWEETS_REQUEST = 'GET_TWEETS_REQUEST';
export const GET_TWEETS_SUCCESS = 'GET_TWEETS_SUCCESS';
export const GET_TWEETS_FAILURE = 'GET_TWEETS_FAILURE';

export interface GetTweetsRequestAction {
  type: typeof GET_TWEETS_REQUEST;
}

export interface GetTweetsSuccessAction {
  type: typeof GET_TWEETS_SUCCESS;
  payload: TwitterResponse;
}

export interface GetTweetsFailureAction {
  type: typeof GET_TWEETS_FAILURE;
  payload: string;
}

export type TwitterResponseActionTypes =
  | GetTweetsRequestAction
  | GetTweetsSuccessAction
  | GetTweetsFailureAction;

export const getTweetsRequest = (): GetTweetsRequestAction => ({ type: GET_TWEETS_REQUEST });
export const getTweetsSuccess = (twitterResponse: TwitterResponse): GetTweetsSuccessAction => ({
  type: GET_TWEETS_SUCCESS,
  payload: twitterResponse,
});
export const getTweetsFailure = (error: string): GetTweetsFailureAction => ({
  type: GET_TWEETS_FAILURE,
  payload: error,
});
