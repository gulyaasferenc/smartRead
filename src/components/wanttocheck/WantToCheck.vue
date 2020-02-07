<template>
  <div class="p-4 h-full" :key="render">
    <h2 class="py-2 mb-2 text-white text-xl">My Saved Readings</h2>
    <div class="max-list-height overflow-auto">
      <div v-for="(extract, i) of extracts" :key="i">
        <div
          class="text-white text-sm my-2 p-2 block border border-white opacity-50 rounded hover:opacity-100 focus:opacity-100 focus:outline-none flex justify-between"
          tabindex="-1"
          @focusout="noSelected()"
          :class="{ selected: extracts[i].selected }"
        >
          <p class="w-11/12 whitespace-no-wrap truncate overflow-hidden">
            {{ extract.text[0].text }}
          </p>
          <more-vertical-icon
            @click="select(i)"
            class="cursor-pointer flex-initial z-10"
            size="1.5x"
          ></more-vertical-icon>
          <check-menu
            v-if="extract.selected"
            :payload="selectedExtract"
            class="absolute bg-gray-800 overflow-visible top-0 right-0 mr-8 z-20"
          ></check-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { MoreVerticalIcon } from 'vue-feather-icons'
import CheckMenu from '@/components/navigation/WantToCheckMenu'
export default {
  name: 'WantToCheck',
  components: {
    MoreVerticalIcon,
    CheckMenu
  },
  data () {
    return {
      render: 0,
      selectedExtract: null
    }
  },
  computed: {
    ...mapState({
      extracts: state => state.extracts
    })
  },
  methods: {
    select (i) {
      this.extracts.forEach(x => {
        x.selected = false
      })
      this.extracts[i].selected = true
      this.selectedExtract = this.extracts[i]
    },
    noSelected () {
      this.extracts.forEach(x => {
        x.selected = false
      })
    }
  }
}
</script>

<style>
.selected {
  position: relative;
}
.max-list-height {
  max-height: 70vh;
  height: 60vh;
}
</style>
