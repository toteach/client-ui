export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepPartial<U>>
      : DeepPartial<T[P]>
};

export type Nullable<T> = T | null;

export type Timestamp = number;

export type Uuid = string;

export interface SimpleObject<V> {
  [key: string]: V;
}

export interface SimpleClassList {
  [key: string]: boolean;
}

export interface SimpleStyleList {
  [key: string]: string | undefined;
}

export interface KeyboardEventTargetInput extends KeyboardEvent {
  target: HTMLInputElement;
}

export interface MouseInputTargetInput extends MouseEvent {
  target: HTMLInputElement;
}

export interface InputEventTargetInput extends InputEvent {
  target: HTMLInputElement;
}

export interface FocusEventTargetInput extends FocusEvent {
  target: HTMLInputElement;
}
