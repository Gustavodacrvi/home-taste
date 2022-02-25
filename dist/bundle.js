(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
})((function () { 'use strict';

	const { createApp } = PetiteVue;

	createApp().mount("nav");
	createApp().mount("footer");

}));
