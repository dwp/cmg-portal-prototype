/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

const showCase = (e) => {
  // console.log(e.target.value)
  switch (e.target.value) {
    case "janet":
      $("#janet").show()
      $("#clive").hide()
      $("#frankie").hide()
      break;
    case "clive":
      $("#clive").show()
      $("#janet").hide()
      $("#frankie").hide()
      break;
    case "frankie":
      $("#frankie").show()
      $("#clive").hide()
      $("#janet").hide()
      break;
    default:
      $("#clive").show()
      $("#janet").show()
      $("#frankie").show()
      break;
  }
}

const caseData = 
{inbox:
  {

  }

}

const sorter = $("#sort")[0]

sorter.addEventListener("change", showCase)


