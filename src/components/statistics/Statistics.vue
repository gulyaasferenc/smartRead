<template>
  <div class="text-white p-4 h-full" >
    <h1 class="text-xl py-2 ">Statistics</h1>
    <div ref="width" >
      <canvas ref="canv" class="mx-auto bg-gray-400 rounded" id="daily-canvas" :width="compWidth" :height="compHeight" />
      <canvas class="mx-auto my-2  bg-gray-300 rounded" id="fully-canvas" :width="compWidth" :height="compHeight" />
      <canvas class="mx-auto bg-gray-300 rounded" id="monthly-canvas" :width="compWidth" :height="compHeight" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { dailyGraph } from '@/helpers/canvashelpers'

export default {
  name: 'Statistics',
  data () {
    return {
      compWidth: 300,
      compHeight: 200,
      refWidth: 0,
      render: 0,
      vuectx: null,
      canvasEl: null,
      hardCodedStatistic: [
        {
          savedTime: 5
        },
        {
          savedTime: 8
        },
        {
          savedTime: 10
        },
        {
          savedTime: 2
        },
        {
          savedTime: 3
        },
        {
          savedTime: 3
        },
        {
          savedTime: 4
        },
        {
          savedTime: 2
        },
        {
          savedTime: 10
        },
        {
          savedTime: 3
        }
      ]
    }
  },
  computed: {
    ...mapState({
      statistics: state => state.statistics
    })
  },
  mounted () {
    let canvasEl = document.getElementById('daily-canvas')
    this.compWidth = this.$refs.width.clientWidth
    console.log(this.$refs.width.clientHeight)
    this.compHeight = this.$refs.width.clientHeight / 3
    setTimeout(() => {
      const ctx = canvasEl.getContext('2d')
      this.vuectx = ctx
    }, 200)
    console.log(this.hardCodedStatistic)
  },
  methods: {
    draw () {
      dailyGraph({ vuectx: this.vuectx, height: this.compHeight, width: this.compWidth, statistics: this.hardCodedStatistic })
    }
  },
  watch: {
    refWidth () {
      this.compWidth = this.refWidth
    },
    vuectx () {
      this.draw()
    }
  }
}
</script>

<style>

</style>
