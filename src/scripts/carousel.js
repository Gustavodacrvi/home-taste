
import { createApp } from 'https://unpkg.com/petite-vue?module'

function Carousel(props) {
  return {
    count: props.initialCount,
    inc() {
      this.count++
    },
    mounted() {
      console.log("I'm mounted!")
    },
  }
}

createApp({ Carousel }).mount("#main")

