
const { createApp } = PetiteVue

/*
  Tag must include @mounted="mounted($el)" in the HTML. The $el parameter is required.

  E.g:
    <ul
      class="w-[72em] overflow-auto flex text-center text-even-smaller sm:text-bit-smaller whitespace-nowrap space-x-2 sm:space-x-3.5 text-white my-6 px-4 sm:px-0 mx-auto"

      v-scope="Carousel({ count: 0 })"
      @mounted="mounted($el)"
    >

  For smooth scrollng: Add: class="scroll-smooth"
*/

function Carousel(props) {
  return {
    count: props.count,
    showRightHandle: true,
    showLeftHandle: true,
    
    mounted($el) {
      this.el = $el

      if (props.removePaddingBottom) {
        requestAnimationFrame(() => this.removePaddingBottom())
        setTimeout(() => this.removePaddingBottom(), 100)
        window.addEventListener("resize", this.removePaddingBottom, {passive: true})
      }
      this.toggleHandles()
      
      this.saveWidth()
      window.addEventListener("scroll", this.saveWidth, {passive: true})
    },
    unmounted() {
      window.removeEventListener("scroll", this.saveWidth)

      if (props.removePaddingBottom) {
        window.removeEventListener("resize", this.removePaddingBottom)
      }

      if (this.requestId) cancelAnimationFrame(this.requestId)
    },

    removePaddingBottom() {
      if (!this.el) return;
      this.el.style.paddingBottom = this.el.offsetHeight - this.el.clientHeight + "px"
    },
    saveWidth() {
      if (this.el) {
        this.width = this.el.clientWidth
      }
    },

    right() {
      this.el.scrollLeft = this.el.scrollLeft + this.width
    },
    left() {
      this.el.scrollLeft = this.el.scrollLeft - this.width
    },
    toggleHandles() {
      const checkHandles = () => {
        if (this.el.scrollLeft === 0) {
          this.showLeftHandle = false
        } else {
          this.showLeftHandle = true
        }
        
        if ((this.el.scrollLeft + this.el.clientWidth) === this.el.scrollWidth) {
          this.showRightHandle = false
        } else {
          this.showRightHandle = true
        }

        this.requestId = requestAnimationFrame(checkHandles)
      }
      
      this.requestId = requestAnimationFrame(checkHandles)
    },
  }
}

createApp({ Carousel }).mount()

