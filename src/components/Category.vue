<template>
  <div class="flex flex-1 items-center justify-center bg-white w-full py-2">
    <div class="category space-x-5">
      <div
        class="h-14 py-4 px-8 flex justify-center items-center bg-skyBlue text-buttonPurple rounded-xl text-xl font-PretendardSemiBold cursor-pointer"
      >
        {{ selectedCategory }}
      </div>
      <div
        class="h-14 py-4 px-8 flex justify-center items-center text-xl text-gray-500 rounded-xl cursor-pointer hover:bg-skyBlue hover:text-buttonPurple hover:font-PretendardSemiBold"
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
<style></style>
