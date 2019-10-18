<script>
export default {
  name: 'audioHandlerMixin',
  methods: {
    playSound(filename) {
      if (filename) {
        /* eslint-disable-next-line */
        const audio = new Audio(require('@/assets/sounds/' + filename));
        console.log(audio);
        console.log(filename);
        audio.type = 'audio/mpeg';
        audio.play();
      }
    },
  },
};
</script>
