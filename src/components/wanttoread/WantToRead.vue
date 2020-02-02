<template>
  <div>
    <div class="py-10 rounded-lg cursor-pointer">
      <h1 class="mb-4">I WANT to Read some news!!</h1>
      <p class="my-4">Paste the link here:</p>
      <input type="text" class="hovershadow" v-model="linkText" />
      <chevrons-right-icon
        class="inline-block ml-1 cursor-pointer"
        size="1.5x"
        @click="getLinkContent(linkText)"
      />
    </div>

  </div>
</template>

<script>
import { ChevronsRightIcon } from 'vue-feather-icons'
import { mapActions } from 'vuex'

export default {
  name: 'WantToRead',
  components: {
    ChevronsRightIcon
  },
  data () {
    return {
      linkText: ''
    }
  },
  computed: {

  },
  methods: {
    ...mapActions(['getLinkContent'])
  }
}
</script>

<style>
.hovershadow:hover {
  box-shadow: 0px 18px 32px 20px rgba(0, 0, 0, 0.75);
}
.hovershadow:focus {
  box-shadow: 0px 18px 32px 20px rgba(0, 0, 0, 0.75);
}

.loader,
.loader:before,
.loader:after {
  background: #ffffff;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: #ffffff;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: "";
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
</style>
