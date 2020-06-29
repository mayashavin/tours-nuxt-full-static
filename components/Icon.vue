<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="viewBox"
    preserveAspectRatio="xMidYMid"
    class="fill-current"
  >
    <path :d="path" />
  </svg>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: '20px'
    },
    path: {
      type: [String, Array],
      required: true
    },
    viewBox: {
      type: String,
      default: '0 0 24 24'
    }
  }
}
</script>
