<template>
  <div>
    <div
      class="bg-darkMountain content-shadow p-6 rounded overflow-auto my-8 xl:w-4/5 lg:w-4/5 md:w-4/5 mx-auto text-white text-left relative"
      style="max-height: 95%;"
    >
      <arrow-left-icon
        size="1.8x"
        class="float-left absolute top-0 left-0 ml-2 mt-2 cursor-pointer"
        @click="back()"
      ></arrow-left-icon>
      <div class="float-right maxiw h-auto p-4 mt-8">
        <img class="mx-auto" :src="img" alt="" />
      </div>
      <div class="mt-4">
        <div v-for="(text, i) of content.text" :key="i">
          <h1
            v-if="text.type === 'maintitle'"
            class="text-xl text-center font-bold mb-4"
          >
            {{ text.text }}
          </h1>
          <p v-else-if="text.type === 'title'" class="text-lg my-1 font-bold">
            {{ text.text }}
          </p>
          <p class="text-sm" v-else>{{ text.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from 'idb-keyval'
import { mapState } from 'vuex'
import { ArrowLeftIcon } from 'vue-feather-icons'

export default {
  name: 'Read',
  components: {
    ArrowLeftIcon
  },
  data () {
    return {
      content: null,
      img: null
    }
  },
  async created () {
    this.content = await get(this.$route.query.contentId, this.smartStore)
    this.img = this.content.image.src
  },
  computed: {
    ...mapState({
      smartStore: state => state.smartStore
    })
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.maxiw {
  max-width: 50%;
}
</style>
