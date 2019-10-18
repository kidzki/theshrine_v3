<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <player v-for="(sound, index) in sounds" :key="index" :soundfile="sound"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Player from '@/components/player.vue';

export default {
  name: 'home',
  data() {
    return {
      sounds: [],
    };
  },
  components: {
    HelloWorld,
    Player,
  },
  mounted() {
    this.importAll(require.context('../assets/sounds/', true, /\.mp3$/));
  },
  methods: {
    importAll(data) {
      data.keys().forEach((key) => {
        this.sounds.push(key.split('./')[1]);
      });
    },
  },
};
</script>
