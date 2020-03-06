export interface ISignUpValues {
  email: string;
  password: string;
  code: string;
}

export type ISignUpErrors = ISignUpValues;

export interface IAmplifyConfig {
  userPoolId: string;
  userPoolWebClientId: string;
  oauthDomain: string;
  redirectSignIn: string;
  redirectSignOut: string;
  awsRegion: string;
}

// IObservers defines the object to hold all observers by name
export interface IGateObservers {
  [name: string]: () => void;
}

export interface IGateFlags {
  error: string; // some error happened
  needToConfirm: boolean; // need to confirm account with code
  resetPasswordStep2: boolean; // happens when forgotPassword is selected
  codeFlow: boolean; // oAuth is processing
  ready: boolean; // amplify has been configured or some error has been caught
  processing: boolean; // something is happening
  doneResendCode: boolean; // success in the end of resendCode
  doneResetPassword: boolean; // cussess in the end of forgotPasswordStep2
}

export interface IGateUser {
  email: string;
  username: string;
  idToken: string;
  hasAccess: boolean; // signedIn and belongs to the required groups
}

export interface IDelays {
  constructor: number; // in the constructor, when calling Amplify.configure => wait until all subscribers are ready so no one will miss the configure notification
  onChange: number; // to allow calling begin/end one after another immediatelly and force re-rendering
  resendCode: number; // to let the user find the email and/or to prevent sending many codes
}

export interface IStorage {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
}

export const newBlankFlags = (): IGateFlags => ({
  error: '',
  needToConfirm: false,
  resetPasswordStep2: false,
  codeFlow: false,
  ready: false,
  processing: false,
  doneResendCode: false,
  doneResetPassword: false,
});

export const newBlankUser = (): IGateUser => ({
  email: '',
  username: '',
  idToken: '',
  hasAccess: false,
});
