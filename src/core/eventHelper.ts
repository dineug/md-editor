import { EventBus as IEventBus } from "@type/index";

export class EventBus implements IEventBus {
  #bus = document.createElement("div");
  on<T = any>(name: string, callback: (data: T) => void): () => void {
    const handler = (event: CustomEvent<T>) => callback(event.detail);
    this.#bus.addEventListener(name, handler as any);
    return () => this.#bus.removeEventListener(name, handler as any);
  }
  dispatch<T = any>(name: string, detail?: T) {
    this.#bus.dispatchEvent(
      new CustomEvent(name, {
        detail,
      })
    );
  }
}
