const Messages = () => {
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
  const checkboxes = $(".govuk-checkboxes--small")[0];

  checkboxes.innerHTML = newCasesData
    .map((caseName) => {
      let replacement = caseName.name.replace(/ /g, "-");
      return `<div class="govuk-checkboxes__item">
<input class="govuk-checkboxes__input" id="case-${replacement}" name="case" type="checkbox" value="${replacement}">
<label class="govuk-label govuk-checkboxes__label" for="case-${replacement}">${caseName.name}</label>
</div>`;
    })
    .join("");

  const messagesCheckboxes = $(".govuk-checkboxes__input").toArray();

  let sentMessagesKeys = Object.keys(sentMessagesData);
  let receivedMessagesKeys = Object.keys(receivedMessagesData);
  let filteredMessageData = {};
  let caseFilters = [];
  let isReceivedAfter = false;
  let isReceivedBefore = false;
  let receivedAfterDate = {};
  let receivedBeforeDate = {};

  // check if new message has been reported
  if (newMessage) {
    console.log("That new message in there!");
    newMessageTitle = $("#new-message-subject")[0].innerText;
    sessionStorage.setItem("newMessage", true);
    sessionStorage.setItem("newMessageTitle", newMessageTitle);
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
      $(".case-facet-tag")[tag].remove();
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
    console.log("changing the date nuh");
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
    receivedBeforeString = e.target.value;
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
    <th scope="row" class="govuk-table__header table-row-subject"><a class="table-row-subject govuk-link--no-visited-state" href="dynamic-sent-message.html">${
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
      } else if (message.link) {
        return `<tr class="govuk-table__row">
    <th scope="row" class="govuk-table__header table-row-subject"><a class="table-row-subject govuk-link--no-visited-state" href="${
      message.link
    }">${message.title}</a></th>
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
    <th scope="row" class="govuk-table__header table-row-subject"><a class="table-row-subject govuk-link--no-visited-state" href="#">${
      message.title
    }</a><h4 class="govuk-heading-s govuk-!-margin-bottom-0 message-case-name">${
          message.case
        }</h4></th>
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
    <th scope="row" class="govuk-table__header table-row-subject"><a class="table-row-subject govuk-link--no-visited-state" href="#">${
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
      if (message.case != "no-case" && message.link) {
        return `<tr class="govuk-table__row">
    <th scope="row" class="govuk-table__header table-row-subject"><a class="table-row-subject govuk-link--no-visited-state" href="${
      message.link
    }">${
          message.title
        }</a><h4 class="govuk-heading-s govuk-!-margin-bottom-0 message-case-name">${
          message.case
        }</h4></th>
    <td class="govuk-table__cell table-row-date">
      ${new Date(message.date).toLocaleDateString("en-UK", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </td>
  </tr>`;
      } else if (message.link) {
        return `<tr class="govuk-table__row">
    <th scope="row" class="govuk-table__header table-row-subject"><a class="table-row-subject govuk-link--no-visited-state" href="${
      message.link
    }">${message.title}</a></th>
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
    <th scope="row" class="govuk-table__header table-row-subject"><a class="table-row-subject govuk-link--no-visited-state" href="#">${
      message.title
    }</a><h4 class="govuk-heading-s govuk-!-margin-bottom-0 message-case-name">${
          message.case
        }</h4></th>
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
    <th scope="row" class="govuk-table__header table-row-subject"><a class="table-row-subject govuk-link--no-visited-state" href="#">${
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

    // sort

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
    // clear case facets
    $(".case-facet-tag").each((tag) => {
      $(".case-facet-tag")[tag].remove();
    });
    caseFacets.hide();

    // if status filter is applied
    if (caseFilters.length) {
      console.log("we have ", caseFilters.length, " case filters applied");
      filteredMessageData = {};
      let filteredReceivedMessageData = {};
      let filteredSentMessageData = {};

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
            ${casee.replace(/-/g, " ")}
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
          if (receivedMessagesData[key].case == casee.replace(/-/g, " ")) {
            // if selected add it
            filteredReceivedMessageData[`${key}`] = receivedMessagesData[key];
          }
        });
      });

      // filter sent messages
      caseFilters.forEach((casee) => {
        sentMessagesKeys.forEach((key) => {
          // if selection value matches changesData status
          if (sentMessagesData[key].case == casee.replace(/-/g, " ")) {
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
};

export default Messages