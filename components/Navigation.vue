<template>
  <nav class="flex mb-5 justify-center" role="navigation">
    <nuxt-link :class="navClass('/')" to="/">
      Home
    </nuxt-link>
    <nuxt-link :class="navClass('/about')" to="/about">
      about
    </nuxt-link>
    <nuxt-link :class="navClass('/tours')" to="/tours">
      Tours
    </nuxt-link>
    <nuxt-link :class="navClass('/blog')" to="/blog">
      blogs
    </nuxt-link>
  </nav>
</template>
<script>
export default {
  computed: {
    currentPath() {
      return this.$route.path
    }
  },
  methods: {
    navClass(name) {
      const isBlog = this.currentPath.startsWith('/blog/')
      const isTours = this.currentPath.startsWith('/tours/')

      return `uppercase no-underline mx-3 ${
        this.currentPath === name ||
        (isBlog && name === '/blog') ||
        (isTours && name === '/tours')
          ? 'text-black font-semibold'
          : 'text-gray-700'
      }`
    }
  }
}
</script>
