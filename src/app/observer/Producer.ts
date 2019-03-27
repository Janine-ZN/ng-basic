export class Producer {
    listeners: Array<any>;
    constructor() {
        this.listeners = [];
    }
    addListener(listener) {
        if (typeof listener === 'function') {
            this.listeners.push(listener);
        } else {
            throw new Error('listener 必须是 function');
        }
    }
    removeListener(listener) {
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
    notify(message) {
        this.listeners.forEach(listeners => {
            listeners(message);
        });
    }
}
