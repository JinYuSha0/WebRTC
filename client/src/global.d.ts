declare global {
  export type ArgumentTypes<F extends Function> = F extends (
    ...args: infer A
  ) => any
    ? A
    : never;

  export type ExcludeTaskId<T> = Omit<T, "taskId">;
}

export {};
