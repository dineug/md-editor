import { CommandMap, CommandKey, CommandType, CommandTypeAny } from "./command";

export type Unsubscribe = () => void;

export interface EventBus {
  on<K extends CommandKey>(
    name: K,
    listener: (data: CommandMap[K]) => void
  ): Unsubscribe;
  on<T = any>(name: string, listener: (data: T) => void): Unsubscribe;

  emit<K extends CommandKey>(name: K, data: CommandMap[K]): void;
  emit<T = any>(name: string, data?: T): void;

  dispatch<K extends CommandKey>(...commands: Array<CommandType<K>>): void;
  dispatch(...commands: Array<CommandTypeAny>): void;
}
