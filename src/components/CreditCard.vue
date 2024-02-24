<template>
  <div
    class="flex flex-col justify-between credit-content p-7 space-y-3 md:space-y-0 md:p-8"
  >
    <p class="text-xl md:text-3xl font-PretendardBold">{{ price }} 원</p>
    <div>
      <p class="text-sm md:text-lg text-gray-500">
        총 {{ count }}건 발송가능합니다
      </p>
      <p class="text-sm md:text-lg text-gray-500">
        1건당 15원에 결제가능합니다
      </p>
    </div>
    <div class="flex justify-between">
      <p class="md:text-2xl font-PretendardSemiBold">{{ credit }} 크레딧</p>
      <div
        class="text-sm md:text-base flex justify-center items-center font-PretendardSemiBold w-14 md:w-16 md:h-8 rounded-2xl bg-lightBlue text-darkPurple"
      >
        + 10%
      </div>
    </div>

    <div class="p-4 bg-lightGray2 h-20">
      <div class="flex justify-between w-full">
        <div>기본 크레딧</div>
        <div>{{ basic }}</div>
      </div>
      <div class="flex justify-between w-full">
        <div>추가 크레딧</div>
        <div>+ {{ add }}</div>
      </div>
    </div>
    <button
      class="w-full h-10 md:h-16 bg-buttonPurple2 rounded-lg my-2 md:text-xl text-white"
    >
      구매하기
    </button>
  </div>
</template>
<script>
export default {
  props: {
    price: {
      type: String,
    },
    count: {
      type: String,
    },
    credit: {
      type: String,
    },
    basic: {
      type: String,
    },
    add: {
      type: String,
    },
  },
};
</script>
<style>
.credit-content {
  width: 90%;
  height: 70%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 10px #00000008;
  border-radius: 8px;
  opacity: 1;
}
/* 모바일 반응형 */
@media (min-width: 768px) {
  .credit-content {
    width: 347px;
    height: 459px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 10px #00000008;
    border-radius: 8px;
    opacity: 1;
  }
}
</style>
