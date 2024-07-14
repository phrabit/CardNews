<template>
    <div class="page">
        <!-- 선언한 통신 메서드 data를 이용하여 data의 articles를 받아오고, 
         component에 article을 바인딩시켜주기 위함. -->
        <CardComponent v-for="article in store?.articleList" :key="article.url" :data="article"/>
    
    </div>
</template>








<script setup lang="ts">
import CardComponent from "./components/Card.vue"
import { useStore } from "@/stores/api"

const store = useStore();
await useAsyncData("getNews", () => store.getNews());














// import CardComponent from "./components/Card.vue"
// import type { ApiStructure } from "~/types/api";

// const API_KEY = "d4434629cb9842589f2cddc3c6303435";
// const API_URL = `https://newsapi.org/v2/everything?q=Apple&from=2024-07-11&sortBy=popularity&apiKey=${API_KEY}`;

// // nuxt3 전용 API 통신 메서드 - 4가지 구조
// // getNews라는 함수를 통해 반복적으로 APi 통신 작업을 하기 위해 사용
// // 전역적으로 사용하려면 Pinia 사용해야함.
// const {data, pending, error, refresh} = await useAsyncData<ApiStructure>("getNews", ()=> $fetch(API_URL));

// console.log(data.value);

// console.log(data.value);


// Pinia-Store 구조 연습해보기;
/*
import {useStore} from "@/stores/api"
const store = useStore();

// 이렇게 선언하고, 위에 template에 store.count말고, 그냥 count라고 쓰면 반응성을 잃는다. => 버튼 눌러도 안바뀜.
// 따라서, storeToRefs(store); 라고 해야 함. => 반응하지 않는 상수값을 사용하기 위한 장치.
const {count, name, doubleCount, doublePlusOne} = store;
*/
</script>








<style lang="scss" scoped>

.page{
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;

    width: calc(100% - 96px);

    padding: 48px;
    gap: 24px;
}

</style>