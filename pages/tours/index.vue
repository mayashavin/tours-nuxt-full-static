<template>
  <div class="mx-1 lg:mx-0 md:mx-3">
    <div>
      <h1 id="tours" class="font-semibold text-4xl my-4">
        Tours
      </h1>
      <span>
        We offer the following virtual tours to anyone who loves to travel but
        are concerned about health during PANDEMIC. Enjoy!
      </span>
    </div>
    <div class="flex flex-wrap justify-evenly md:justify-start mt-3">
      <nuxt-link
        v-for="(tour, index) in tours"
        :key="index"
        :to="tour.path"
        class="outline-none no-underline cursor-pointer md:mr-4"
      >
        <card v-bind="tour" class="max-w-xs" />
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tours',
  async asyncData({ $content, params, error }) {
    const tours = await $content('tours', { deep: true })
      .only(['title', 'description', 'img', 'slug', 'path'])
      .sortBy('title')
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: 'Page not found', err })
      })

    return {
      tours
    }
  }
}
</script>
