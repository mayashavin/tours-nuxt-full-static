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
      default: 'Maya Shavin'
    },
    updatedAt: {
      type: String,
      required: true
    }
  },
  computed: {
    date() {
      const formatted = formatTime(new Date(this.updatedAt))

      return `${formatted.month} ${formatted.day}, ${formatted.year}`
    }
  }
}
