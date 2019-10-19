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
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'GUDE LAUNE LEUDE - HIER IST DAS NEUE SVENPANEL SOUNDBOARD.' },
      // OpenGraph data (Most widely used)
      { property: 'og:title', content: 'TheShrine - SVENPANEL SOUNDBOARD' },
      { property: 'og:site_name', content: 'TheShrine v3' },
      // The list of types is available here: http://ogp.me/#types
      { property: 'og:type', content: 'website' },
      // Should the the same as your canonical link, see below.
      { property: 'og:url', content: 'https://kidzki.github.io/theshrine_v3' },
      { property: 'og:image', content: 'https://kidzki.github.io/theshrine_v3/og_image.jpg' },
      // Often the same as your meta description, but not always.
      { property: 'og:description', content: 'GUDE LAUNE LEUDE - HIER IST DAS NEUE SVENPANEL SOUNDBOARD' },

      // Twitter card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: 'https://kidzki.github.io/theshrine_v3/my-special-page' },
      { name: 'twitter:title', content: 'TheShrine - SVENPANEL SOUNDBOARD' },
      { name: 'twitter:description', content: 'GUDE LAUNE LEUDE - HIER IST DAS NEUE SVENPANEL SOUNDBOARD' },
      // Your twitter handle, if you have one.
      { name: 'twitter:creator', content: '@kidzki' },
      { name: 'twitter:image:src', content: 'https://kidzki.github.io/theshrine_v3/og_image.jpg' },

      // Google / Schema.org markup:
      { itemprop: 'name', content: 'TheShrine - SVENPANEL SOUNDBOARD' },
      { itemprop: 'description', content: 'GUDE LAUNE LEUDE - HIER IST DAS NEUE SVENPANEL SOUNDBOARD' },
      { itemprop: 'image', content: 'https://kidzki.github.io/theshrine_v3/og_image.jpg' },
    ],
  },
};
</script>

<style lang="scss">
@import 'scss/main.scss';
</style>
