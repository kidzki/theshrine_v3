<script>
export default {
  name: "audioHandlerMixin",
  methods: {
    playSound(sound) {
      if (sound) {
        let audio = new Audio(sound);
        audio.play();
      }
    }
  }
};
</script>