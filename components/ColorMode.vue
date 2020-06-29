<template>
  <div class="flex ml-2">
    <button
      v-for="color of colors"
      :key="color.name"
      @click="$colorMode.preference = color.name"
    >
      <icon v-bind="color.icon" class="m-2" />
    </button>
  </div>
</template>
<script>
import { system, light, dark } from '@/assets/icons'

export default {
  data() {
    return {
      colors: [
        {
          name: 'system',
          icon: system
        },
        {
          name: 'light',
          icon: light
        },
        {
          name: 'dark',
          icon: dark
        }
      ]
    }
  },
  methods: {
    getClasses(color) {
      if (this.$colorMode.unknown) {
        return {}
      }

      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    }
  }
}
</script>
