<template>
  <div>
    <div
      class="text-left fixed xl:w-3/4 lg:w-3/4 md:w-3/4 mx-auto rounded-lg position bg-gray-600 z-20 text-white border border-lightMountain"
      :style="contentStyle"
      v-if="contentReceived || getContentStarted"
    >
      <div v-if="contentReceived" class="p-8 pt-6 relative h-full">
        <div class="absolute top-0 right-0 flex mt-2">
          <save-icon @click="save()" class="cursor-pointer"></save-icon>
          <x-circle-icon
            @click="setContentReceived(false)"
            class="cursor-pointer mx-4"
          ></x-circle-icon>
        </div>
        <div
          class="text-xs bg-gray-800 opacity-75 border border-lightMountain inline-block px-2 py-1 rounded mb-4"
        >
          <info-icon size="1.5x" class="inline-block mr-2"></info-icon> Mark the
          sentences wich should be kept for your extract!
        </div>

        <div
          class="bg-darkMountain content-shadow p-6 rounded overflow-auto"
          style="max-height: 95%;"
        >
          <div
            @mouseenter="hideImageInfo()"
            @mouseleave="addImageInfo()"
            class="inline-block w-64 h-40 relative mx-auto float-right rounded"
          >
            <p
              v-if="showImageInfo"
              class="absolute top-0 left-0 z-10 w-full text-xs bg-gray-800 opacity-75 border-b-r-l bg-black border-lightMountain"
            >
              <info-icon size="1.5x" class="inline-block mr-2"></info-icon>
              Choose an image!
            </p>
            <arrow-left-circle-icon
              v-if="!showImageInfo"
              @click="chooseImage(-1)"
              class="button-shadow opacity-75 hover:opacity-100 cursor-pointer absolute z-20 text-black bottom-0 left-0 mb-10"
            ></arrow-left-circle-icon>
            <arrow-right-circle-icon
              v-if="!showImageInfo"
              @click="chooseImage(1)"
              class="button-shadow opacity-75 hover:opacity-100 cursor-pointer absolute z-20 text-black bottom-0 right-0 mb-10"
            ></arrow-right-circle-icon>
            <img
              :src="selectedImage"
              class="mx-auto max-h-full max-w-full"
              alt=""
            />
          </div>
          <div v-for="(el, i) in content" :key="i">
            <h1 class="text-2xl font-bold mb-2" v-if="el.type === 'maintitle'">
              <input type="checkbox" :value="el" v-model="stayedArray" />
              {{ el.text }}
            </h1>
            <h2
              v-else-if="el.type === 'title'"
              class="text-base font-bold my-1"
            >
              <input type="checkbox" :value="el" v-model="stayedArray" />
              {{ el.text }}
            </h2>
            <div v-else class="text-sm">
              <input type="checkbox" :value="el" v-model="stayedArray" />
              {{ el.text }}
            </div>
          </div>
        </div>
      </div>
      <div v-if="getContentStarted" class="py-auto">
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { set, keys, get } from 'idb-keyval'
import {
  InfoIcon,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  SaveIcon,
  XCircleIcon
} from 'vue-feather-icons'
export default {
  name: 'Content',
  components: {
    InfoIcon,
    ArrowLeftCircleIcon,
    ArrowRightCircleIcon,
    SaveIcon,
    XCircleIcon
  },
  data () {
    return {
      stayedArray: [],
      stayedImageEl: 0,
      showImageInfo: true
    }
  },
  watch: {
    contentReceived () {
      if (this.contentReceived) {
        this.stayedArray = this.content
      }
    }
  },
  computed: {
    ...mapState({
      content: state => state.content[0],
      images: state => state.content[1],
      contentReceived: state => state.contentReceived,
      getContentStarted: state => state.getContentStarted,
      smartStore: state => state.smartStore
    }),
    contentStyle () {
      let style = { opacity: '.5' }
      if (this.contentReceived) {
        style = { opacity: '1' }
      }
      return style
    },
    selectedImage () {
      let i = this.stayedImageEl
      return this.images[i].src
    }
  },
  methods: {
    ...mapMutations(['setContentReceived']),
    hideImageInfo () {
      this.showImageInfo = false
    },
    addImageInfo () {
      this.showImageInfo = true
    },
    chooseImage (n) {
      this.stayedImageEl = Number(this.stayedImageEl) + Number(n)
      if (this.stayedImageEl < 0) {
        this.stayedImageEl = this.images.length - 1
      }
      if (this.stayedImageEl > this.images.length - 1) {
        this.stayedImageEl = 0
      }
    },
    async save () {
      console.log(this.stayedArray)
      set(new Date().toUTCString(), { text: this.stayedArray, image: this.images[this.stayedImageEl] }, this.smartStore)
      const extractionArray = []
      const smartKeys = await keys(this.smartStore)
      for (let x of smartKeys) {
        extractionArray.push(await get(x, this.smartStore))
      }
      this.$store.commit('setExtracts', extractionArray)
      this.setContentReceived(false)
    }
  }
}
</script>

<style>
.position {
  left: 0%;
  top: 8%;
  height: 85%;
}
.button-shadow {
  -webkit-box-shadow: 0px 0px 3px 3px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 0px 3px 3px rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 3px 3px rgba(255, 255, 255, 1);
  @apply rounded-full bg-white;
}
.content-shadow {
  -webkit-box-shadow: 2px 11px 33px 27px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 11px 33px 27px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 11px 33px 27px rgba(0, 0, 0, 0.75);
}
@media (min-width: 768px) {
  .position {
    left: 10%;
  }
}

/* Large (lg) */
@media (min-width: 1024px) {
  .position {
    left: 10%;
  }
}

/* Extra Large (xl) */
@media (min-width: 1280px) {
  .position {
    left: 10%;
  }
}
</style>
