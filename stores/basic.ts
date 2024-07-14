import {defineStore} from "pinia";

// Setup Stores
export const useStore = defineStore("counter", () => {
    // status
    const count = ref<number>(10);
    const name = ref<string>("suhoLee");


    // getters
    const doubleCount = computed(()=>{
        return count.value * 2;
    })
    const doublePlusOne = computed(()=>{
        return count.value *3;
    })

    // action
    function increment(){
        count.value++;
    }
    function randomizeCounter() {
        count.value = Math.round(100 * Math.random())
    }

    return {count, name, doubleCount, doublePlusOne, increment, randomizeCounter}
})