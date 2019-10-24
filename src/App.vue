<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  metaInfo: {
    // Children can override the title.
    title: 'TheShrine v3',
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: '%s ← SvenPanel Soundboard',
    meta: [
      { httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' },
      { name: 'application-name', content: 'SVENPANEL - TheShrine' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'GUDE LAUNE LEUDE - HIER IST DAS NEUE SVENPANEL SOUNDBOARD.' },
      // OpenGraph data (Most widely used)
      { property: 'og:title', content: 'SVENPANEL - TheShrine SOUNDBOARD' },
      { property: 'og:site_name', content: 'SVENPANEL - TheShrine v3' },
      // The list of types is available here: http://ogp.me/#types
      { property: 'og:type', content: 'website' },
      // Should the the same as your canonical link, see below.
      { property: 'og:url', content: 'https://kidzki.github.io/theshrine_v3' },
      { property: 'og:image', content: 'https://github.com/kidzki/theshrine_v3/blob/master/src/assets/img/og_image.jpg?raw=true' },
      // Often the same as your meta description, but not always.
      { property: 'og:description', content: 'GUDE LAUNE LEUDE - HIER IST DAS NEUE SVENPANEL SOUNDBOARD' },

      // Twitter card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: 'https://kidzki.github.io/theshrine_v3' },
      { name: 'twitter:title', content: 'SVENPANEL - TheShrine SOUNDBOARD' },
      { name: 'twitter:description', content: 'GUDE LAUNE LEUDE - HIER IST DAS NEUE SVENPANEL SOUNDBOARD' },
      // Your twitter handle, if you have one.
      { name: 'twitter:creator', content: '@kidzki' },
      { name: 'twitter:image', content: 'https://github.com/kidzki/theshrine_v3/blob/master/src/assets/img/og_image.jpg?raw=true' },

      // Google / Schema.org markup:
      { itemprop: 'name', content: 'SVENPANEL - TheShrine SOUNDBOARD' },
      { itemprop: 'description', content: 'GUDE LAUNE LEUDE - HIER IST DAS NEUE SVENPANEL SOUNDBOARD' },
      { itemprop: 'image', content: 'https://github.com/kidzki/theshrine_v3/blob/master/src/assets/img/og_image.jpg?raw=true' },
    ],
  },
};
</script>

<style lang="scss">
@import 'scss/main.scss';
</style>
