/* global $ */

// const e = require("express");

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info("GOV.UK Prototype Kit - do not use for production");
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();
});


// HOME
// SCREEN
// THANGS

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

// PAYMENT
// SCREEN
// THANGS

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

if (window.location.href.includes("http://localhost:3000/track_changes")) {
  const changeCheckboxes = $(".govuk-checkboxes__input").toArray();

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

  try {
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
      let isDate =
        submittedAfterDate instanceof Date && !isNaN(submittedAfterDate);
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
  } catch (err) {}

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

    try {
      resultCount.innerText = `${newHTML.length} changes`;
      changesTableBody.innerHTML = newHTML.join("");
    } catch (err) {}
  };

  const removeStatus = (e) => {
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
    statusFacets.append(
      `<div id="facet-${e.target.value}" class="facet-tag status-facet-tag"
    }>
						<p class="govuk-!-margin-bottom-0">
            ${
              e.target.value.charAt(0).toUpperCase() +
              e.target.value.slice(1).replace("-", " ")
            }
            </p>
					</div>`
    );
    // add event listener to new facet

    $(`#facet-${e.target.value}`)[0].addEventListener("click", function () {
      // uncheck checkbox
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

    // sort by updated date

    // use that, to populate
    populateTrackChanges(filteredChangeData);
  };

  changeCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", filterStatus);
  });

  populateTrackChanges([]);
}

//
// MESSAGES
// FILTER
//

const sentMessagesData = {
  0: {
    title: "Payment schedule query",
    date: "01 Jan 2021",
    case: "no-case",
  },
  1: {
    title: "Something else",
    date: "02 Apr 2020",
    case: "j-smith",
  },
};

const receivedMessagesData = {
  0: {
    title: "We need to check some information with you",
    date: "01 Jan 2021",
    case: "no-case",
  },
};

if (
  window.location.href.includes("/messages/messages")) {
  const messagesCheckboxes = $(".govuk-checkboxes__input").toArray();
  const sentResultCount = $("#sent-result-count")[0];
  const receivedResultCount = $("#received-result-count")[0];

  const receivedBefore = $("#received-before")[0];
  const receivedAfter = $("#received-after")[0];
  const receivedTable = $("#received")[0];
  const receivedTableBody = $("#received-table-body")[0];
  const sentTable = $("#sent")[0];
  const sentTableBody = $("#sent-table-body")[0];
  const caseFacets = $("#case-facet-container");
  const receivedFacets = $("#received-facet-container");
  const receivedLabel = $("#received-label")[0];
  const receivedAfterFacet = $("#received-after-facet");
  const receivedBeforeFacet = $("#received-before-facet");
  const receivedAnd = $("#received-and");
  const newMessage = $("#new-message")[0];
  const applyFilterButton = $(".govuk-button--secondary")[0];

  let sentMessagesKeys = Object.keys(sentMessagesData);
  let receivedMessagesKeys = Object.keys(receivedMessagesData);
  let filteredMessageData = {};
  let caseFilters = [];
  let isReceivedAfter = false;
  let isReceivedBefore = false;
  let receivedAfterDate = {};
  let receivedBeforeDate = {};
  let receivedAfterString = "";
  let receivedBeforeString = "";

  // check if new message has been reported
  if (newMessage) {
    console.log("That new message in there!");
    let newMessageTitle = $("#new-message-subject")[0].innerText;
    sentMessagesData[2] = {
      title: newMessageTitle,
      date: new Date(),
      case: "no-case",
      new: true,
    };
  } else {
    console.log("nah that message it ain't in there");
  }

  // clear filters when switching tabs
  const clearMessageFilters = () => {
    console.log("clearing filters");
    caseFilters = [];
    isReceivedAfter = false;
    isReceivedBefore = false;
    receivedAfterDate = {};
    receivedBeforeDate = {};
    receivedBefore.value = "";
    receivedAfter.value = "";

    messagesCheckboxes.forEach((box) => {
      box.checked = false;
    });
    $(".case-facet-tag").each((tag) => {
      $(".case-facet-tag")[tag].remove()
    });
    caseFacets.hide();

    applyFilter();
  };

  // Messages Tabs
  var receivedTab = document.getElementById("receivedTab");
  var sentTab = document.getElementById("sentTab");
  // var newMessage = document.getElementById("newMessage");
  var receivedMessages = document.getElementById("received");
  var sentMessages = document.getElementById("sent");
  let sentNewMessage = sessionStorage.getItem("sentNewMessage");

  // when submitted after input changes
  receivedAfter.addEventListener("change", function (e) {
    console.log("changing the date nuh")
    receivedAfterDate = new Date(e.target.value);
    receivedAfterString = e.target.value;
    if (e.target.value.length > 4) {
      let formattedDate = e.target.value.replace("/", "-").replace("/", "-");
      let UKDay = formattedDate.substring(0, 3);
      let UKMonth = formattedDate.substring(3, 6);
      let UKYear = formattedDate.substring(6);
      receivedAfterDate = new Date(`${UKMonth}${UKDay}${UKYear}`);
      console.log(receivedAfterDate);
    }
    let isDate = receivedAfterDate instanceof Date && !isNaN(receivedAfterDate);
    if (isDate) {
      isReceivedAfter = true;
      // receivedFacets.show();
      // receivedAfterFacet[0].innerHTML = `<p id="received-after-date" class="govuk-!-margin-bottom-0">${receivedAfterDate.toLocaleDateString(
      //   "en-UK",
      //   { day: "numeric", month: "long", year: "numeric" }
      // )}</p>`;
      // receivedAfterFacet.show();
    } else {
      console.log("aint a date");
      isReceivedAfter = false;
      receivedAfterFacet.hide();
    }

    // applyFilter();
  });

  // when clicking on the date facet, remove the filter
  receivedAfterFacet[0].addEventListener("click", function () {
    isReceivedAfter = false;
    receivedAfterFacet.hide();
    receivedAfter.value = "";

    applyFilter();
  });

  // when received before input changes
  receivedBefore.addEventListener("change", function (e) {
    receivedBeforeDate = new Date(e.target.value);
    receivedBeforeString = e.target.value
    if (e.target.value.length > 4) {
      let formattedDate = e.target.value.replace("/", "-").replace("/", "-");
      let UKDay = formattedDate.substring(0, 3);
      let UKMonth = formattedDate.substring(3, 6);
      let UKYear = formattedDate.substring(6);
      receivedBeforeDate = new Date(`${UKMonth}${UKDay}${UKYear}`);
      console.log(receivedBeforeDate);
    }
    let isDate =
      receivedBeforeDate instanceof Date && !isNaN(receivedBeforeDate);
    if (isDate) {
      isReceivedBefore = true;
      // receivedFacets.show();
      // receivedBeforeFacet[0].innerHTML = `<p class="govuk-!-margin-bottom-0">${receivedBeforeDate.toLocaleDateString(
      //   "en-UK",
      //   { day: "numeric", month: "long", year: "numeric" }
      // )}</p>`;
      // receivedBeforeFacet.show();
    } else {
      isReceivedBefore = false;
    }

    // applyFilter();
  });

  // when clicking the date facet, remove the filter
  receivedBeforeFacet[0].addEventListener("click", function () {
    isReceivedBefore = false;
    receivedBeforeFacet.hide();
    receivedBefore.value = "";

    applyFilter();
  });

  // put data on screen
  const populateMessages = (data) => {
    let newSentDataKeys = [];
    let newReceivedDataKeys = [];
    let newSentHTML = [];
    let newReceivedHTML = [];

    try {
      newSentDataKeys = Object.keys(data.sent);
      newReceivedDataKeys = Object.keys(data.received);
    } catch (err) {}

    // console.log(
    //   "after",
    //   isReceivedAfter,
    //   "before",
    //   isReceivedBefore,
    //   "status",
    //   caseFilters
    // );

    $("#no-sent-results").hide();
    $("#no-received-results").hide();

    // if sentdata is empty
    if (newSentDataKeys.length == 0) {
      // if filters are applied, show no matches
      if (isReceivedBefore || isReceivedAfter || caseFilters.length > 0) {
        console.log("no sent results");
        $("#no-sent-results").show();
      }
      // if no filters, show all data
      else {
        // console.log("the sent data was blank - chucking in all of it");
        data.sent = sentMessagesData;
        caseFacets.hide();
        receivedFacets.hide();
      }
    }

    // if received data is empty
    if (newReceivedDataKeys.length == 0) {
      // if filters are applied, show no matches
      if (isReceivedBefore || isReceivedAfter || caseFilters.length > 0) {
        console.log("no received results");
        $("#no-received-results").show();
      }
      // if no filters, show all data
      else {
        // console.log("the received data was blank - chucking in all of it");
        data.received = receivedMessagesData;
        caseFacets.hide();
        receivedFacets.hide();
      }
    }

    newSentDataKeys = Object.keys(data.sent);
    newReceivedDataKeys = Object.keys(data.received);

    // add that to the screen

    // add that to the sent array

    newSentHTML = newSentDataKeys.map((key) => {
      let message = sentMessagesData[key];
      if (message.new) {
        return `<tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header table-row-subject"><a class="table-row-subject" href="dynamic-sent-message.html">${
        message.title
      }</a></th>
      <td class="govuk-table__cell table-row-date">
        ${new Date(message.date).toLocaleDateString("en-UK", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </td>
    </tr>`;
      } else if (message.case != "no-case") {
        return `<tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header table-row-subject"><a class="table-row-subject" href="sent-message.html">${
        message.title
      }</a><span class="table-row-case">${
          message.case[0].toUpperCase() +
          " " +
          message.case[2].toUpperCase() +
          message.case.slice(3)
        }</span></th>
      <td class="govuk-table__cell table-row-date">
        ${new Date(message.date).toLocaleDateString("en-UK", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </td>
    </tr>`;
      } else {
        return `<tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header table-row-subject"><a class="table-row-subject" href="sent-message.html">${
        message.title
      }</a></th>
      <td class="govuk-table__cell table-row-date">
        ${new Date(message.date).toLocaleDateString("en-UK", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </td>
    </tr>`;
      }
    });

    // add that to the received array

    newReceivedHTML = newReceivedDataKeys.map((key) => {
      let message = receivedMessagesData[key];
      return `<tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header table-row-subject"><a class="table-row-subject" href="sent-message.html">${
        message.title
      }</a></th>
      <td class="govuk-table__cell table-row-date">
      ${new Date(message.date).toLocaleDateString("en-UK", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
      </td>
    </tr>`;
    });

    // if date filters are applied, show facets and labels

    if (isReceivedAfter && isReceivedBefore) {
      receivedLabel.innerText = "Received between";
      receivedAnd.show();
    } else if (isReceivedAfter) {
      receivedLabel.innerText = "Received after";
      receivedAnd.hide();
      receivedBeforeFacet.hide();
    } else if (isReceivedBefore) {
      receivedLabel.innerText = "Received before";
      receivedAnd.hide();
      receivedAfterFacet.hide();
    } else {
      receivedAnd.hide();
      receivedFacets.hide();
    }

    // put it in the respective tables
    sentResultCount.innerText = `${newSentHTML.length} sent messages`;
    receivedResultCount.innerText = `${newReceivedHTML.length} received messages`;
    receivedTableBody.innerHTML = newReceivedHTML.join("");
    sentTableBody.innerHTML = newSentHTML.join("");
  };

  const removeCase = (e) => {
    // $(`#case-${e.target.value}`)[0].checked = false;

    // // remove facet tag
    // $(`#facet-${e.target.value}`).remove();

    // remove from case filters
    const index = caseFilters.indexOf(e.target.value);
    caseFilters.splice(index, 1);

    // if (caseFilters.length == 0) {
    //   caseFacets.hide();
    // }

    // applyFilter();
  };

  const addCase = (e) => {
    // // show status container
    // caseFacets.show();
    // // add facet tag
    // if (e.target.value == "no-case") {
    //   caseFacets.append(
    //     `<div id="facet-${e.target.value}" class="facet-tag case-facet-tag"
    //   }>
    //           <p class="govuk-!-margin-bottom-0">
    //           No case
    //           </p>
    //         </div>`
    //   );
    // }
    // else {
    //   caseFacets.append(
    //     `<div id="facet-${e.target.value}" class="facet-tag case-facet-tag"
    //   }>
    //           <p class="govuk-!-margin-bottom-0">
    //           ${
    //             e.target.value.charAt(0).toUpperCase() +
    //             " " +
    //             e.target.value[2].toUpperCase() +
    //             e.target.value.slice(3)
    //           }
    //           </p>
    //         </div>`
    //   );
    // }
    // // add event listener to new facet

    // $(`#facet-${e.target.value}`)[0].addEventListener("click", function () {
    //   // uncheck checkbox
    //   $(`#case-${e.target.value}`)[0].checked = false;

    //   // remove facet tag
    //   $(`#facet-${e.target.value}`).remove();

    //   // remove from status filters
    //   const index = caseFilters.indexOf(e.target.value);
    //   caseFilters.splice(index, 1);

    //   if (caseFilters.length == 0) {
    //     caseFacets.hide();
    //   }

    //   applyFilter();
    // });

    // add to status filters
    caseFilters.push(e.target.value);

    // applyFilter();
  };

  const filterCase = (e) => {
    // console.log(e.target);
    // mark it as selected if unselected, or not selected if selected
    if (!e.target.checked) {
      removeCase(e);
    } else {
      addCase(e);
    }
  };

  const applyFilter = () => {
    console.log("applying filter");
    // if status filter is applied
    if (caseFilters.length) {
      console.log("we have ", caseFilters.length, " case filters applied");
      filteredMessageData = {};
      let filteredReceivedMessageData = {};
      let filteredSentMessageData = {};

    // clear status facets
      $(".case-facet-tag").each((tag) => {
        $(".case-facet-tag")[tag].remove()
      });
      caseFacets.hide();

      // add facet tags
      caseFilters.forEach((casee) => {
        // show status container
        caseFacets.show();
        // add facet tag
        if (casee == "no-case") {
          caseFacets.append(
            `<div id="facet-${casee}" class="facet-tag case-facet-tag"}>
              <p class="govuk-!-margin-bottom-0">
              No case
              </p>
            </div>`
          );
        } else {
          caseFacets.append(
            `<div id="facet-${casee}" class="facet-tag case-facet-tag"}>
              <p class="govuk-!-margin-bottom-0">
              ${
                casee.charAt(0).toUpperCase() +
                " " +
                casee[2].toUpperCase() +
                casee.slice(3)
              }
              </p>
            </div>`
          );
        }
        // add event listener to new facet

        $(`#facet-${casee}`)[0].addEventListener("click", function () {
          // uncheck checkbox
          $(`#case-${casee}`)[0].checked = false;

          // remove facet tag
          $(`#facet-${casee}`).remove();

          // remove from status filters
          const index = caseFilters.indexOf(casee);
          caseFilters.splice(index, 1);

          if (caseFilters.length == 0) {
            caseFacets.hide();
          }

          applyFilter();
        });
      });

      // filter received messaged
      caseFilters.forEach((casee) => {
        receivedMessagesKeys.forEach((key) => {
          // if selection value matches changesData status
          if (receivedMessagesData[key].case == casee) {
            // if selected add it
            filteredReceivedMessageData[`${key}`] = receivedMessagesData[key];
          }
        });
      });

      // filter sent messages
      caseFilters.forEach((casee) => {
        sentMessagesKeys.forEach((key) => {
          // if selection value matches changesData status
          if (sentMessagesData[key].case == casee) {
            // if selected add it
            filteredSentMessageData[`${key}`] = sentMessagesData[key];
          }
        });
      });

      // put it together
      filteredMessageData = {
        received: { ...filteredReceivedMessageData },
        sent: { ...filteredSentMessageData },
      };
    } else {
      // console.log("no status filters applied");
      filteredMessageData = {
        received: { ...receivedMessagesData },
        sent: { ...sentMessagesData },
      };
    }

    if (caseFilters.length == 0) {
      caseFacets.hide();
    }

    // go through all status and all data, if match, add to filteredData

    // console.log("after case filtering: ", filteredMessageData);
    // then if date filter is applied

    // go through filteredData

    // filter by date
    if (isReceivedAfter) {
      // add date facet tag
        receivedFacets.show();
        receivedAfterFacet[0].innerHTML = `<p id="received-after-date" class="govuk-!-margin-bottom-0">${receivedAfterDate.toLocaleDateString(
          "en-UK",
          { day: "numeric", month: "long", year: "numeric" }
        )}</p>`;
        receivedAfterFacet.show();
      // filter received data
      receivedMessagesKeys.forEach((key) => {
        // console.log(receivedMessagesData[key]);
        let receivedMessageReceivedDate = new Date(
          receivedMessagesData[key].date
        );
        // if data item is after the input date
        // console.log(receivedMessageReceivedDate, receivedAfterDate);
        if (receivedMessageReceivedDate < receivedAfterDate) {
          // remove it
          // console.log("removing", key);
          delete filteredMessageData.received[`${key}`];
        }
      });
      // filter sent data
      sentMessagesKeys.forEach((key) => {
        // console.log(receivedMessagesData[key]);
        let sentMessageReceivedDate = new Date(sentMessagesData[key].date);
        // if data item is after the input date
        // console.log(sentMessageReceivedDate, receivedAfterDate);
        if (sentMessageReceivedDate < receivedAfterDate) {
          // remove it
          // console.log("removing", key);
          delete filteredMessageData.sent[`${key}`];
        }
      });
    }

    if (isReceivedBefore) {
      // add date facet tag
        receivedFacets.show();
        receivedBeforeFacet[0].innerHTML = `<p class="govuk-!-margin-bottom-0">${receivedBeforeDate.toLocaleDateString(
          "en-UK",
          { day: "numeric", month: "long", year: "numeric" }
        )}</p>`;
        receivedBeforeFacet.show();
      // filter received data
      receivedMessagesKeys.forEach((key) => {
        // console.log(receivedMessagesData[key]);
        let receivedMessageReceivedDate = new Date(
          receivedMessagesData[key].date
        );
        // if data item is after the input date
        if (receivedMessageReceivedDate > receivedBeforeDate) {
          // remove it
          // console.log("removing", key);
          delete filteredMessageData.received[`${key}`];
        }
      });
      // filter sent data
      sentMessagesKeys.forEach((key) => {
        // console.log(receivedMessagesData[key]);
        let sentMessageReceivedDate = new Date(sentMessagesData[key].date);
        // if data item is after the input date
        if (sentMessageReceivedDate > receivedBeforeDate) {
          // remove it
          // console.log("removing", key);
          delete filteredMessageData.sent[`${key}`];
        }
      });
    }

    // console.log("after date filtering: ", filteredMessageData);

    // sort by received date

    // use that, to populate
    populateMessages(filteredMessageData);
  };

  // switch to received tab
  receivedTab.addEventListener("click", function () {
    // if the received tab isn't selected
    if (receivedMessages.classList.contains("hidden")) {
      receivedTab.classList.add("active");
      sentTab.classList.remove("active");
      receivedMessages.classList.remove("hidden");
      receivedMessages.classList.add("visible");
      sentMessages.classList.remove("visible");
      sentMessages.classList.add("hidden");
      $("#sent-result-count").hide();
      $("#received-result-count").show();
    }
    clearMessageFilters();
  });

  // switch to sent tab
  sentTab.addEventListener("click", function () {
    //if the sent tab isn't selected
    if (sentMessages.classList.contains("hidden")) {
      receivedTab.classList.remove("active");
      sentTab.classList.add("active");
      sentMessages.classList.remove("hidden");
      sentMessages.classList.add("visible");
      receivedMessages.classList.remove("visible");
      receivedMessages.classList.add("hidden");
      $("#received-result-count").hide();
      $("#sent-result-count").show();
    }
    clearMessageFilters();
  });

  populateMessages([]);
  $("#sent-result-count").hide();

  messagesCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", filterCase);
  });

  applyFilterButton.addEventListener("click", applyFilter);
}
