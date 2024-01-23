/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

import CopyCodeButton from './copy-code-button.js';

document.querySelectorAll('.app-example__copy-code-button').forEach((button) => {
  new CopyCodeButton(button).init();
});
