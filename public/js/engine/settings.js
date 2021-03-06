const Settings = {
  /**
   * Initializes settings panel
   */
  init: async function () {
    // Adds a "change" event listener to language select element
    document.getElementById('user-language').addEventListener('change', this.onChangeLanguage);
  },

  /**
   * Handler for "change" language select event
   * @param {Event} event DOM "change" event
   */
  onChangeLanguage: async function (event) {
    // Gets target value
    let lang = event.target.value;

    // Requests the langauge change to the server
    await ajaxRequest('/', [{ key: 'clang', value: lang }]);
    // Reloads the poge
    window.location.reload();
  }
}