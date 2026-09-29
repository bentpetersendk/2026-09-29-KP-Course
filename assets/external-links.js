// Open links that leave this course site in a new tab. Links to pages of
// this site keep opening in the same tab.
document.addEventListener("DOMContentLoaded", function () {
  var config = document.getElementById("__config");
  if (!config) return;
  var base = new URL(JSON.parse(config.textContent).base + "/", location.href).href;
  document.querySelectorAll("a[href]").forEach(function (a) {
    if (a.protocol !== "http:" && a.protocol !== "https:") return;
    if (a.href.indexOf(base) === 0) return;
    a.target = "_blank";
    a.relList.add("noopener");
  });
});
