
/*
  You need to bind the mounted, unmounted functions to the target div:

  <div v-if="showing"
    @mounted="mounted($el)"
    @unmounted="unmounted"
  >
  </div>
*/

window.VueComponents = {
  ...window.VueComponents || {},

  TransitionConstructor(props) {
    const property = props.property || "height"
    const durationClass = props.durationClass || "duration-150"

    return {
      showing: props.showing || true,

      attachTransitionEndListener() {
        const removeListener = () => {
          this.el.style[property] = "auto"
          this.el.removeEventListener("transitionend", removeListener)
        }
        this.el.addEventListener("transitionend", removeListener)
      },
      
      mounted($el) {
        this.el = $el
        if (!this.firstMount || this.shouldNotTransition) return this.firstMount = true
        
        const rect = this.el.getBoundingClientRect()
        
        const s = this.el.style
        s[property] = 0
        this.el.classList.remove(durationClass)
        
        requestAnimationFrame(() => {
          s[property] = rect[property] + "px"
          this.el.classList.add(durationClass)
          this.attachTransitionEndListener()
        })

        this.shouldNotTransition = false
      },
      unmounted() {
        !this.justUnmounted && requestAnimationFrame(() => {
          this.showing = true
          this.shouldNotTransition = true
          
          requestAnimationFrame(() => {
            const s = this.el.style
            const rect = this.el.getBoundingClientRect()
  
            s[property] = rect[property] + "px"
            this.el.classList.remove(durationClass)
  
            requestAnimationFrame(() => {
              s[property] = "0px"
              this.el.classList.add(durationClass)
  
              this.el.addEventListener("transitionend", () => {
                this.showing = false
                this.shouldNotTransition = false
                this.justUnmounted = true
              })
            })
          })
        })
        this.justUnmounted = false
      },
    }
  },
}
