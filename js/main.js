!function(e){var n={};function t(l){if(n[l])return n[l].exports;var o=n[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(l,o,function(n){return e[n]}.bind(null,o));return l},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(module,exports){eval("console.log(`Hello world!`);\n\n\n\nconst notepadTextfield = document.querySelector('.notepad_textfield--js');\nconst load = document.querySelector('.notepad__button1--load-js');\nconst save = document.querySelector('.notepad__button2--save-js');\n\nsave.addEventListener('click', (e) => {\n    e.preventDefault();\n    localStorage.setItem('notepadTextfield', notepadTextfield.value);\n})\n\nload.addEventListener('click', (e) => {\n    e.preventDefault();\n    notepadTextfield.value = localStorage.getItem('notepadTextfield');\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coYEhlbGxvIHdvcmxkIWApO1xuXG5cblxuY29uc3Qgbm90ZXBhZFRleHRmaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlcGFkX3RleHRmaWVsZC0tanMnKTtcbmNvbnN0IGxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXBhZF9fYnV0dG9uMS0tbG9hZC1qcycpO1xuY29uc3Qgc2F2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlcGFkX19idXR0b24yLS1zYXZlLWpzJyk7XG5cbnNhdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm90ZXBhZFRleHRmaWVsZCcsIG5vdGVwYWRUZXh0ZmllbGQudmFsdWUpO1xufSlcblxubG9hZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG5vdGVwYWRUZXh0ZmllbGQudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm90ZXBhZFRleHRmaWVsZCcpO1xufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);