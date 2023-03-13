export interface KeyPair<K, V> {
  value: V;
  key: K;
}

export type Items = {
  [key: string]: string;
};

export interface IPostType {
  slug?: string;
  title: string;
  date?: string;
  coverImage?: string;
  excerpt?: string;
  ogImage?: {
    url: string;
  };
  content: string;
}

export type updateState<T> = (_newState: T) => void;

export interface IAppState {
  curLang: string;
  isSticky: boolean;
  // isFormOpen: boolean;
  isMenuOpen: boolean;
  skippedToContent: boolean;
}
export interface IAppStateChange {
  curLang?: string;
  isSticky?: boolean;
  isFormOpen?: boolean;
  isMenuOpen?: boolean;
  skippedToContent?: boolean;
}

export interface IAppContext extends IAppState {
  updateState: updateState<IAppStateChange>;
}

export interface IMouseState {
  cursorVariant: string;
  cursorText: string;
}
