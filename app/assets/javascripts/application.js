/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

const showCase = (e) => {
  console.log(e.target.value)
  switch (e.target.value) {
    case "case1":
      $("#first-row").show()
      $("#second-row").hide()
      break;
    case "case2":
      $("#first-row").hide()
      $("#second-row").show()
      break;
    default:
      $("#first-row").show()
      $("#second-row").show()
      break;
  }
}

const sorter = $("#sort")[0]

sorter.addEventListener("change", showCase)


