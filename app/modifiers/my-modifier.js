import { modifier } from 'ember-modifier';

export default modifier(function myModifier(element/*, params, hash*/) {

  element.innerText = `I Made a modifier!`

});
