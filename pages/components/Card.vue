<template>
    <div class="card" @click="openSite">
        <div class="card__image-box">
            <img v-if="data.urlToImage" :src="data.urlToImage" alt="" class="card__image-box__image" />
            <div v-else class="card__image-box__noData">등록된 이미지가 없습니다.</div>
        </div>
        <div class="card__info-box">
            <div class="card__info-box__header">
                <div class="broadcast">
                    <img :src="logo" alt="" class="broadcast__logo" />
                    <span class="broadcast__company">{{ data.source.name }}</span>
                </div>
                <span class="title">{{ data.title }}</span>
            </div>
            <div class="card__info-box__body">
                <span class="contents">
                    <!-- v-html 속성 기억하기!! : html 구조가 text로 보일 때 사라지게함 -->
                    <span v-html="data.content"></span>
                </span>
            </div>
        </div>
        <div class="card__profile-box">
            <div class="card__profile-box__image-box">
                <img src="@/assets/icons/user.svg" alt="" class="image" />
            </div>
            <div class="card__profile-box__detail">
                <span class="name">{{ data.author }}</span>
                <span class="date">{{ dayjs(data.publishedAt).format("YYYY-MM-DD HH:mm:ss") }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// data를 사용하여 API로부터 가져온 데이터를 저장하고 화면에 렌더링
import type { Article } from '~/types/api';
import dayjs from "dayjs";

//현재 index.vue에서 우리는 API로부터 Article을 받아오는데, 그 이름이 data로 선언되어 있음.
// 따라서 Article type을 import하고 아래에 props로 선언함.
interface Props {
    data:Article;
}

const props = defineProps<Props>();

// toref 와 torefs의 차이 : 객체 하나에 요소 하나를 bind하느냐, 객체 하나에 요소 여러개를 bind하느냐의 차이
// 현재는 객체 컴포넌트 하나에 요소 여러개 매핑해야 하므로 torefs 사용함.
const {data} = toRefs(props);
const url = data.value.url;

// computed : 계산된 형태를 사용, 캐싱 기능, 리턴 키워드 있어야함.
const website = computed(()=>{
    return url.split("https://").pop()?.split("/")[0];
})

const logo = computed(()=> {
    return `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${website.value}&size=16`;
})

const openSite = () => {
    window.open(data.value.url, "_blank")
}

</script>

<style lang="scss" coped>
.card {
    @include flexbox(flex-start, flex-start);
    flex-direction: column;

    width: calc(360px - 48px);
    height: 440px;

    padding: 24px !important;
    gap: 20px;

    // background-color: $color-black-700; // 다크모드
    background-color: $color-white-000;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
    border: 0.5px solid $color-gray-000;
    border-radius: 16px;

    cursor: pointer;

    &__image-box {
        width: 100%;
        min-height: 192px;

        border-radius: 12px;

        &__image {
            width: 100%;
            height: 100%;

            border-radius: 12px;
        }
        &__noData {
            @include flex-center;

            width: 100%;
            height: 100%;

            border: 0.5px solid $color-gray-300;
            border-radius: 12px;
            color: $color-gray-350;
        }
    }
    &__info-box {
        @include flex-center;
        flex-direction: column;

        width: 100%;

        &__header {
            @include flexbox(center, flex-start);
            flex-direction: column;

            width: 100%;
            height: 88px;

            gap: 8px;

            .broadcast {
                @include flexbox(center, flex-start);
                width: 100%;

                gap: 8px;

                &__logo {
                    width: 20px;
                    height: 20px;

                    border-radius: 50%;
                    background-color: white;
                }
                &__company {
                    @include flex-center;
                    font-size: 12px;
                    color: $color-black-700;
                }
            }
            .title {
                @include flexbox(center, flex-start);
                width: 100%;
                height: 48px;

                color: $color-black-700;

                overflow: hidden;
                white-space: normal;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                word-break: keep-all; // 문단으로 끊어져서 줄바꿈 됨
            }
        }
        &__body {
            width: 100%;
            height: 84px;

            .contents {
                width: 100%;
                height: 100%;

                font-size: 14px;
                color: $color-gray-350;

                overflow: hidden;
                white-space: normal;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                word-break: keep-all; // 문단으로 끊어져서 줄바꿈 됨
            }
        }
    }
    &__profile-box {
        @include flexbox(center, flex-start);
        width: 100%;
        height: 40px;

        gap: 8px;

        &__image-box {
            @include flex-center;

            .image {
                width: 32px;
                height: 32px;

                border-radius: 50%;
            }
        }
        &__detail {
            @include flexbox(flex-start, center);
            flex-direction: column;

            .name {
                font-size: 12px;
                color: $color-black-700;
            }
            .date {
                font-size: 12px;
                color: $color-gray-350;
            }
        }
    }
}
</style>