<template>
  <div class="open-page h-full">
    <div class="bg-gray-600 text-center h-full">
      <div class="text-white text-4xl py-4">
        <h1>Read it in a few mins!</h1>
      </div>
      <div class="md:flex lg:flex xl:flex mx-2">
        <div class="mycolumn xl:w-1/3 lg:w-1/3 md:w-1/3 ">
          <want-to-read class=""></want-to-read>
        </div>
        <div class="mycolumn xl:w-1/3 lg:w-1/3 md:w-1/3 ">
          <want-to-check></want-to-check>
        </div>
         <div class="mycolumn xl:w-1/3 lg:w-1/3 md:w-1/3 ">
          Some content
        </div>
      </div>
    </div>
    <Content v-if="getContentStarted || contentReceived" />
    <Modal v-if="getModal" :payload="toModal" />
  </div>
</template>

<script>
import WantToRead from '@/components/wanttoread/WantToRead'
import WantToCheck from '@/components/wanttocheck/WantToCheck'
import Content from '@/components/content/Content'
import Modal from '@/components/modal/Modal'
import { mapState } from 'vuex'
export default {
  name: 'OpenPage',
  components: {
    WantToRead,
    Content,
    WantToCheck,
    Modal
  },
  props: {
    msg: String
  },
  computed: {
    ...mapState({
      getContentStarted: state => state.getContentStarted,
      contentReceived: state => state.contentReceived,
      getModal: state => state.getModal
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .mycolumn {
    min-height: 80vh;
    box-shadow: 0px 10px 32px 5px rgba(0,0,0,1);
    @apply bg-darkMountain mx-2 rounded-lg p-4 my-2
  }
</style>
