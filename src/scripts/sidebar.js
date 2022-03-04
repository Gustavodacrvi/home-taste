
const removeParameterFromUrl = (url, parameter) => {
  let urlparts = url.split('?')
  if (urlparts.length >= 2) {
      let prefix = encodeURIComponent(parameter) + '='
      let pars = urlparts[1].split(/[&]/g)
      for (let i = pars.length; i-- > 0;) {
          if (pars[i].lastIndexOf(prefix, 0) !== -1) {  
              pars.splice(i, 1)
          }
      }
      return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '')
  }
  return url
}

window.VueComponents = {
  ...window.VueComponents || {},

  FiltersForm(props) {
    let selected = props.selected || (props.multipleSelections ? [] : 0)
    
    const paramsAndValues = window.location.href.split("?")[1]?.split("&").map(params => params.split("=")).flat()
    const paramIndex = paramsAndValues?.findIndex(param => param === props.param) + 1
    if (paramIndex > 0 && paramsAndValues[paramIndex]) selected = decodeURIComponent(paramsAndValues[paramIndex])

    const parsed = parseInt(selected, 10)
    if (!isNaN(parsed) && (parsed + "").length === selected.length) selected = parsed

    function removeOption() {
      const key = props.param
      this.selected = props.selected || (props.multipleSelections ? [] : 0)
      history.replaceState({key}, "", removeParameterFromUrl(location.search, key))
    }
    
    

    if (props.multipleSelections) {
      if (typeof selected === "string") {
        selected = selected.split(",")
      }
      if (typeof selected !== "object" && !selected.map) {
        selected = []
        removeOption()
      }
    }

    if (selected === "false") {
      selected = props.selected
      removeOption()
    }

    return {
      selected,

      selectOption(item) {
        if (props.multipleSelections) {
          
          if (this.selected.includes(item)) {
            this.selected.splice(this.selected.indexOf(item), 1)
          } else {
            this.selected.push(item)
          }
        } else {
          this.selected = item
        }

        this.setParam(this.selected)
      },
      setParam(selected) {
        const key = encodeURIComponent(props.param)
        const value = encodeURIComponent(selected)

        let s = document.location.search
        let kvp = key+"="+value

        let r = new RegExp("(&|\\?)"+key+"=[^\&]*")

        s = s.replace(r,"$1"+kvp)

        if(!RegExp.$1) {s += (s.length>0 ? '&' : '?') + kvp}

        history.replaceState({key}, "", s)
      },
      removeOption,
    }
  },
}
