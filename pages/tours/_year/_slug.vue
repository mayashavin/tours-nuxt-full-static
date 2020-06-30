<template>
  <tour :tour="page" />
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
    const id = params.slug || ''
    const year = params.year || ''

    const page = await $content(`tours/${year}/${id}`)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: 'Page not found', err })
      })

    return { page }
  }
}
</script>
