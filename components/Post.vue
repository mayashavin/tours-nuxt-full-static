<template>
  <article class="mx-2">
    <div class="my-3">
      <h1
        class="text-left text-4xl font-semibold bg-tfh text-white w-fit px-4 my-4"
      >
        {{ title }}
      </h1>
      <div class="flex justify-between items-center">
        <div class="text-gray-700 mr4">
          <span>{{ date }}</span> ·
          <span>{{ readingTime }}</span>
        </div>
        <share-btns :title="title" :description="description" />
      </div>
    </div>
    <cld-image
      v-if="img"
      :public-id="img"
      :alt="title"
      responsive
      loading="lazy"
      class="my-4 z-1"
    />
    <div>
      <p class="italic">{{ description }}</p>
      <nuxt-content :document="document" class="my-4" />
      <div class="flex items-center justify-end mb-4">
        <share-btns :title="title" :description="description" />
      </div>
    </div>
  </article>
</template>
<script>
import articleItem from '@/mixins/articleItem'

export default {
  mixins: [articleItem],
  props: {
    body: {
      type: [Object, Array, String],
      required: true
    },
    document: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
