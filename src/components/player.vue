<template>
  <div>
    <label>
      <button
        class="btn btn-primary btn-sm"
        @click.prevent="playSound(soundfile)"
      >
        <span class="fa fa-play-circle-o">{{ soundfile }}</span>
      </button>
      {{ soundfile }}
    </label>
  </div>
</template>

<script>
import audioHandler from '@/mixins/audioHandler.mixin.vue';

export default {
  name: 'playerComponent',
  mixins: [audioHandler],
  props: {
    soundfile: { type: String, required: true },
  },
};
</script>
