export class EventEmitter<T extends Record<string, string>> {
    private listeners: { [K in keyof T]?: Array<(arg: T[K]) => void> } = {}

    // Register a listener for a specific event
    on<K extends keyof T>(event: K, listener: (arg: T[K]) => void): void {
        if (!this.listeners[event]) {
            this.listeners[event] = []
        }
        this.listeners[event]?.push(listener)
    }

    // Remove a listener from a specific event
    off<K extends keyof T>(event: K, listener: (arg: T[K]) => void): void {
        const listeners = this.listeners[event]
        if (listeners) {
            this.listeners[event] = listeners.filter((l) => l !== listener)
        }
    }

    // Trigger an event with its data
    emit<K extends keyof T>(event: K, data?: T[K]): void {
        const listeners = this.listeners[event]
        if (listeners) {
            listeners.forEach((listener) => listener(data!))
        }
    }
}