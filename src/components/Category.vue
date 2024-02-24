<template>
  <div class="flex flex-1 items-center justify-center bg-white w-full py-2">
    <div class="category space-x-3 md:space-x-5">
      <div
        class="h-10 md:h-14 py-1 px-3 md:py-4 md:px-8 flex justify-center items-center bg-skyBlue text-buttonPurple rounded-xl text-xs md:text-xl font-PretendardSemiBold cursor-pointer"
      >
        {{ selectedCategory }}
      </div>
      <div
        class="h-10 md:h-14 py-1 px-3 md:py-4 md:px-8 flex justify-center items-center text-xs md:text-xl text-gray-500 rounded-xl cursor-pointer hover:bg-skyBlue hover:text-buttonPurple hover:font-PretendardSemiBold"
        v-for="category in categoryList"
        :key="category"
      >
        {{ category }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    selectedCategory: {
      type: String,
    },
    categoryList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.category {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (min-width: 768px) {
  .category {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 1223px;
    height: 80px;
    opacity: 0.91;
  }
}
</style>
