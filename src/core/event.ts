import { EventBus, Unsubscribe } from "@type/event";
import { CommandTypeAny } from "@type/command";

export function createEventBus(): EventBus {
  const bus = document.createElement("div");

  const on = <T = any>(
    name: string,
    listener: (data: T) => void
  ): Unsubscribe => {
    const handler = (event: CustomEvent<T>) => listener(event.detail);
    bus.addEventListener(name, handler as any);
    return () => bus.removeEventListener(name, handler as any);
  };

  const emit = <T = any>(name: string, detail?: T) => {
    bus.dispatchEvent(
      new CustomEvent(name, {
        detail,
      })
    );
  };

  const dispatch = (...commands: Array<CommandTypeAny>) => {
    commands.forEach((command) => emit(command.name, command.data));
  };

  return {
    on,
    emit,
    dispatch,
  };
}
