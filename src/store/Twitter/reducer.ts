import { TwitterResponse } from "../../types/Twitter";
import { GET_TWEETS_FAILURE, GET_TWEETS_REQUEST, GET_TWEETS_SUCCESS, TwitterResponseActionTypes } from "./reduxActions";

export interface TwitterResponseState {
  twitterResponse: TwitterResponse;
  loading: boolean;
  error: string | null;
}

const initialState: TwitterResponseState = {
  twitterResponse: {
    tweets: []
  },
  loading: false,
  error: null,
};

const tweetsReducer = (state = initialState, action: TwitterResponseActionTypes): TwitterResponseState => {
  switch (action.type) {
    case GET_TWEETS_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_TWEETS_SUCCESS:
      return { ...state, loading: false, twitterResponse: action.payload };
    case GET_TWEETS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default tweetsReducer;
