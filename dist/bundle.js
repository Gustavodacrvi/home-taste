(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  const { createApp } = PetiteVue;

  createApp().mount("nav");


  /* function Footer(props) {
    return {
      count: props.initialCount,
      inc() {
        this.count++
      },
      mounted() {
        console.log(`I'm mounted!`)
      }
    }
  }
   */
  createApp().mount("footer");

}));
