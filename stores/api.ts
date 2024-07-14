import { defineStore } from "pinia";
import axios from "axios";
import type { Article } from "~/types/api";

export const useStore = defineStore("store", () => {
  // state 설정
  const searchValue = ref<string>("korea");
  const articleList = ref<Article[]>([]);

  // Actions(Mutation) => state 변경 목적으로 작성됨
  const changeSearchValue = (payload: string) => {
    searchValue.value = payload;
  };

  // News API 호출
  const getNews = async () => {
    const API_KEY = "d4434629cb9842589f2cddc3c6303435";
    const API_URL = `https://newsapi.org/v2/everything?q=${searchValue.value}&from=2024-07-11&sortBy=popularity&apiKey=${API_KEY}`;

    try {
        articleList.value = await axios.get(API_URL).then((res) => {
            return res.data.articles;
        });
    } catch(error) {
        console.log(error);
    }
  };

  return {searchValue, articleList, changeSearchValue, getNews}
});
