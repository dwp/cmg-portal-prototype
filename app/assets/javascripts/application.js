/* global $ */

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
  console.log("switching case calc");
  console.log(urlParams.get("calc"));
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
var receivedMessages = document.getElementById("received");
var sentMessages = document.getElementById("sent");

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
let isSubmittedAfter = false;
let isSubmittedBefore = false;

submittedAfter.addEventListener("change", function (e) {
  console.log(new Date(e.target.value));
  const submittedAfterDate = new Date(e.target.value);
  let isDate = submittedAfterDate instanceof Date && !isNaN(submittedAfterDate);
  if (isDate) {
    isSubmittedAfter = true;
    submittedFacets.show();
    submittedAfterFacet[0].innerHTML = `<p class="govuk-!-margin-bottom-0">${submittedAfterDate.toLocaleDateString(
      "en-UK",
      { day: "numeric", month: "long", year: "numeric" }
    )}</p>`;
    submittedAfterFacet.show();
  }

  if (Object.keys(filteredChangeData).length == 0) {
    filteredChangeData = {...changesData}
  }

  changesKeys.forEach((key) => {
    let changeSubmittedDate = new Date(changesData[key].submitted)
    // if data item is before the input date
    if (changeSubmittedDate < submittedAfterDate) {
      // remove it
      console.log("removing", key)
      delete filteredChangeData[`${key}`];
    }
  });

  populateTrackChanges(filteredChangeData);
});

submittedBefore.addEventListener("change", function (e) {
  console.log(new Date(e.target.value));
  const submittedBeforeDate = new Date(e.target.value);
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
  }

  if (Object.keys(filteredChangeData).length == 0) {
    filteredChangeData = {...changesData}
  }

  changesKeys.forEach((key) => {
    let changeSubmittedDate = new Date(changesData[key].submitted)
    // if data item is after the input date
    if (changeSubmittedDate > submittedBeforeDate) {
      // remove it
      console.log("removing", key)
      delete filteredChangeData[`${key}`];
    }
  });

  populateTrackChanges(filteredChangeData);
});



const populateTrackChanges = (data) => {
  // console.log("in the func", data, data.length);
  let newDataKeys = Object.keys(data);
  // let newDataKeys = data
  let newHTML = [];
  // if no filter is applied, use ALL the data
  if (newDataKeys.length == 0) {
    newDataKeys = Object.keys(changesData);
    statusFacets.hide();
    submittedFacets.hide();
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

  console.log("after", isSubmittedAfter, "before", isSubmittedBefore);
  // console.log(submittedLabel);
  if (isSubmittedAfter && isSubmittedBefore) {
    submittedLabel.innerText = "Submitted between";
    submittedAnd.show();
  } else if (isSubmittedAfter) {
    submittedLabel.innerText = "Submitted after";
    submittedAnd.hide();
    submittedBeforeFacet.hide()
  } else {
    submittedLabel.innerText = "Submitted before";
    submittedAnd.hide();
    submittedAfterFacet.hide()
  }
  resultCount.innerText = `${newHTML.length} changes`;
  changesTableBody.innerHTML = newHTML.join("");
};

const removeStatus = (e) => {
  e.target.classList.remove("selected");
  changesKeys.forEach((key) => {
    // if selection value matches changesData status
    if (changesData[key].status == e.target.value) {
      // remove it
      delete filteredChangeData[`${key}`];
    }
    // remove facet tag
    $(`#facet-${e.target.value}`).remove();
  });
};

const addStatus = (e) => {
  e.target.classList.add("selected");
  // show status container
  statusFacets.show();
  // add facet tag
  statusFacets[0].innerHTML =
    statusFacets[0].innerHTML +
    `<div id="facet-${e.target.value}" class="facet-tag selected" value=${e.target.value}>
						<p class="govuk-!-margin-bottom-0">${e.target.value}</p>
					</div>`;
  // $(`#facet-${e.target.value}`)[0].addEventListener("click", applyStatus);
  // add event listener to new facet
  // remove the facet tag
  // remove the value from filteredChangeData
  // untick the thing
  // remove the selected class from the checkbox item
  changesKeys.forEach((key) => {
    // if selection value matches changesData status
    if (changesData[key].status == e.target.value) {
      // if selected add it
      filteredChangeData[`${key}`] = changesData[key];
    }
  });
};

const filterStatus = (e) => {
  // console.log(e.target);
  // mark it as selected if unselected, or not selected if selected
  if (e.target.classList.contains("selected")) {
    removeStatus(e);
  } else {
    addStatus(e);
  }

  populateTrackChanges(filteredChangeData);
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", filterStatus);
});

populateTrackChanges([]);
