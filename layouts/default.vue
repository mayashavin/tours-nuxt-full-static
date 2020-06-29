<template>
  <div class="max-w-6xl mx-auto">
    <header class="mx-10">
      <div class="flex justify-between py-5 items-center">
        <cld-image
          public-id="nuxt_demo/tfh_logo_main"
          width="120"
          crop="scale"
          quality="auto"
          fetch-format="auto"
        />
        <div class="flex items-center">
          <icon v-bind="search" size="18px" class="text-gray-600 m-3" />
          <cld-image
            alt="User's avatar"
            public-id="mayashavin/Maya_new"
            width="40"
            height="40"
            radius="max"
            crop="thumb"
            quality="auto"
            fetch-format="auto"
          />
          <color-mode />
        </div>
      </div>
      <navigation />
    </header>
    <nuxt />
  </div>
</template>
<script>
/* eslint-disable vue/attribute-hyphenation */
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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
