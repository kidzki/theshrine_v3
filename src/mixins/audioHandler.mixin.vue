<script>
export default {
  name: 'audioHandlerMixin',
  methods: {
    playSound(sound) {
      if (sound) {
        const audio = new Audio(sound);
        audio.type = 'audio/mpeg';
        audio.play();
      }
    },
  },
};
</script>
