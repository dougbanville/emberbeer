import { modifier } from 'ember-modifier';

export default modifier(function clickOutside(element/*, params, hash*/) {

  document.addEventListener("click", event => {
    if (!element.contains(event.target)) {
      // do something
      console.log(`You clicked outside ${element}`)
    }
  })

});
