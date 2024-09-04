// Single-language bootloader.
(function () {
  // Application path.
  var appName = location.pathname.match(/\/([-\w]+)(\.html)?$/);
  appName = appName ? appName[1].replace("-", "/") : "index";

  // Only one language.
  var lang = "en";
  window["BlocklyGamesLanguages"] = [lang];
  window["BlocklyGamesLang"] = lang;

  // Load the language pack.
  var script = document.createElement("script");
  script.src = appName + "/generated/" + lang + "/compressed.js";
  script.type = "text/javascript";
  document.head.appendChild(script);

  if ("serviceWorker" in navigator) {
    window.onload = () => {
      initServiceWorker();
    };
  }

  function initServiceWorker() {
    navigator.serviceWorker
      .register("sw.js")
      .then(() => console.log("Service worker is registered successfully"))
      .catch((error) =>
        console.error(`failed to register service worker, error: ${error}`)
      );
  }
})();
