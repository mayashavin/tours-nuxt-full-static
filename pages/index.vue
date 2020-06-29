<template>
  <section class="container">
    <div class="pb-5 border-b mb-5">
      <div class="relative">
        <cld-image
          public-id="nuxt_demo/Banner_demo"
          quality="auto"
          responsive
          fetch-format="auto"
        />
        <div
          class="absolute bottom-0 right-0 mr-5 md:mr-10 md:mb-2 md:m-3 lg:mr-16 lg:mb-6 flex"
        >
          <button
            @click="viewAbout"
            class="rounded flex justify-center items-center bg-gray-100 px-3 md:px-5 py-3 uppercase shadow"
          >
            <icon v-bind="atlas" size="24px" class="mr-3" />
            About TFH
          </button>
          <button
            @click="viewTours"
            class="rounded flex text-white justify-center items-center bg-tfh px-5 py-3 ml-3 uppercase shadow"
          >
            <icon v-bind="ufo" size="24px" class="mr-3" />
            View Tours
          </button>
        </div>
      </div>
    </div>
    <div class="highlights pb-5 border-b mx-1 lg:mx-0 md:mx-3">
      <h4 class="uppercase font-semibold text-gray-700 mb-5">
        Highlights
      </h4>
      <div class="flex flex-wrap justify-evenly md:justify-start">
        <nuxt-link
          v-for="(post, index) in pages"
          :key="index"
          :to="`/blog/${post.slug}`"
          class="outline-none no-underline cursor-pointer md:mr-4"
        >
          <card v-bind="post" class="max-w-xs" />
        </nuxt-link>
      </div>
    </div>
    <div class="blogs-list py-5 mx-1 lg:mx-0 md:mx-3">
      <h4 class="uppercase text-gray-700 font-semibold">
        Published
      </h4>
      <div>
        <nuxt-link
          v-for="(post, index) in pages"
          :key="index"
          :to="`/blog/${post.slug}`"
          class="outline-none no-underline cursor-pointer m-2"
        >
          <row v-bind="post" class="md:max-w-3xl" />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { ufo, atlas } from '@/assets/icons'

export default {
  data() {
    return {
      ufo,
      atlas
    }
  },
  async asyncData({ $content, params, error }) {
    const pages = await $content('blog/posts')
      .only(['title', 'description', 'img', 'slug', 'updatedAt', 'toc'])
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: 'Page not found', err })
      })

    return {
      pages
    }
  },
  methods: {
    viewPost(slug) {
      this.$router.push(`/blog/${slug}`)
    },
    viewTours() {
      this.$router.push('/tours')
    },
    viewAbout() {
      this.$router.push('/about')
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */
.container {
  @apply mx-auto;
}

.title {
  font-family: 'Lato', 'Quicksand', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
