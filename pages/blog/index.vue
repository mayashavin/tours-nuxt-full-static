<template>
  <div class="mx-1 lg:mx-0 md:mx-3">
    <nuxt-content :document="page" />
    <div class="blogs-list py-5 mx-1 lg:mx-0 md:mx-3">
      <h4 class="uppercase text-gray-700 font-semibold">
        Latest posts
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
  </div>
</template>
<script>
export default {
  name: 'Blog',
  async asyncData({ $content, params, error }) {
    const pages = await $content('blog', { deep: true })
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: 'Page not found', err })
      })

    const page = pages.find(page => page.slug === 'index')

    return {
      page,
      pages: pages.filter(page => page.slug !== 'index')
    }
  }
}
</script>
