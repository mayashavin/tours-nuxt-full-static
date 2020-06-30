<template>
  <post v-bind="page" :document="page" />
</template>
<script>
export default {
  head() {
    return {
      title: this.page.title,
      description: this.page.description
    }
  },
  async asyncData({ $content, params, error }) {
    const id = params.id || 'index'
    const page = await $content(`blog/posts/${id}`)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: 'Page not found', err })
      })

    return { page }
  }
}
</script>
