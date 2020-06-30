<template>
  <div class="row flex w-100 justify-between">
    <div>
      <div class="font-semibold capitalize text-2xl mb-2">
        {{ title }}
      </div>
      <p class="text-gray-700 capitalize mb-4">
        {{ description }}
      </p>
      <p class="my-2">{{ author }}</p>
      <div class="text-gray-700">
        <span>{{ date }}</span> ·
        <span>{{ readingTime }}</span>
      </div>
    </div>
    <cld-image
      :public-id="img"
      :alt="title"
      class="mb-2 ml-5 flex-shrink-0"
      crop="fill"
      width="150"
      height="150"
      quality="auto"
      fetch-format="auto"
    />
  </div>
</template>
<script>
import articleItem from '@/mixins/articleItem'

export default {
  mixins: [articleItem]
}
</script>
