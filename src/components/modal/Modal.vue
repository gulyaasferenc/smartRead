<template>
  <div class="smart-modal text-center content-shadow">
    <div class="my-4">
      <h1 class="text-2xl font-bold">{{ modalInput.title }}</h1>
      <p class="my-6">{{ modalInput.text }}</p>
      <div class="mt-10">
        <div class="flex justify-center">
          <button type="button" @click="deleteItem()">
            {{ modalInput.type === "decision" ? "YES" : "OK" }}
          </button>
          <button type="button" @click="setGetModal(false)" v-if="modalInput.type === 'decision'">NO</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Modal',
  props: [],
  data () {
    return {}
  },
  computed: {
    ...mapState({
      modalInput: state => state.modalInput
    })
  },
  created () {
    console.log(this.modalInput)
  },
  methods: {
    ...mapMutations(['setGetModal']),
    ...mapActions(['getIdbContent']),
    deleteItem () {
      this.modalInput.script(this.modalInput.uuid, this.modalInput.smartStore)
      this.getIdbContent()
      this.setGetModal(false)
    }

  }
}
</script>

<style>
button {
  @apply px-2 mx-2 border border-white rounded-lg;
}
button:hover {
  -webkit-box-shadow: 2px 22px 10px 10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.75);
}
.smart-modal {
  width: 300px;
  height: 200px;
  position: fixed;
  z-index: 100;
  top: 30%;
  left: 50%;
  margin-left: -150px;
  @apply bg-gray-800 p-4 text-white rounded border border-white;
}
</style>
