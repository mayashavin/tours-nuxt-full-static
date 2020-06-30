<template>
  <div class="max-w-6xl mx-auto h-screen flex flex-col">
    <header class="mx-10">
      <div class="flex justify-between py-5 items-center">
        <cld-image
          public-id="nuxt_demo/tfh_logo_main"
          width="120"
          quality="auto"
          fetch-format="auto"
        />
        <div class="flex items-center">
          <icon v-bind="search" size="18px" class="text-gray-600 m-3" />
          <!-- <color-mode class="text-gray-600" /> -->
        </div>
      </div>
      <navigation />
    </header>
    <nuxt class="flex-1" />
    <footer class="mx-auto text-center py-2">
      <p>
        Design with ❤️ from
        <a
          href="http://mayashavin.com"
          target="_blank"
          rel="noopener noreferrer"
          class="underline text-tfh"
          >Maya Shavin</a
        >
      </p>
    </footer>
  </div>
</template>
<script>
import { search } from '@/assets/icons'

export default {
  data() {
    return {
      search
    }
  }
}
</script>
<style>
html {
  font-family: 'Lato', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.nuxt-content h1 {
  @apply text-4xl font-semibold my-4;
}

.nuxt-content h2 {
  @apply text-3xl font-semibold my-2;
}

.nuxt-content a {
  @apply text-tfh underline;
}

.nuxt-content p {
  @apply pb-2;
}
</style>
