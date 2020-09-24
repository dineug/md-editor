import { EventBus as IEventBus } from "@type/index";

export class EventBus implements IEventBus {
  #bus = document.createElement("div");
  on<T = any>(
    eventName: string,
    handler: (event: CustomEvent<T>) => void
  ): () => void {
    this.#bus.addEventListener(eventName, handler as any);
    return () => this.#bus.removeEventListener(eventName, handler as any);
  }
  emit<T = any>(eventName: string, detail?: T) {
    this.#bus.dispatchEvent(
      new CustomEvent(eventName, {
        detail,
      })
    );
  }
}
