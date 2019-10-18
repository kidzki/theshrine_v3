<template>
  <div class="fluid-container">
    <div class="row">
      <div class="col-12">
        <div class="soundboard">
          <h1>SvenPanel 3.0</h1>
          <player v-for="(sound, index) in sounds" :key="index" :soundfile="sound"/>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Player from '@/components/player.vue';

export default {
  name: 'home',
  data() {
    return {
      sounds: [],
    };
  },
  components: {
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
