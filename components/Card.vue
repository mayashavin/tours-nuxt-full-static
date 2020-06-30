<template>
  <div class="card">
    <cld-image
      :public-id="img"
      :alt="title"
      class="mb-2"
      crop="fill"
      width="320"
      height="160"
      quality="auto"
      fetch-format="auto"
    />
    <div>
      <div class="font-semibold capitalize text-2xl mb-2">
        {{ title }}
      </div>
      <p class="text-gray-600 capitalize mb-4">
        {{ description }}
      </p>
      <p v-if="author" class="my-2">{{ author }}</p>
      <div v-if="date" class="text-gray-600">
        <span>{{ date }}</span> ·
        <span>{{ readingTime }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import articleItem from '@/mixins/articleItem'

export default {
  mixins: [articleItem]
}
</script>
