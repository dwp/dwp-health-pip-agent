/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

function CopyCodeButton($module) {
  this.$module = $module;
}

CopyCodeButton.prototype.init = function () {
  if (!this.$module) {
    return;
  }

  this.$module.addEventListener('click', (event) => {
    event.preventDefault();
    let code;
    this.$module.textContent = 'Code copied';
    setTimeout(() => {
      this.$module.textContent = 'Copy code';
    }, 2000);
    navigator.clipboard.writeText(this.$module.dataset.copyText);
  });
};

document.querySelectorAll('.app-example__copy-code-button').forEach((button) => {
  new CopyCodeButton(button).init();
});
