import { formatTime } from '@/helpers/dateTime'

export default {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    updatedAt: {
      type: String,
      default: ''
    },
    readingTime: {
      type: String,
      default: ''
    }
  },
  computed: {
    date() {
      if (!this.updatedAt) return ''

      const formatted = formatTime(new Date(this.updatedAt))

      return `${formatted.month} ${formatted.day}, ${formatted.year}`
    }
  }
}
