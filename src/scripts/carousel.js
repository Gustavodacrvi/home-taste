
const { createApp } = PetiteVue

/*
  Tag must include @mounted="mounted($el)" in the HTML. The $el parameter is required.

  E.g:
    <ul
      class="w-[72em] overflow-auto flex text-center text-even-smaller sm:text-bit-smaller whitespace-nowrap space-x-2 sm:space-x-3.5 text-white my-6 px-4 sm:px-0 mx-auto"

      v-scope="Carousel({ count: 0 })"
      @mounted="mounted($el)"
      @unmounted="unmounted"
    >

  For smooth scrollng: Add: class="scroll-smooth"
*/

document.querySelectorAll(".vue-carousel").forEach(el => {
  createApp({
    Carousel(props) {
      return {
        count: props.count,
        showRightHandle: true,
        showLeftHandle: true,
        numberOfDots: 0,
        activeOne: null,
        
        mounted($el) {
          this.el = $el
    
          if (props.removePaddingBottom) {
            this.removePaddingBottom()
            window.addEventListener("resize", this.removePaddingBottom, {passive: true})
          }
          this.toggleHandles()
          this.calculateNumberOfDots
          
          this.saveWidth()
          window.addEventListener("scroll", this.saveWidth, {passive: true})
        },
        unmounted() {
          window.removeEventListener("scroll", this.saveWidth)
    
          if (props.removePaddingBottom) {
            window.removeEventListener("resize", this.removePaddingBottom)
          }
    
          if (this.requestId) clearInterval(this.requestId)
        },
    
        calculateNumberOfDots() {
          this.numberOfDots = Math.floor(this.el.scrollWidth / this.el.clientWidth)
        },
        calculateIsActive() {
          this.activeOne = Math.floor(this.el.scrollLeft / this.el.clientWidth)
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
        goTo(index) {
          if (index === 0) {
            this.el.scrollLeft = 0
          } else {
            this.el.scrollLeft = (this.el.clientWidth * index) + 40
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
            this.calculateNumberOfDots()
            this.calculateIsActive()
            
            if (this.el.scrollLeft === 0) {
              this.showLeftHandle = false
            } else {
              this.showLeftHandle = true
            }
            
            if ((this.el.scrollLeft + this.el.clientWidth) >= this.el.scrollWidth) {
              this.showRightHandle = false
            } else {
              this.showRightHandle = true
            }
    
            this.requestId = setInterval(checkHandles, 500)
          }
          
          this.requestId = setInterval(checkHandles, 500)
        },
      }
    }
  }).mount(el)
})
