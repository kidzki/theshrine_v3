<template>
  <div>
    <label>
      <button
        class="btn btn-primary btn-sm"
        @click.prevent="playSound('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"
      >
        <span class="fa fa-play-circle-o">fal fa-truck-monster</span>
      </button>
      Play Air Plane Ding
    </label>
  </div>
</template>

<script>
import audioHandler from '@/mixins/audioHandler.mixin.vue';

export default {
  name: 'playerComponent',
  mixins: [audioHandler],
};
</script>
