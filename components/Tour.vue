<template>
  <article class="mx-2 flex">
    <div class="my-3 w-3/4 mr-3">
      <h1
        class="text-left text-4xl font-semibold bg-tfh text-white px-4 mt-1 mb-4"
      >
        {{ tour.title }}
      </h1>
      <share-btns
        :title="tour.title"
        :description="tour.description"
        class="justify-end"
      />
      <div class="flex justify-end">
        <button
          class="rounded flex mt-3 text-white justify-center items-center bg-tfh px-5 py-3 uppercase shadow"
        >
          book now
        </button>
      </div>
      <div class="mt-4">
        <p class="italic">{{ tour.description }}</p>
        <nuxt-content :document="tour" class="my-4" />
      </div>
    </div>
    <cld-image
      v-if="tour.img"
      :public-id="tour.img"
      :alt="tour.title"
      responsive
      loading="lazy"
      class="my-4 z-1"
    />
  </article>
</template>
<script>
export default {
  props: {
    tour: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
