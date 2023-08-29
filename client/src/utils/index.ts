export function noop() {}

export function deferred<T>() {
  let resolve: (value: T | PromiseLike<T>) => void = noop;
  let reject: (reason?: any) => void = noop;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return {
    promise,
    resolve,
    reject,
  };
}

export class TaskPool {
  constructor() {}

  private tasks = new Map<string, ReturnType<typeof deferred<any>>>();

  public static genTaskId() {
    return Math.random().toString(36).slice(2);
  }

  public notify(taskId: string, value: any) {
    const deferred = this.tasks.get(taskId);
    if (Object.hasOwnProperty.call(value, "taskId")) {
      const { taskId, ...rest } = value;
      value = rest;
    }
    deferred?.resolve(value);
    this.tasks.delete(taskId);
  }

  public wait<T extends any>(taskId: string): Promise<T> {
    const task = deferred<T>();
    this.tasks.set(taskId, task);
    return task.promise;
  }
}
