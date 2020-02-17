<template>
  <div
    class="bg-lightMountain text-white text-sm inline-block xl:w-1/3 lg:w-1/3 md:w-1/3 border border-white rounded"
  >
    <ul class="text-left">
        <li @click="toRead()">
          <book-open-icon class="litext" size="1.5x"></book-open-icon>
          Read
        </li>
      <li @click="editItem()" >
        <edit-icon class="litext" size="1.5x"></edit-icon>
        Edit
      </li>
      <li @click="deleteContent()">
        <trash-2-icon class="litext" size="1.5x"></trash-2-icon>
        Delete
      </li>
    </ul>
  </div>
</template>

<script>
import { BookOpenIcon, EditIcon, Trash2Icon } from 'vue-feather-icons'
import { del, get } from 'idb-keyval'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'WantToCheckMenu',
  props: ['payload'],
  components: {
    BookOpenIcon,
    EditIcon,
    Trash2Icon
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      smartStore: state => state.smartStore,
      modalInput: state => state.modalInput
    }),
    toModal () {
      return {
        title: 'Confirm',
        text: 'Do you want to delete this extract?',
        type: 'decision',
        uuid: this.payload.uuid,
        smartStore: this.smartStore,
        script: function (uuid, store) {
          console.log('hello there!!')
          if (this.type === 'decision') {
            del(uuid, store)
          } else {

          }
        }
      }
    }
  },
  methods: {
    ...mapMutations(['setModalInput', 'setGetModal', 'setContent', 'setGetContentStarted', 'setContentReceived']),
    toRead () {
      this.$router.push({ path: '/read', query: { contentId: this.payload.uuid } })
    },
    deleteContent () {
      this.setModalInput(this.toModal)
      this.setGetModal(true)
    },
    async editItem () {
      console.log('HAHOOO')
      const content = await get(this.payload.uuid, this.smartStore)
      this.setContent({ elements: content.text, images: [content.images], selected: false, origin: content.origin, statistics: content.statistics })
      this.setGetContentStarted(false)
      this.setContentReceived(true)
    }
  }
}
</script>

<style>
li {
  @apply p-2;
}
.litext {
  display: inline-block;
  @apply mr-4;
}
</style>
