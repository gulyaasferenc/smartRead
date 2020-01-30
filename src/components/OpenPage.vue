<template>
  <div class="open-page mt-4 h-full">
    <div class="bg-lightMountain text-center">
      <div class="my-4">
        <h1>What would you like to do?</h1>
      </div>
      <div class="md:flex lg:flex xl:flex mx-2">
        <div class="mycolumn xl:w-1/3 lg:w-1/3 md:w-1/3 ">
          <want-to-read class=""></want-to-read>
        </div>
        <div class="mycolumn xl:w-1/3 lg:w-1/3 md:w-1/3 ">
          Some content
        </div>
         <div class="mycolumn xl:w-1/3 lg:w-1/3 md:w-1/3 ">
          Some content
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WantToRead from '@/components/wanttoread/WantToRead'
export default {
  name: 'OpenPage',
  components: {
    WantToRead
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .mycolumn {
    min-height: 70vh;
    box-shadow: 0px 10px 32px 5px rgba(0,0,0,1);
    @apply bg-greenMountain mx-2 rounded-lg my-10 p-4 opacity-75 cursor-pointer
  }
  .mycolumn:hover {
    @apply opacity-100;
  }
  .mycolumn:active {
    @apply opacity-100;
  }
</style>
