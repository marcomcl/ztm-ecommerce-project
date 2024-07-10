import { AnyAction } from "redux-saga";
import { signInFail, signInSuccess, signOutFail, signOutSuccess, signUpFail } from "./user.action";
import { UserData } from "../../utils/firebase/firebase.utils";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
}

export const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction): UserState => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  if (signInFail.match(action) || signOutFail.match(action) || signUpFail.match(action)) {
    return { ...state, error: action.payload };
  }

  return state;
};
