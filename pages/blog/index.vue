<template>
  <div>
    <nuxt-content :document="page">
      <template v-slot:posts>
        <h2>fdjhasfkjdh</h2>
      </template>
    </nuxt-content>
  </div>
</template>
<script>
export default {
  name: 'Blog',
  async asyncData({ $content, params, error }) {
    const page = await $content('blog/index')
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: 'Page not found', err })
      })

    return {
      page
    }
  }
}
</script>
