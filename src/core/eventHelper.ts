import { EventBus } from "@type/index";

export function createEventBus(): EventBus {
  const bus = document.createElement("div");

  return {
    on<T = any>(name: string, listener: (data: T) => void): () => void {
      const handler = (event: CustomEvent<T>) => listener(event.detail);
      bus.addEventListener(name, handler as any);
      return () => bus.removeEventListener(name, handler as any);
    },
    emit<T = any>(name: string, detail?: T) {
      bus.dispatchEvent(
        new CustomEvent(name, {
          detail,
        })
      );
    },
  };
}
