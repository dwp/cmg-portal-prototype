/* global $ */

// const e = require("express");

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info("GOV.UK Prototype Kit - do not use for production");
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();
});

const caseData = {
  all: {
    case: "allCases",
    messages: {
      msg0: ["We need to check some information with you", "01/02/2021"],
      msg1: ["Your child maintenance payments will not change", "15/01/2021"],
      msg2: ["We've worked out your child maintenance payments", "31/12/2020"],
    },
    changes: {
      chng0: ["Change phone number", "blue", "received"],
      chng1: ["Change address", "blue", "received"],
      chng2: [
        "Change to Direct Pay or Collect and Pay",
        "yellow",
        "in progress",
      ],
    },
  },
  jsmith: {
    case: "jsmith",
    messages: {
      msg0: ["We need to check some information with you", "01/02/2021"],
      msg1: ["We haven't received a child maintenance payment", "28/12/2020"],
      msg2: ["A variation has been reported", "19/12/2020"],
    },
    changes: {
      chng0: ["Update shared care", "yellow", "in progress"],
      chng1: ["Update income", "yellow", "in progress"],
      chng2: ["Special expenses", "green", "completed"],
    },
  },
  cjones: {
    case: "cjones",
    messages: {
      msg0: ["Your child maintenance payments will not change", "15/01/2021"],
      msg1: ["We have received a new report", "11/11/2020"],
      msg2: ["We have been updated of special expenses", "10/11/2020"],
    },
    changes: {
      chng0: [
        "Change to Direct Pay or Collect and Pay",
        "yellow",
        "in progress",
      ],
      chng1: ["Update shared care", "green", "Accepted"],
      chng2: ["Update shared care", "green", "Accepted"],
    },
  },
  ftenet: {
    case: "ftenet",
    messages: {
      msg0: ["We've worked out your child maintenance payments", "31/12/2020"],
      msg1: ["We've received your voluntary payment", "01/09/2020"],
      msg2: ["We've received your voluntary payment", "13/08/2020"],
    },
    changes: {
      chng0: ["Update income", "yellow", "in progress"],
      chng1: ["Child still in education", "green", "Accepted"],
      chng2: ["Update shared care", "green", "Accepted"],
    },
  },
};

let message0 = $("#message0")[0];
let message1 = $("#message1")[0];
let message2 = $("#message2")[0];
let date0 = $("#date0")[0];
let date1 = $("#date1")[0];
let date2 = $("#date2")[0];
let change0 = $("#change0")[0];
let change1 = $("#change1")[0];
let change2 = $("#change2")[0];
let tag0 = $("#tag0")[0];
let tag1 = $("#tag1")[0];
let tag2 = $("#tag2")[0];

const changeData = (caseName) => {
  let newData = caseData[caseName];
  // console.log(newData)
  message0.innerText = newData.messages.msg0[0];
  message1.innerText = newData.messages.msg1[0];
  message2.innerText = newData.messages.msg2[0];
  date0.innerText = newData.messages.msg0[1];
  date1.innerText = newData.messages.msg1[1];
  date2.innerText = newData.messages.msg2[1];
  change0.innerText = newData.changes.chng0[0];
  change1.innerText = newData.changes.chng1[0];
  change2.innerText = newData.changes.chng2[0];
  tag0.classList.remove(...tag0.classList);
  tag1.classList.remove(...tag1.classList);
  tag2.classList.remove(...tag2.classList);
  tag0.classList.add("govuk-tag", `govuk-tag--${newData.changes.chng0[1]}`);
  tag1.classList.add("govuk-tag", `govuk-tag--${newData.changes.chng1[1]}`);
  tag2.classList.add("govuk-tag", `govuk-tag--${newData.changes.chng2[1]}`);
  tag0.innerText = newData.changes.chng0[2];
  tag1.innerText = newData.changes.chng1[2];
  tag2.innerText = newData.changes.chng2[2];
};

const showCase = (e) => {
  console.log(e.target.value);
  switch (e.target.value) {
    case "jsmith":
      $("#jsmith").show();
      $("#cjones").hide();
      changeData(e.target.value);
      break;
    case "cjones":
      $("#cjones").show();
      $("#jsmith").hide();
      changeData(e.target.value);
      break;
    default:
      $("#cjones").show();
      $("#jsmith").show();
      changeData("all");
      break;
  }
};

const showCalcs = (e) => {
  console.log(e.target.value);
  switch (e.target.value) {
    case "jsmith":
      $("#jsmith-calc").show();
      $("#cjones-calc").hide();
      $("#all-calcs").hide();
      break;
    case "cjones":
      $("#cjones-calc").show();
      $("#jsmith-calc").hide();
      $("#all-calcs").hide();
      break;
    default:
      $("#all-calcs").show();
      $("#jsmith-calc").hide();
      $("#cjones-calc").hide();
      break;
  }
};

const showPayments = (e) => {
  console.log(e.target.value);
  switch (e.target.value) {
    case "case1":
      $("#case1").show();
      $("#case2").hide();
      $("#all-cases").hide();
      break;
    case "case2":
      $("#case2").show();
      $("#case1").hide();
      $("#all-cases").hide();
      break;
    default:
      $("#all-cases").show();
      $("#case1").hide();
      $("#case2").hide();
      break;
  }
};

const sorter = $("#sort")[0];
const calcSorter = $("#calcs-sort")[0];
const paySorter = $("#payment-sort")[0];
const urlParams = new URLSearchParams(window.location.search);

try {
  sorter.addEventListener("change", showCase);
} catch (err) {}

try {
  calcSorter.addEventListener("change", showCalcs);
} catch (err) {}

try {
  paySorter.addEventListener("change", showPayments);
} catch (err) {}

try {
  switch (`case${urlParams.get("case")}`) {
    case "case1":
      $("#case1").show();
      $("#case2").hide();
      $("#all-cases").hide();
      paySorter.value = "case1";
      break;
    case "case2":
      $("#case2").show();
      $("#case1").hide();
      $("#all-cases").hide();
      paySorter.value = "case2";
      break;
    default:
      $("#all-cases").show();
      $("#case1").hide();
      $("#case2").hide();
      break;
  }
} catch (err) {}

try {
  // console.log("switching case calc");
  // console.log(urlParams.get("calc"));
  switch (urlParams.get("calc")) {
    case "jsmith":
      $("#jsmith-calc").show();
      $("#cjones-calc").hide();
      $("#all-calcs").hide();
      calcSorter.value = "jsmith";
      break;
    case "cjones":
      $("#cjones-calc").show();
      $("#jsmith-calc").hide();
      $("#all-calcs").hide();
      calcSorter.value = "cjones";
      break;
    case "all_calc":
      $("#jsmith-calc").hide();
      $("#cjones-calc").hide();
      $("#all-calcs").show();
      calcSorter.value = "all";
      break;
    default:
      try {
        $("#all-calcs").show();
      } catch (err) {
        $("#jsmith-calc").show();
        $("#cjones-calc").hide();
      }
      break;
  }
} catch (err) {}

// Messages Tabs
var receivedTab = document.getElementById("receivedTab");
var sentTab = document.getElementById("sentTab");
var newMessage = document.getElementById("newMessage");
var receivedMessages = document.getElementById("received");
var sentMessages = document.getElementById("sent");
let sentNewMessage = sessionStorage.getItem('sentNewMessage');

try {
  receivedTab.addEventListener("click", function () {
    // if the received tab isn't selected
    if (receivedMessages.classList.contains("hidden")) {
      receivedTab.classList.add("active");
      sentTab.classList.remove("active");
      receivedMessages.classList.remove("hidden");
      receivedMessages.classList.add("visible");
      sentMessages.classList.remove("visible");
      sentMessages.classList.add("hidden");
    }
  });

  sentTab.addEventListener("click", function () {
    //if the sent tab isn't selected
    if (sentMessages.classList.contains("hidden")) {
      receivedTab.classList.remove("active");
      sentTab.classList.add("active");
      sentMessages.classList.remove("hidden");
      sentMessages.classList.add("visible");
      receivedMessages.classList.remove("visible");
      receivedMessages.classList.add("hidden");
    }
  });
} catch (err) {}

// TRACK
// CHANGES
// FITLER

const changesData = {
  change0: {
    changeType: "Change to service type",
    status: "rejected",
    colour: "red",
    submitted: "24 Apr 2004",
    updated: "10 May 2021",
  },
  change1: {
    changeType:
      "Add a new child with the parent of an existing child maintenance case",
    status: "evidence-requested",
    colour: "purple",
    submitted: "24 Apr 2021",
    updated: "10 May 2021",
  },
  change2: {
    changeType: "Change to service type",
    status: "received",
    colour: "blue",
    submitted: "24 Apr 2021",
    updated: "10 May 2021",
  },
  change3: {
    changeType: "Change to service type",
    status: "in-progress",
    colour: "yellow",
    submitted: "24 Apr 2021",
    updated: "10 May 2021",
  },
  change4: {
    changeType:
      "Add a new child with the parent of an existing child maintenance case",
    status: "in-progress",
    colour: "yellow",
    submitted: "24 Apr 2021",
    updated: "10 May 2021",
  },
  change5: {
    changeType: "Change to service type",
    status: "approved",
    colour: "green",
    submitted: "24 Apr 2021",
    updated: "10 May 2021",
  },
};

const checkboxes = $(".govuk-checkboxes__input").toArray();
const submittedBefore = $("#submitted-before")[0];
const submittedAfter = $("#submitted-after")[0];
const changesTable = $("#changes-table")[0];
const changesTableBody = $("#changes-table-body")[0];
const resultCount = $("#result-count")[0];
const statusFacets = $("#status-facet-container");
const submittedFacets = $("#submitted-facet-container");
const submittedLabel = $("#submitted-label")[0];
const submittedAfterFacet = $("#submitted-after-facet");
const submittedBeforeFacet = $("#submitted-before-facet");
const submittedAnd = $("#submitted-and");

// set an empty result
let changesKeys = Object.keys(changesData);
let filteredChangeData = {};
let statusFilters = [];
let isSubmittedAfter = false;
let isSubmittedBefore = false;
let submittedAfterDate = {};
let submittedBeforeDate = {};

// when submitted after input changes
submittedAfter.addEventListener("change", function (e) {
  submittedAfterDate = new Date(e.target.value);
  if (e.target.value.length > 4) {
    let formattedDate = e.target.value.replace("/", "-").replace("/", "-");
    let UKDay = formattedDate.substring(0, 3);
    let UKMonth = formattedDate.substring(3, 6);
    let UKYear = formattedDate.substring(6);
    submittedAfterDate = new Date(`${UKMonth}${UKDay}${UKYear}`);
    console.log(submittedAfterDate);
  }
  let isDate = submittedAfterDate instanceof Date && !isNaN(submittedAfterDate);
  if (isDate) {
    isSubmittedAfter = true;
    submittedFacets.show();
    submittedAfterFacet[0].innerHTML = `<p id="submitted-after-date" class="govuk-!-margin-bottom-0">${submittedAfterDate.toLocaleDateString(
      "en-UK",
      { day: "numeric", month: "long", year: "numeric" }
    )}</p>`;
    submittedAfterFacet.show();
  } else {
    console.log("aint a date");
    isSubmittedAfter = false;
    submittedAfterFacet.hide();
  }

  applyFilter();
});

// when clicking on the date facet, remove the filter
submittedAfterFacet[0].addEventListener("click", function () {
  isSubmittedAfter = false;
  submittedAfterFacet.hide();
  submittedAfter.value = "";

  applyFilter();
});

// when submitted before input changes
submittedBefore.addEventListener("change", function (e) {
  submittedBeforeDate = new Date(e.target.value);
  if (e.target.value.length > 4) {
    let formattedDate = e.target.value.replace("/", "-").replace("/", "-");
    let UKDay = formattedDate.substring(0, 3);
    let UKMonth = formattedDate.substring(3, 6);
    let UKYear = formattedDate.substring(6);
    submittedBeforeDate = new Date(`${UKMonth}${UKDay}${UKYear}`);
    console.log(submittedBeforeDate);
  }
  let isDate =
    submittedBeforeDate instanceof Date && !isNaN(submittedBeforeDate);
  if (isDate) {
    isSubmittedBefore = true;
    submittedFacets.show();
    submittedBeforeFacet[0].innerHTML = `<p class="govuk-!-margin-bottom-0">${submittedBeforeDate.toLocaleDateString(
      "en-UK",
      { day: "numeric", month: "long", year: "numeric" }
    )}</p>`;
    submittedBeforeFacet.show();
  } else {
    isSubmittedBefore = false;
  }

  // if (Object.keys(filteredChangeData).length == 0) {
  //   filteredChangeData = {...changesData}
  // }

  // changesKeys.forEach((key) => {
  //   let changeSubmittedDate = new Date(changesData[key].submitted);
  //   // if data item is after the input date
  //   if (changeSubmittedDate > submittedBeforeDate) {
  //     // remove it
  //     console.log("removing", key);
  //     delete filteredChangeData[`${key}`];
  //   }
  // });

  applyFilter();
});

// when clicking the date facet, remove the filter
submittedBeforeFacet[0].addEventListener("click", function () {
  isSubmittedBefore = false;
  submittedBeforeFacet.hide();
  submittedBefore.value = "";

  applyFilter();
});

// put data on screen
const populateTrackChanges = (data) => {
  let newDataKeys = Object.keys(data);
  let newHTML = [];

  // console.log(
  //   "after",
  //   isSubmittedAfter,
  //   "before",
  //   isSubmittedBefore,
  //   "status",
  //   statusFilters
  // );
  // if data is empty
  if (newDataKeys.length == 0) {
    // if filters are applied, show no matches
    if (isSubmittedBefore || isSubmittedAfter || statusFilters.length > 0) {
      $("#no-results").show();
    }
    // if no filters, show all data
    else {
      newDataKeys = Object.keys(changesData);
      statusFacets.hide();
      submittedFacets.hide();
    }
  }

  // add that to the screen
  newHTML = newDataKeys.map((key) => {
    let change = changesData[key];
    return `<tr class="govuk-table__row">
    					<th scope="row" class="govuk-table__header"><a
    							class="table-row-subject govuk-link--no-visited-state" href="change_details">${change.changeType}</a>
    						<div class="changes-date-container">
    							<span class="table-row-change-date submitted-date">Submitted: ${change.submitted}</span>
    							<span class="table-row-change-date updated-date">Updated: ${change.updated}</span>
    						</div>
    					</th>
    					<td class="govuk-table__cell table-row-date"><strong
    							class="govuk-tag govuk-tag--${change.colour}">${change.status}</strong></td>
    				</tr> `;
  });

  if (isSubmittedAfter && isSubmittedBefore) {
    submittedLabel.innerText = "Submitted between";
    submittedAnd.show();
  } else if (isSubmittedAfter) {
    submittedLabel.innerText = "Submitted after";
    submittedAnd.hide();
    submittedBeforeFacet.hide();
  } else if (isSubmittedBefore) {
    submittedLabel.innerText = "Submitted before";
    submittedAnd.hide();
    submittedAfterFacet.hide();
  } else {
    submittedAnd.hide();
    submittedFacets.hide();
  }

  resultCount.innerText = `${newHTML.length} changes`;
  changesTableBody.innerHTML = newHTML.join("");
};

const removeStatus = (e) => {
  console.log(e.target.value);
  $(`#status-${e.target.value}`)[0].checked = false;

  // remove facet tag
  $(`#facet-${e.target.value}`).remove();

  // remove from status filters
  const index = statusFilters.indexOf(e.target.value);
  statusFilters.splice(index, 1);

  if (statusFilters.length == 0) {
    statusFacets.hide();
  }

  applyFilter();
};

const addStatus = (e) => {
  // show status container
  statusFacets.show();
  // add facet tag
  statusFacets[0].innerHTML =
    statusFacets[0].innerHTML +
    `<div id="facet-${e.target.value}" class="facet-tag" value=${
      e.target.value
    }>
						<p class="govuk-!-margin-bottom-0">
            ${e.target.value.replace("-", " ")}
            </p>
					</div>`;
  // add event listener to new facet
  console.log($(`#facet-${e.target.value}`)[0]);

  $(`#facet-${e.target.value}`)[0].addEventListener("click", function () {
    $(`#status-${e.target.value}`)[0].checked = false;

    // remove facet tag
    $(`#facet-${e.target.value}`).remove();

    // remove from status filters
    const index = statusFilters.indexOf(e.target.value);
    statusFilters.splice(index, 1);

    if (statusFilters.length == 0) {
      statusFacets.hide();
    }

    applyFilter();
  });

  // add to status filters
  statusFilters.push(e.target.value);

  applyFilter();
};

const filterStatus = (e) => {
  // console.log(e.target);
  // mark it as selected if unselected, or not selected if selected
  if (!e.target.checked) {
    removeStatus(e);
  } else {
    addStatus(e);
  }
};

const applyFilter = () => {
  // if status filter is applied
  if (statusFilters.length) {
    console.log("we have ", statusFilters.length, " status filters applied");
    filteredChangeData = {};
    statusFilters.forEach((status) => {
      changesKeys.forEach((key) => {
        // if selection value matches changesData status
        if (changesData[key].status == status) {
          // if selected add it
          filteredChangeData[`${key}`] = changesData[key];
        }
      });
    });
  } else {
    // console.log("no status filters applied");
    filteredChangeData = { ...changesData };
  }

  // go through all status and all data, if match, add to filteredData

  // console.log("after status filtering: ", filteredChangeData);
  // then if date filter is applied

  // go through filteredData

  // filter by date
  if (isSubmittedAfter) {
    changesKeys.forEach((key) => {
      let changeSubmittedDate = new Date(changesData[key].submitted);
      // if data item is after the input date
      if (changeSubmittedDate < submittedAfterDate) {
        // remove it
        // console.log("removing", key);
        delete filteredChangeData[`${key}`];
      }
    });
  }

  if (isSubmittedBefore) {
    changesKeys.forEach((key) => {
      let changeSubmittedDate = new Date(changesData[key].submitted);
      // if data item is after the input date
      if (changeSubmittedDate > submittedBeforeDate) {
        // remove it
        // console.log("removing", key);
        delete filteredChangeData[`${key}`];
      }
    });
  }

  // console.log("after date filtering: ", filteredChangeData);

  // use that, to populate
  populateTrackChanges(filteredChangeData);
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", filterStatus);
});

populateTrackChanges([]);
