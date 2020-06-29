import Cloudinary, { CldImage, CldTransformation } from 'cloudinary-vue'
import Vue from 'vue'

Vue.use(Cloudinary, {
  configuration: {
    cloudName: 'mayashavin',
    secure: true
  },
  components: [CldImage, CldTransformation]
})
