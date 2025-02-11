import { defineStore } from 'pinia';
export const useCounterStore = defineStore('counter', {
    state: () => ({
        sharedValue: '預設值',
    }),
    actions: {
        increment() {
            this.count += 1;
        },
        decrement() {
            this.count -= 1;
        },
        setSharedValue(newValue) {
            this.sharedValue = newValue;
        },
    },
    getters: {
        doubleCount: state => state.count * 2,
    },
});
