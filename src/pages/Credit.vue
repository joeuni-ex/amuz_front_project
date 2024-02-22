<template>
  <div
    class="w-screen h-screen bg-pageBgGray flex flex-1 flex-col items-center pt-20"
  >
    <div
      class="flex flex-1 items-center justify-center bg-white space-x-10 w-full h-24 py-2"
    >
      <div class="h-14 flex justify-center items-center">메시지 전송</div>
      <div class="h-14 flex justify-center items-center">발신번호 관리</div>
      <div class="h-14 flex justify-center items-center">주소록 관리</div>
      <div class="h-14 flex justify-center items-center">발송결과</div>
    </div>
    <div class="flex h-full justify-center items-center flex-col space-y-12">
      <div class="flex flex-col space-y-5 text-center">
        <p class="text-4xl font-PretendardBold">크레딧 구매</p>
        <span class="text-xl text-gray-500"
          >메시지 전송을 위해 사용할 크레딧 상품을 선택해 주세요</span
        >
      </div>
      <div class="flex space-x-7 flex-wrap">
        <!-- 1 -->
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
export default {
  components: {
    CreditCard,
  },
};
</script>
<style>
.credit-content {
  width: 347px;
  height: 459px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 10px #00000008;
  border-radius: 8px;
  opacity: 1;
}
</style>
