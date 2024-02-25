<template>
  <div
    class="w-screen sm:h-full xl:h-screen bg-pageBgGray flex flex-1 flex-col items-center pt-20 pb-10 md:pb-0"
  >
    <!-- 상단 카테고리 -->
    <Category selectedCategory="크레딧 구매" :categoryList="categoryList" />
    <!-- 크레딧 페이지  -->
    <div
      class="mt-10 md:mt-0 mb-10 xl:mb-0 flex w-full h-full justify-center items-center flex-col space-y-12"
    >
      <div class="sm:mt-10 xl:mt-0 flex flex-col space-y-5 text-center">
        <p class="text-xl md:text-4xl font-PretendardBold">크레딧 구매</p>
        <span class="text-sm md:text-xl text-gray-500"
          >메시지 전송을 위해 사용할 크레딧 상품을 선택해 주세요</span
        >
      </div>
      <div
        class="w-full flex flex-col md:flex-row items-center justify-center space-y-4 sm:space-y-0 xl:space-x-7 flex-wrap"
      >
        <CreditCard
          price="30,000"
          count="66,667"
          credit="330,000"
          basic="300,000"
          add="30,000"
        />
        <CreditCard
          price="10,000"
          count="76,667"
          credit="110,000"
          basic="100,000"
          add="10,000"
        />
        <CreditCard
          price="30,000"
          count="66,667"
          credit="330,000"
          basic="300,000"
          add="30,000"
        />
        <CreditCard
          price="10,000"
          count="76,667"
          credit="110,000"
          basic="100,000"
          add="10,000"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CreditCard from "../components/CreditCard.vue";
import Category from "../components/Category.vue";

export default {
  components: {
    CreditCard,
    Category,
  },
  setup() {
    const categoryList = ["크레딧 내역"];

    return {
      categoryList,
    };
  },
};
</script>
<style></style>
