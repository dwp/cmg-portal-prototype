/* global $ */

// const e = require("express");

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info("GOV.UK Prototype Kit - do not use for production");
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();
});

// PROTOTYPE
// GLOBAL
// DATA

let urlParams = new URLSearchParams(window.location.search);

if (urlParams.get("userType")) {
  // console.log(urlParams.get("userType").toUpperCase());
  sessionStorage.setItem("userType", urlParams.get("userType").toUpperCase());
}

if (sessionStorage.getItem("userType")) {
  $("#user-type-para")[0].innerText = sessionStorage.getItem("userType");
}

const changeUserType = () => {
  switch (sessionStorage.getItem("userType")) {
    case "PP":
      sessionStorage.setItem("userType", "RP");
      $("#user-type-para")[0].innerText = sessionStorage.getItem("userType");
      break;
    case "RP":
      sessionStorage.setItem("userType", "DUAL");
      $("#user-type-para")[0].innerText = sessionStorage.getItem("userType");
      break;
    case "DUAL":
      sessionStorage.setItem("userType", "PP");
      $("#user-type-para")[0].innerText = sessionStorage.getItem("userType");
      break;
    default:
      sessionStorage.setItem("userType", "PP");
      $("#user-type-para")[0].innerText = sessionStorage.getItem("userType");
      break;
  }
  // reload the page
  location.reload();
};

$("#user-type-container")[0].addEventListener("click", changeUserType);

let userType = sessionStorage.getItem("userType");

const newCasesData = [
  { name: "Jane", children: ["Jane"] },
  { name: "Edward", children: ["Edward"] },
  { name: "Adam and 1 more", children: ["Adam", "Emma"] },
];

const sentMessagesData = {
  0: {
    title: "Responding to a request from the Child Maintenance Service",
    date: "03 Jun 2021",
    case: "c-jones",
  },
  1: {
    title: "Payment schedule query",
    date: "13 May 2021",
    case: "j-smith",
    link: "sent-message",
  },
  2: {
    title: "General query",
    date: "15 Apr 2021",
    case: "no-case",
  },
  3: {
    title: "Missed payment",
    date: "29 Mar 2021",
    case: "j-smith",
  },
  4: {
    title: "General query",
    date: "26 Mar 2021",
    case: "c-smith",
  },
  5: {
    title: "Other change",
    date: "11 Mar 2021",
    case: "no-case",
  },
};

// this should be converted to an array at some point
const receivedMessagesData = {
  0: {
    title: "Your child maintenance enquiry",
    date: "21 May 2021",
    case: newCasesData[0].name,
    link: "week-received-message",
  },
  1: {
    title: "We need some information from you",
    date: "01 Mar 2021",
    case: "no-case",
  },
  2: {
    title: "We need to check some information with you",
    date: "25 Jan 2021",
    case: "no-case",
  },
  3: {
    title: "Your child maintenance enquiry",
    date: "18 Dec 2020",
    case: newCasesData[0].name,
  },
  4: {
    title: "Your child maintenance payments will not change",
    date: "15 Oct 2020",
    case: newCasesData[1].name,
  },
  5: {
    title:
      "Part A: Your Annual Review - we’ve worked out your child maintenance payments",
    date: "24 Aug 2020",
    case: "no-case",
  },
  6: {
    title: "Your child maintenance enquiry",
    date: "20 Jul 2020",
    case: "no-case",
  },
  7: {
    title: "We need some information from you",
    date: "28 May 2020",
    case: "no-case",
  },
  8: {
    title: "We've made a decision about a variation application",
    date: "28 Apr 2020",
    case: "no-case",
  },
  9: {
    title:
      "Your payment plan for effective date of payment schedule to last payment date of schedule",
    date: "24 Mar 2020",
    case: "no-case",
  },
  10: {
    title: "Issue reminder request",
    date: "19 Feb 2020",
    case: "no-case",
  },
  11: {
    title: "Your service type has changed",
    date: "21 Jan 2020",
    case: newCasesData[2].name,
    link: "received-message",
  },
  12: {
    title: "We need to check some information with you",
    date: "17 Dec 2019",
    case: "no-case",
  },
  13: {
    title: "We need to check other information with you",
    date: "01 Dec 2019",
    case: "no-case",
  },
  14: {
    title: "Your child maintenance enquiry",
    date: "11 Nov 2019",
    case: "no-case",
  },
  15: {
    title:
      "Part A: Your Annual Review - we’ve worked out your child maintenance payments",
    date: "24 Aug 2019",
    case: "no-case",
  },
  16: {
    title: "Your child maintenance payments will not change",
    date: "17 Jul 2019",
    case: newCasesData[1].name,
  },
  17: {
    title: "We need some information from you",
    date: "07 Jun 2019",
    case: "no-case",
  },
  18: {
    title:
      "A variation application has been made that could affect your payments - please respond ",
    date: "08 Apr 2019",
    case: "no-case",
  },
  19: {
    title: "Issue reminder request",
    date: "07 Feb 2019",
    case: "no-case",
  },
  20: {
    title:
      "Part A: Your Annual Review - we’ve worked out your child maintenance payments",
    date: "24 Aug 2018",
    case: "no-case",
  },
};

const paymentsData = [
  // This is case 0
  {
    name: newCasesData[0].name,
    serviceType: "Direct Pay",
    role: "PP",
    nextPayment: { date: "14 Oct 2021", amount: 75.03 },
    previousPayment: { date: "14 Sep 2021", amount: 75.03 },
    paymentPlan: {
      startDate: "08 Feb 2021",
      endDate: "07 Feb 2022",
      paymentFrequency: "month",
      paymentMethod: null,
      expectedPayments: [
        { date: "14 Mar 2021", amount: 75.03 },
        { date: "14 Apr 2021", amount: 75.03 },
        { date: "14 May 2021", amount: 75.03 },
        { date: "14 Jun 2021", amount: 75.03 },
        { date: "14 Jul 2021", amount: 75.03 },
        { date: "14 Aug 2021", amount: 75.03 },
        { date: "14 Sep 2021", amount: 75.03 },
        { date: "14 Oct 2021", amount: 75.03 },
        { date: "14 Nov 2021", amount: 75.03 },
        { date: "14 Dec 2021", amount: 75.03 },
        { date: "14 Jan 2022", amount: 75.03 },
        { date: "14 Feb 2022", amount: 75.03 },
      ],
    },
    annualReviews: [
      {
        startDate: "20 Sep 2020",
        endDate: "19 Sep 2021",
        receivedPayments: [
          { date: "03 Jan 2021", amount: 78.99 },
          { date: "03 Jan 2021", amount: 78.99 },
        ],
      },
      {
        startDate: "20 Sep 2019",
        endDate: "19 Sep 2020",
        receivedPayments: [
          { date: "03 Jan 2020", amount: 78.99 },
          { date: "03 Jan 2020", amount: 78.99 },
        ],
      },
    ],
  },
  {
    name: newCasesData[1].name,
    combined: true,
    serviceType: "Collect and Pay",
    role: "PP",
    nextPayment: { date: "20 Sep 2021", amount: 51.34 },
    previousPayment: { date: "24 Aug 2021", amount: 51.34 },
    paymentPlan: {
      startDate: "14 Mar 2021",
      endDate: "13 Mar 2022",
      paymentFrequency: "monthly",
      paymentMethod: "Deduction from earnings order (DEO)",
      expectedPayments: [
        { date: "20 Mar 2021", amount: 51.34 },
        { date: "20 Apr 2021", amount: 51.34 },
        { date: "20 May 2021", amount: 51.34 },
        { date: "20 Jun 2021", amount: 51.34 },
        { date: "20 Jul 2021", amount: 51.34 },
        { date: "20 Aug 2021", amount: 51.34 },
        { date: "20 Sep 2021", amount: 51.34 },
        { date: "20 Oct 2021", amount: 51.34 },
        { date: "20 Nov 2021", amount: 51.34 },
        { date: "20 Dec 2021", amount: 51.34 },
        { date: "20 Jan 2022", amount: 51.34 },
        { date: "20 Feb 2022", amount: 51.34 },
      ],
    },
    annualReviews: [
      {
        startDate: "14 Mar 2021",
        endDate: "13 Mar 2022",
        receivedPayments: [
          { date: "24 Aug 2021", amount: 51.34 },
          { date: "27 Jul 2021", amount: 51.34 },
          { date: "27 Jun 2021", amount: 44.67 },
          { date: "27 May 2021", amount: 49.01 },
          { date: "27 Apr 2021", amount: 45.34 },
          { date: "27 Mar 2021", amount: 51.34 },
        ],
      },
      {
        startDate: "14 Mar 2020",
        endDate: "13 Mar 2021",
        receivedPayments: [
          { date: "21 Feb 2021", amount: 51.34 },
          { date: "25 Jan 2021", amount: 50.34 },
          { date: "26 Dec 2020", amount: 18.01 },
          { date: "25 Nov 2020", amount: 44.67 },
          { date: "23 Oct 2020", amount: 44.67 },
          { date: "22 Sep 2020", amount: 51.34 },
          { date: "23 Aug 2020", amount: 51.34 },
          { date: "23 Jul 2020", amount: 51.34 },
          { date: "25 Jun 2020", amount: 51.34 },
          { date: "26 May 2020", amount: 51.34 },
          { date: "24 Apr 2020", amount: 51.34 },
          { date: "23 Mar 2020", amount: 51.34 },
        ],
      },
      {
        startDate: "14 Mar 2019",
        endDate: "13 Mar 2020",
        receivedPayments: [
          { date: "28 Feb 2020", amount: 51.34 },
          { date: "22 Jan 2020", amount: 48.67 },
          { date: "28 Dec 2019", amount: 14.67 },
          { date: "23 Nov 2019", amount: 37.01 },
          { date: "24 Oct 2019", amount: 51.34 },
          { date: "25 Sep 2019", amount: 51.34 },
          { date: "23 Aug 2019", amount: 51.34 },
          { date: "23 Jul 2019", amount: 51.34 },
          { date: "26 Jun 2019", amount: 29.67 },
          { date: "25 May 2019", amount: 51.34 },
          { date: "26 Apr 2019", amount: 51.34 },
          { date: "28 Mar 2019", amount: 51.34 },
        ],
      },
    ],
  },
  {
    name: newCasesData[2].name,
    combined: true,
    serviceType: "Collect and Pay",
    role: "PP",
    nextPayment: { date: "20 Sep 2021", amount: 154.02 },
    previousPayment: { date: "24 Aug 2021", amount: 125.23 },
    paymentPlan: {
      startDate: "14 Mar 2021",
      endDate: "13 Mar 2022",
      paymentFrequency: "monthly",
      paymentMethod: "Deduction from earnings order (DEO)",
      expectedPayments: [
        { date: "20 Mar 2021", amount: 102.68 },
        { date: "20 Apr 2021", amount: 102.68 },
        { date: "20 May 2021", amount: 102.68 },
        { date: "20 Jun 2021", amount: 102.68 },
        { date: "20 Jul 2021", amount: 102.68 },
        { date: "20 Aug 2021", amount: 102.68 },
        { date: "20 Sep 2021", amount: 102.68 },
        { date: "20 Oct 2021", amount: 102.68 },
        { date: "20 Nov 2021", amount: 102.68 },
        { date: "20 Dec 2021", amount: 102.68 },
        { date: "20 Jan 2022", amount: 102.68 },
        { date: "20 Feb 2022", amount: 102.68 },
      ],
    },
    annualReviews: [
      {
        startDate: "14 Mar 2021",
        endDate: "13 Mar 2022",
        receivedPayments: [
          { date: "24 Aug 2021", amount: 102.68 },
          { date: "27 Jul 2021", amount: 102.68 },
          { date: "27 Jun 2021", amount: 89.35 },
          { date: "27 May 2021", amount: 98.01 },
          { date: "27 Apr 2021", amount: 90.68 },
          { date: "27 Mar 2021", amount: 102.68 },
        ],
      },
      {
        startDate: "14 Mar 2020",
        endDate: "13 Mar 2021",
        receivedPayments: [
          { date: "21 Feb 2021", amount: 102.68 },
          { date: "25 Jan 2021", amount: 100.68 },
          { date: "26 Dec 2020", amount: 36.01 },
          { date: "25 Nov 2020", amount: 89.35 },
          { date: "23 Oct 2020", amount: 89.35 },
          { date: "22 Sep 2020", amount: 102.68 },
          { date: "23 Aug 2020", amount: 102.68 },
          { date: "23 Jul 2020", amount: 102.68 },
          { date: "25 Jun 2020", amount: 102.68 },
          { date: "26 May 2020", amount: 102.68 },
          { date: "24 Apr 2020", amount: 102.68 },
          { date: "23 Mar 2020", amount: 102.68 },
        ],
      },
      {
        startDate: "14 Mar 2019",
        endDate: "13 Mar 2020",
        receivedPayments: [
          { date: "28 Feb 2020", amount: 102.68 },
          { date: "22 Jan 2020", amount: 97.35 },
          { date: "28 Dec 2019", amount: 29.35 },
          { date: "23 Nov 2019", amount: 74.01 },
          { date: "24 Oct 2019", amount: 102.68 },
          { date: "25 Sep 2019", amount: 102.68 },
          { date: "23 Aug 2019", amount: 102.68 },
          { date: "23 Jul 2019", amount: 102.68 },
          { date: "26 Jun 2019", amount: 59.35 },
          { date: "25 May 2019", amount: 102.68 },
          { date: "26 Apr 2019", amount: 102.68 },
          { date: "28 Mar 2019", amount: 102.68 },
        ],
      },
    ],
    arrears: {
      owed: 5000,
      paid: 2500,
      charge: 30,
    },
  },
  {
    name: [newCasesData[1].name, newCasesData[2].name],
    serviceType: "Collect and Pay",
    role: "PP",
    nextPayment: { date: "20 Sep 2021", amount: 154.02 },
    previousPayment: { date: "24 Aug 2021", amount: 125.23 },
    paymentPlan: {
      startDate: "14 Mar 2021",
      endDate: "13 Mar 2022",
      paymentFrequency: "monthly",
      paymentMethod: "Deduction from earnings order (DEO)",
      expectedPayments: [
        { date: "20 Mar 2021", amount: 154.02 },
        { date: "20 Apr 2021", amount: 154.02 },
        { date: "20 May 2021", amount: 154.02 },
        { date: "20 Jun 2021", amount: 154.02 },
        { date: "20 Jul 2021", amount: 154.02 },
        { date: "20 Aug 2021", amount: 154.02 },
        { date: "20 Sep 2021", amount: 154.02 },
        { date: "20 Oct 2021", amount: 154.02 },
        { date: "20 Nov 2021", amount: 154.02 },
        { date: "20 Dec 2021", amount: 154.02 },
        { date: "20 Jan 2022", amount: 154.02 },
        { date: "20 Feb 2022", amount: 154.02 },
      ],
    },
    annualReviews: [
      {
        startDate: "14 Mar 2021",
        endDate: "13 Mar 2022",
        receivedPayments: [
          { date: "24 Aug 2021", amount: 154.02 },
          { date: "27 Jul 2021", amount: 154.02 },
          { date: "27 Jun 2021", amount: 134.02 },
          { date: "27 May 2021", amount: 147.02 },
          { date: "27 Apr 2021", amount: 136.02 },
          { date: "27 Mar 2021", amount: 154.02 },
        ],
      },
      {
        startDate: "14 Mar 2020",
        endDate: "13 Mar 2021",
        receivedPayments: [
          { date: "21 Feb 2021", amount: 154.02 },
          { date: "25 Jan 2021", amount: 151.02 },
          { date: "26 Dec 2020", amount: 54.02 },
          { date: "25 Nov 2020", amount: 34.02 },
          { date: "23 Oct 2020", amount: 134.02 },
          { date: "22 Sep 2020", amount: 154.02 },
          { date: "23 Aug 2020", amount: 154.02 },
          { date: "23 Jul 2020", amount: 154.02 },
          { date: "25 Jun 2020", amount: 154.02 },
          { date: "26 May 2020", amount: 154.02 },
          { date: "24 Apr 2020", amount: 154.02 },
          { date: "23 Mar 2020", amount: 154.02 },
        ],
      },
      {
        startDate: "14 Mar 2019",
        endDate: "13 Mar 2020",
        receivedPayments: [
          { date: "28 Feb 2020", amount: 154.02 },
          { date: "22 Jan 2020", amount: 151.02 },
          { date: "28 Dec 2019", amount: 54.02 },
          { date: "23 Nov 2019", amount: 34.02 },
          { date: "24 Oct 2019", amount: 134.02 },
          { date: "25 Sep 2019", amount: 154.02 },
          { date: "23 Aug 2019", amount: 154.02 },
          { date: "23 Jul 2019", amount: 154.02 },
          { date: "26 Jun 2019", amount: 154.02 },
          { date: "25 May 2019", amount: 154.02 },
          { date: "26 Apr 2019", amount: 154.02 },
          { date: "28 Mar 2019", amount: 154.02 },
        ],
      },
    ],
    arrears: {
      owed: 5000,
      paid: 2500,
      charge: 30,
    },
  },
];

// this should be converted to an array at some point
const changesData = {
  change0: {
    changeType: "Change bank details",
    status: "received",
    colour: "blue",
    submitted: "10 Jun 2021",
    updated: "10 Jun 2021",
    complete: "09 Jul 2021",
    case: newCasesData[0].name,
  },
  change1: {
    changeType: "Change to service type",
    status: "in-progress",
    colour: "yellow",
    submitted: "16 May 2021",
    updated: "05 June 2021",
    complete: "24 June 2021",
  },
  change2: {
    changeType: "Additional income",
    status: "completed",
    colour: "green",
    submitted: "06 Feb 2021",
    updated: "08 May 2021",
    complete: "03 Jun 2021",
    case: newCasesData[1].name,
  },
  change3: {
    changeType: "Shared care",
    status: "evidence-requested",
    colour: "purple",
    submitted: "08 Apr 2021",
    updated: "12 Apr 2021",
    complete: "19 June 2021",
  },
  change4: {
    changeType: "Full time education",
    status: "completed",
    colour: "green",
    submitted: "06 Sep 2020",
    updated: "19 Oct 2020",
    complete: "19 Oct 2020",
  },
  change5: {
    changeType: "Special expenses",
    status: "rejected",
    colour: "red",
    submitted: "12 Aug 2020",
    updated: "29 Aug 2020",
    complete: "20 Sep 2020",
  },
  change6: {
    changeType: "Change of income",
    status: "completed",
    colour: "green",
    submitted: "24 Mar 2020",
    updated: "06 Apr 2020",
    complete: "06 Apr 2020",
  },
};

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// If Education journey has been completed
if (sessionStorage.getItem("education")) {
  let newCompletedDate = new Date(
    new Date().setMonth(new Date().getMonth() + 2)
  );
  changesData[`change${Object.keys(changesData).length}`] = {
    changeType: "Education",
    status: "received",
    colour: "blue",
    submitted: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    updated: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    complete: newCompletedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
  };
}

// HOME
// SCREEN
// THANGS

if (window.location.href.includes("/home")) {
  const paymentsGrid = $("#payments-grid")[0];
  const homeCaseSelector = $("#home-case-selector")[0];
  const messagesTableBody = $("#messages-table-body")[0];
  const changesTableBody = $("#changes-table-body")[0];

  switch (userType) {
    case "RP":
      $("#update-income-useful-link").hide();
      break;
    case "PP":
      $("#missed-payment-useful-link").hide();
      break;
    case "DUAL":
      break;
  }

  // populate the case selector
  let caseSelectorHTML = newCasesData.map((caseName, i) => {
    return `
    <option value="${caseName.name}">${caseName.name}</option>
    `;
  });
  caseSelectorHTML.unshift(`<option value="all">All cases</option>`);

  homeCaseSelector.innerHTML = caseSelectorHTML.join("");

  // populate payment cards with payments
  const populatePayments = () => {
    let paymentsHTML = paymentsData.map((payment, i) => {
      // don't show combined cases for RPs
      if (userType == "RP") {
        if (!Array.isArray(payment.name)) {
          return `
        <div class="home-card payments-card" id="payment-${i}">
            <div class="card-header">
              <a href="payments/case-payment?case=${i}" class="govuk-link--no-visited-state">
                <h2>${payment.name}</h2>
              </a>
            </div>
            <div class="card-body">
              <p class="small govuk-!-margin-bottom-2">${
                payment.serviceType
              }</p>
              <h4 class="govuk-heading-s govuk-!-margin-bottom-1">Previous</h4>
              <div class="flex">
                <p class="small">${new Date(
                  payment.previousPayment.date
                ).toLocaleDateString("en-GB")}</p>
                <p class="small">£${payment.previousPayment.amount.toFixed(
                  2
                )}</p>
              </div>
              <h4 class="govuk-heading-s govuk-!-margin-bottom-1">Next</h4>
              <div class="flex">
                <p class="small">${new Date(
                  payment.nextPayment.date
                ).toLocaleDateString("en-GB")}</p>
                <p class="small">£${payment.nextPayment.amount.toFixed(2)}</p>
              </div>
              <a href="#" class="payment-card-link govuk-link--no-visited-state">Report a missed payment</a>
            </div>
          </div>
          `;
        }
      }
      //
      else {
        if (Array.isArray(payment.name)) {
          return `
          <div class="home-card payments-card" id="payment-${i}">
              <div class="card-header">
                <a href="payments/case-payment?case=${i}" class="govuk-link--no-visited-state">
                  <h2>${payment.name.length} cases</h2>
                </a>
              </div>
              <div class="card-body">
                <p class="small govuk-!-margin-bottom-2">${
                  payment.serviceType
                }</p>
                <h4 class="govuk-heading-s govuk-!-margin-bottom-1">Previous</h4>
                <div class="flex">
                  <p class="small">${new Date(
                    payment.previousPayment.date
                  ).toLocaleDateString("en-GB")}</p>
                  <p class="small">£${payment.previousPayment.amount.toFixed(
                    2
                  )}</p>
                </div>
                <h4 class="govuk-heading-s govuk-!-margin-bottom-1">Next</h4>
                <div class="flex">
                  <p class="small">${new Date(
                    payment.nextPayment.date
                  ).toLocaleDateString("en-GB")}</p>
                  <p class="small">£${payment.nextPayment.amount.toFixed(2)}</p>
                </div>
                <a href="#" class="payment-card-link govuk-link--no-visited-state">Report a missed payment</a>
              </div>
            </div>
            `;
        } else if (payment.combined) {
          return;
        } else {
          return `
        <div class="home-card payments-card" id="payment-${i}">
            <div class="card-header">
              <a href="payments/case-payment?case=${i}" class="govuk-link--no-visited-state">
                <h2>${payment.name}</h2>
              </a>
            </div>
            <div class="card-body">
              <p class="small govuk-!-margin-bottom-2">${
                payment.serviceType
              }</p>
              <h4 class="govuk-heading-s govuk-!-margin-bottom-1">Previous</h4>
              <div class="flex">
                <p class="small">${new Date(
                  payment.previousPayment.date
                ).toLocaleDateString("en-GB")}</p>
                <p class="small">£${payment.previousPayment.amount.toFixed(
                  2
                )}</p>
              </div>
              <h4 class="govuk-heading-s govuk-!-margin-bottom-1">Next</h4>
              <div class="flex">
                <p class="small">${new Date(
                  payment.nextPayment.date
                ).toLocaleDateString("en-GB")}</p>
                <p class="small">£${payment.nextPayment.amount.toFixed(2)}</p>
              </div>
              <a href="#" class="payment-card-link govuk-link--no-visited-state">Report a missed payment</a>
            </div>
          </div>
          `;
        }
      }
    });

    paymentsGrid.innerHTML = paymentsHTML.join("");
  };

  populatePayments();

  // change payment card links
  if (userType != "RP") {
    let paymentCardLinks = $(".payment-card-link")
    paymentCardLinks.each( index => {
      paymentCardLinks[index].innerText = "Update income"
    })
  }

  // populate messages
  const populateMessages = () => {
    let messagesHTML = Object.keys(receivedMessagesData).map(
      (receivedIndex) => {
        if (receivedIndex < 3) {
          let message = receivedMessagesData[receivedIndex];
          return `
      <tr class="govuk-table__row">
                <td scope="row" class="govuk-table__cell"><a href="#" class="butblack">${
                  message.title
                }</a></td>
                <td class="govuk-table__cell" id="date0">${new Date(
                  message.date
                ).toLocaleDateString("en-GB")}</td>
              </tr>
      `;
        }
      }
    );
    messagesTableBody.innerHTML = messagesHTML.join("");
  };

  populateMessages();

  // populate track changes
  const populateTrackChanges = () => {
    // sort data
    let ordered = Object.keys(changesData).sort((a, b) =>
      new Date(changesData[a].updated) < new Date(changesData[b].updated)
        ? 1
        : -1
    );

    // populate based on the sort
    let changesHTML = ordered.map((changeIndex, i) => {
      if (i < 3) {
        let change =
          changesData[`change${changeIndex[changeIndex.length - 1]}`];
        // console.log(change)
        return `
      <tr class="govuk-table__row">
        <td scope="row" class="govuk-table__cell" ><a href="/track-changes/change-details?change=${changeIndex}" class="butblack">${
          change.changeType
        }</a></td>
        <td class="govuk-table__cell">
          <strong class="govuk-tag govuk-tag--${change.colour}">
            ${
              change.status[0].toUpperCase() +
              change.status.slice(1).replace("-", " ")
            }
          </strong>
        </td>
      </tr>
      `;
      }
    });
    changesTableBody.innerHTML = changesHTML.join("");
  };

  populateTrackChanges();

  // const showCase = (e) => {
  //   console.log(e.target.value);
  //   if (e.target.value == "all") {
  //     populateMessages();
  //     populateTrackChanges();
  //     populatePayments();
  //   }
  //   else {
  //     // filter messages
  //     let filteredMessages = []
  //     Object.keys(receivedMessagesData).filter( index => {
  //       if (receivedMessagesData[index].case == e.target.value) {
  //           filteredMessages.unshift(receivedMessagesData[index])
  //         }
  //     } )
  //     console.log(filteredMessages)
  //     // show filtered messages
  //     // filter changes
  //     // show filtered changes
  //     // show filtered payments
  //     paymentsGrid.innerHTML = paymentsData.filter( payment => {
  //       if (payment.name == e.target.value) {
  //         return
  //       }
  //     } ) .join("");
  //   }
  // };

  // homeCaseSelector.addEventListener("change", showCase);
}

// PAYMENT
// SCREEN
// THANGS

if (window.location.href.includes("/payments/landing")) {
  const paymentsCasesTable = $("#payments-cases-table")[0];

  let paymentTableHTML = paymentsData.map((payment, i) => {
    // if it is a combined case
    if (Array.isArray(payment.name)) {
      if (userType == "RP") {
        return;
      }
      if (userType == "PP") {
        return `<tr class="govuk-table__row">
          <td class="govuk-table__cell"><a href="case-payment?case=${i}" class="govuk-!-font-size-16">Pay maintenance for ${
          payment.name.length
        } cases</a></td>
          <td class="govuk-table__cell">${payment.serviceType}</td>
          </td>`;
      }
      if (userType == "DUAL") {
        if (payment.role == "PP") {
          return `<tr class="govuk-table__row">
          <td class="govuk-table__cell"><a href="case-payment?case=${i}" class="govuk-!-font-size-16">Pay maintenance for ${
            payment.name.length
          } cases</a></td>
          <td class="govuk-table__cell">${payment.serviceType}</td>
          </td>`;
        }
        if (payment.role == "RP") {
          return `<tr class="govuk-table__row">
          <td class="govuk-table__cell"><a href="case-payment?case=${i}" class="govuk-!-font-size-16">Receive maintenance for ${
            payment.name.length
          } cases</a></td>
          <td class="govuk-table__cell">${payment.serviceType}</td>
          </td>`;
        }
      }
    } else {
      if (userType == "PP" || (userType == "DUAL" && payment.role == "PP")) {
        if (!payment.combined) {
          return `<tr class="govuk-table__row">
          <td class="govuk-table__cell"><a href="case-payment?case=${i}" class="govuk-!-font-size-16">Pay maintenance for ${
            payment.name
          }</a></td>
          <td class="govuk-table__cell">${payment.serviceType}</td>
          </td>`;
        }
      } else {
        return `<tr class="govuk-table__row">
          <td class="govuk-table__cell"><a href="case-payment?case=${i}" class="govuk-!-font-size-16">Receive maintenance for ${
          payment.name
        }</a></td>
          <td class="govuk-table__cell">${payment.serviceType}</td>
          </td>`;
      }
    }
  });

  paymentsCasesTable.innerHTML = paymentTableHTML.join("");
}


if (window.location.href.includes("/payments/case-payment")) {
  const casePaymentCaseName = $("#case-payment-case-name")[0];
  const casePaymentServiceType = $("#case-payment-service-type")[0];
  // const casePaymentFrequency = $("#case-payment-frequency")[0];
  const casePaymentReviewDate = $("#case-payment-review-date")[0];
  const casePaymentReviewMultipleDate = $(
    "#case-payment-review-multiple-date"
  )[0];
  const casePaymentAmount = $("#case-payment-amount")[0];
  const casePaymentFeeSpans = $(".case-payment-fee-spans");
  const casePaymentDate = $("#case-payment-date")[0];
  const casePaymentMethod = $("#case-payment-method")[0];
  const casePaymentMethodDiv = $("#case-payment-method-div");
  const casePaymentPastReview = $("#case-payment-past-review")[0];
  const casePaymentTotalAmount = $("#case-payment-total-amount")[0];
  const casePaymentRecentPaymentsDiv = $("#case-payments-recent-payments-div");
  const casePaymentArrearsDiv = $("#case-payments-arrears-div");
  const casePaymentDirectRPDiv = $("#case-payment-direct-rp-div");
  const casePaymentCollectRPPara = $("#case-payment-collect-rp-para");
  const casePaymentRecentPaymentsBody = $(
    "#case-payment-recent-payments-body"
  )[0];
  const paidReceived = $(".paid-received");
  const madeReceived = $("#made-received")[0];
  const casePaymentEnforcementDiv = $("#case-payment-enforcement-div");
  const casePaymentArrearsOwed = $("#case-payment-arrears-owed")[0];
  const casePaymentArrearsPaid = $("#case-payment-arrears-paid")[0];
  const casePaymentEnforcementCharge = $("#case-payment-enforcement-charge")[0];
  const casePaymentIntroDiv = $("#case-payment-intro-div");
  const casePaymentIntroMultipleDiv = $("#case-payment-intro-multiple-div");
  const casePaymentNamesUl = $("#case-payment-names-ul")[0];
  const casePaymentExpectedAmount = $("#case-payment-expected-amount")[0];
  const allPaymentsLink = $("#all-payments-link")[0];
  const casePaymentRPCollectMethod = $("#case-payment-RP-collect-method")[0];
  const casePaymentCollectTotalAmount = $("#case-payment-collect-total-amount");


  if (urlParams.get("case")) {
    let caseNum = urlParams.get("case");

    allPaymentsLink.href = `/payments/all-payments?case=${caseNum}&annualReview=0`;

    // if multiple cases combined
    if (Array.isArray(paymentsData[caseNum].name)) {
      casePaymentCaseName.innerText = `${paymentsData[caseNum].name.length} cases`;
      casePaymentIntroDiv.hide();
      let casePaymentNamesHTML = paymentsData[caseNum].name.map((name) => {
        return `<li>${name}</li>`;
      });
      casePaymentNamesUl.innerHTML = casePaymentNamesHTML.join("");
    } else {
      casePaymentCaseName.innerText = paymentsData[caseNum].name;
      casePaymentIntroMultipleDiv.hide();
    }

    casePaymentServiceType.innerText = paymentsData[caseNum].serviceType;
    casePaymentReviewDate.innerText = new Date(
      paymentsData[caseNum].annualReviews[0].endDate
    ).toLocaleDateString("en-UK", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    // Summary info
    if (paymentsData[caseNum].serviceType == "Direct Pay") {
      casePaymentFeeSpans.hide();
      casePaymentMethodDiv.hide();
      if (userType == "RP") casePaymentExpectedAmount.innerText = "Expected amount"
    }

    if (
      userType == "PP" ||
      (userType == "DUAL" && paymentsData[caseNum].role == "PP")
    ) {
      casePaymentFeeSpans.each((index) => {
        casePaymentFeeSpans[index].innerText = "including 20% collection fee";
      });
      paidReceived.each((index) => {
        paidReceived[index].innerText = "paid";
      });
      madeReceived.innerText = "made";
    }

    casePaymentAmount.innerHTML =
      paymentsData[caseNum].nextPayment.amount.toFixed(2);
    // casePaymentFrequency.innerHTML =
    //   paymentsData[caseNum].paymentPlan.paymentFrequency;

    // show month(th)ly or day of the week
    if (paymentsData[caseNum].paymentPlan.paymentFrequency == "month") {
      casePaymentDate.innerText = `${new Date(
        paymentsData[caseNum].nextPayment.date
      ).toLocaleDateString("en-UK", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })}`;
    } else if (paymentsData[caseNum].paymentPlan.paymentFrequency == "week") {
      casePaymentDate.innerText = `${new Date(
        paymentsData[caseNum].nextPayment.date
      ).toLocaleDateString("en-UK", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })}`;
    }

    if (paymentsData[caseNum].serviceType == "Collect and Pay") {
      casePaymentMethod.innerText =
        paymentsData[caseNum].paymentPlan.paymentMethod;
        casePaymentDate.innerText = `${new Date(
          paymentsData[caseNum].nextPayment.date
        ).toLocaleDateString("en-UK", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}`
        casePaymentCollectTotalAmount.hide();
      if (userType == "RP") casePaymentRPCollectMethod.innerText = "Collection method"
    }

    casePaymentPastReview.innerText = new Date(
      paymentsData[caseNum].annualReviews[0].startDate
    ).toLocaleDateString("en-UK", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    let calcuatedTotal = 0;
    paymentsData[caseNum].annualReviews[0].receivedPayments.forEach(
      (payment) => {
        calcuatedTotal += payment.amount;
      }
    );
    casePaymentTotalAmount.innerText = calcuatedTotal.toFixed(2);

    // Recent Payments
    if (paymentsData[caseNum].serviceType == "Direct Pay") {
      casePaymentRecentPaymentsDiv.hide();
      casePaymentArrearsDiv.hide();
      casePaymentDirectRPDiv.hide();
      if (userType == "RP") {
        casePaymentDirectRPDiv.show();
      }
    }
    else {
      let RecentPaymentsTableHTML = paymentsData[
        caseNum
      ].annualReviews[0].receivedPayments.map((payment, i) => {
        if (i > 2) {
          return;
        } else {
          return `<tr class="govuk-table__row">
            <th scope="row" class="govuk-table__header">${payment.date}</th>
            <td class="govuk-table__cell">£${payment.amount.toFixed(2)}</td>
            <td class="govuk-table__cell">${paymentsData[caseNum].paymentPlan.paymentMethod}</td>
             </tr>`;
        }
      });

      casePaymentRecentPaymentsBody.innerHTML =
        RecentPaymentsTableHTML.join("");
    }
    if (
      paymentsData[caseNum].serviceType == "Collect and Pay" &&
      userType != "RP"
    ) {
      casePaymentCollectRPPara.hide();
    }

    // // Arrears
    // if (paymentsData[caseNum].arrears) {
    //   if (
    //     userType == "RP" ||
    //     (userType == "DUAL" && paymentsData[caseNum].role == "RP")
    //   ) {
    //     casePaymentEnforcementDiv.hide();
    //   }
    //   casePaymentArrearsOwed.innerText = `£${paymentsData[
    //     caseNum
    //   ].arrears.owed.toFixed(2)}`;
    //   casePaymentArrearsPaid.innerText = `£${paymentsData[
    //     caseNum
    //   ].arrears.paid.toFixed(2)}`;
    //   casePaymentEnforcementCharge.innerText = `£${paymentsData[
    //     caseNum
    //   ].arrears.charge.toFixed(2)}`;
    //   casePaymentArrearsDiv.show();
    // } else {
    //   casePaymentArrearsDiv.hide();
    // }
  }
}

//All payments
if (window.location.href.includes("/payments/all-payments")){
  const allPaymentCaseName = $("#all-payment-case-name")[0];
  const allPaymentsDateFrom = $("#all-payments-date-from")[0];
  const allPaymentsDateTo = $("#all-payments-date-to")[0];
  const allPaymentsSwitcherLink = $("#all-payments-switcher-link")[0];
  const breadcrumbCasePayments = $("#all-payments-breadcrumb-payments")[0];

  //Get the current case from the url parameter
  if (urlParams.get("case")) {
    let caseNum = urlParams.get("case"); //Set the caseNum variable to URL case parameter
    let annualRev = urlParams.get("annualReview");

    allPaymentsSwitcherLink.href = `/payments/payment-period?case=${caseNum}&annualReview=${annualRev}`;
    breadcrumbCasePayments.href = `/payments/case-payment?case=${caseNum}`;

    allPaymentCaseName.innerText = paymentsData[caseNum].name;

    if(Array.isArray(paymentsData[caseNum].name)){
      allPaymentCaseName.innerText = `${paymentsData[caseNum].name.length} cases`;
    }

    //Payment period dates
    allPaymentsDateFrom.innerText = new Date(paymentsData[caseNum].annualReviews[annualRev].startDate).toLocaleDateString("en-UK", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    allPaymentsDateTo.innerText = new Date(paymentsData[caseNum].annualReviews[annualRev].endDate).toLocaleDateString("en-UK", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    //Payments table
    const allPaymentsTable = $("#all-payments-table")[0];
    let allPaymentsTableHTML = paymentsData[caseNum].annualReviews[annualRev].receivedPayments.map((payment, i) => {
        return `<tr class="govuk-table__row">
                  <th scope="row" class="govuk-table__header">${payment.date}</th>
                  <td class="govuk-table__cell govuk-table__cell--numeric">${payment.amount}</td>
                  <td class="govuk-table__cell govuk-table__cell">Ongoing child maintenance</td>
                </tr>`;
    });
    allPaymentsTable.innerHTML = allPaymentsTableHTML.join("");
  }
}

//Payment period selection
if (window.location.href.includes("/payments/payment-period")){
  const paymentPeriodContinue = $("#payment-period-continue")[0];
  const breadcrumbCasePayments = $("#payment-period-breadcrumb-payments")[0];
  const breadcrumbAllPayments = $("#payment-period-breadcrumb-all-payments")[0];

  if (urlParams.get("case")) {
    let caseNum = urlParams.get("case"); //Set the caseNum variable to URL case parameter
    let annualRev = urlParams.get("annualReview");
    paymentPeriodContinue.href = `all-payments?case=${caseNum}&annualReview=${annualRev}`;
    breadcrumbCasePayments.href = `/payments/case-payment?case=${caseNum}`;
    breadcrumbAllPayments.href = `/payments/all-payments?case=${caseNum}&annualReview=${annualRev}`;

    const paymentPeriodDateRadio = $("#payment-period-date-radio")[0];
    let paymentPeriodDateRadioHTML = paymentsData[caseNum].annualReviews.map((payment, i) => {
        return `<div class="govuk-radios__item">
                  <input class="govuk-radios__input" id="date-range-${i}" name="date-range" type="radio" value="${i}">
                  <label class="govuk-label govuk-radios__label" for="date-range-${i}">
                    ${payment.startDate} to ${payment.endDate}
                  </label>
                </div>`;
    });
    paymentPeriodDateRadio.innerHTML = paymentPeriodDateRadioHTML.join("");
    const radioList = $(".govuk-radios__input");
    radioList.each(index => {
      radioList[index].addEventListener("change", (e) => {
        paymentPeriodContinue.href = `all-payments?case=${caseNum}&annualReview=${e.target.value}`;
      });
    })
  }
}

// OLD
// PAYMENT
// SCREEN
// THANGS

if ("hell freezes over" == "today") {
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
}

// TRACK
// CHANGES
// PAGES

if (window.location.href.includes("/track-changes/track-changes")) {
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
  const applyFilterButton = $(".govuk-button--secondary")[0];

  // set an empty result
  let changesKeys = Object.keys(changesData);
  let filteredChangeData = {};
  let statusFilters = [];
  let isSubmittedAfter = false;
  let isSubmittedBefore = false;
  let submittedAfterDate = {};
  let submittedBeforeDate = {};

  if (sessionStorage.getItem("newMessage")) {
    changesData[`change${Object.keys(changesData).length}`] = {
      changeType: sessionStorage.getItem("newMessageTitle"),
      status: "received",
      colour: "blue",
      submitted: new Date().toLocaleDateString("en-UK", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      updated: new Date().toLocaleDateString("en-UK", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };
    changesKeys = Object.keys(changesData);
    console.log(changesData);
  }

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
        // submittedFacets.show();
        // submittedAfterFacet[0].innerHTML = `<p id="submitted-after-date" class="govuk-!-margin-bottom-0">${submittedAfterDate.toLocaleDateString(
        //   "en-UK",
        //   { day: "numeric", month: "long", year: "numeric" }
        // )}</p>`;
        // submittedAfterFacet.show();
      } else {
        console.log("aint a date");
        isSubmittedAfter = false;
        submittedAfterFacet.hide();
      }

      // applyFilter();
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
        // submittedFacets.show();
        // submittedBeforeFacet[0].innerHTML = `<p class="govuk-!-margin-bottom-0">${submittedBeforeDate.toLocaleDateString(
        //   "en-UK",
        //   { day: "numeric", month: "long", year: "numeric" }
        // )}</p>`;
        // submittedBeforeFacet.show();
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

      // applyFilter();
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

    newDataKeys.sort((a, b) =>
      new Date(changesData[a].updated) < new Date(changesData[b].updated)
        ? 1
        : -1
    );

    // add that to the screen
    newHTML = newDataKeys.map((key) => {
      let change = changesData[key];
      if (change.link && change.case) {
        return `<tr class="govuk-table__row">
    					<th scope="row" class="govuk-table__header"><a
    							class="table-row-subject govuk-link--no-visited-state" href="${
                    change.link
                  }">${change.changeType}</a>
    						<div class="changes-date-container govuk-!-margin-bottom-3">
    							<span class="table-row-change-date submitted-date">Submitted: ${
                    change.submitted
                  }</span>
    							<span class="table-row-change-date updated-date">Updated: ${
                    change.updated
                  }</span>
    						</div>
                <h4 class="govuk-heading-s govuk-!-margin-bottom-0 secondary">${
                  change.case
                }</h4>
    					</th>
    					<td class="govuk-table__cell table-row-date"><strong
    							class="govuk-tag govuk-tag--${change.colour}">${change.status.replace(
          "-",
          " "
        )}</strong></td>
    				</tr> `;
      } else if (change.case) {
        return `<tr class="govuk-table__row">
    					<th scope="row" class="govuk-table__header"><a
    							class="table-row-subject govuk-link--no-visited-state" href="change-details?change=${key}">${
          change.changeType
        }</a>
    						<div class="changes-date-container govuk-!-margin-bottom-3">
    							<span class="table-row-change-date submitted-date">Submitted: ${
                    change.submitted
                  }</span>
    							<span class="table-row-change-date updated-date">Updated: ${
                    change.updated
                  }</span>
    						</div>
                <h4 class="govuk-heading-s govuk-!-margin-bottom-0 secondary">${
                  change.case
                }</h4>
    					</th>
    					<td class="govuk-table__cell table-row-date"><strong
    							class="govuk-tag govuk-tag--${change.colour}">${change.status.replace(
          "-",
          " "
        )}</strong>

        </td>

    				</tr> `;
      } else if (change.link) {
        return `<tr class="govuk-table__row">
    					<th scope="row" class="govuk-table__header"><a
    							class="table-row-subject govuk-link--no-visited-state" href="${
                    change.link
                  }">${change.changeType}</a>
    						<div class="changes-date-container">
    							<span class="table-row-change-date submitted-date">Submitted: ${
                    change.submitted
                  }</span>
    							<span class="table-row-change-date updated-date">Updated: ${
                    change.updated
                  }</span>
    						</div>
    					</th>
    					<td class="govuk-table__cell table-row-date"><strong
    							class="govuk-tag govuk-tag--${change.colour}">${change.status.replace(
          "-",
          " "
        )}</strong></td>
    				</tr> `;
      } else {
        return `<tr class="govuk-table__row">
    					<th scope="row" class="govuk-table__header"><a
    							class="table-row-subject govuk-link--no-visited-state" href="change-details?change=${key}">${
          change.changeType
        }</a>
    						<div class="changes-date-container">
    							<span class="table-row-change-date submitted-date">Submitted: ${
                    change.submitted
                  }</span>
    							<span class="table-row-change-date updated-date">Updated: ${
                    change.updated
                  }</span>
    						</div>
    					</th>
    					<td class="govuk-table__cell table-row-date"><strong
    							class="govuk-tag govuk-tag--${change.colour}">${change.status.replace(
          "-",
          " "
        )}</strong></td>
    				</tr> `;
      }
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
    // $(`#status-${e.target.value}`)[0].checked = false;

    // remove facet tag
    // $(`#facet-${e.target.value}`).remove();

    // remove from status filters
    const index = statusFilters.indexOf(e.target.value);
    statusFilters.splice(index, 1);

    // if (statusFilters.length == 0) {
    //   statusFacets.hide();
    // }

    // applyFilter();
  };

  const addStatus = (e) => {
    // // show status container
    // statusFacets.show();
    // // add facet tag
    // statusFacets.append(
    //   `<div id="facet-${e.target.value}" class="facet-tag status-facet-tag"
    // }>
    // 				<p class="govuk-!-margin-bottom-0">
    //         ${
    //           e.target.value.charAt(0).toUpperCase() +
    //           e.target.value.slice(1).replace("-", " ")
    //         }
    //         </p>
    // 			</div>`
    // );
    // // add event listener to new facet

    // $(`#facet-${e.target.value}`)[0].addEventListener("click", function () {
    //   // uncheck checkbox
    //   $(`#status-${e.target.value}`)[0].checked = false;

    //   // remove facet tag
    //   $(`#facet-${e.target.value}`).remove();

    //   // remove from status filters
    //   const index = statusFilters.indexOf(e.target.value);
    //   statusFilters.splice(index, 1);

    //   if (statusFilters.length == 0) {
    //     statusFacets.hide();
    //   }

    //   applyFilter();
    // });

    // add to status filters
    statusFilters.push(e.target.value);

    // applyFilter();
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
    // clear status facets
    $(".status-facet-tag").each((tag) => {
      console.log(tag);
      $(".status-facet-tag")[tag].remove();
    });
    statusFacets.hide();

    // if status filter is applied
    if (statusFilters.length) {
      console.log("we have ", statusFilters.length, " status filters applied");
      filteredChangeData = {};

      statusFilters.forEach((status) => {
        // add facet tag
        // show status container
        statusFacets.show();
        // add facet tag
        statusFacets.append(
          `<div id="facet-${status}" class="facet-tag status-facet-tag"
    }>
						<p class="govuk-!-margin-bottom-0">
            ${
              status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")
            }
            </p>
					</div>`
        );
        // add event listener to new facet

        $(`#facet-${status}`)[0].addEventListener("click", function () {
          // uncheck checkbox
          $(`#status-${status}`)[0].checked = false;

          // remove facet tag
          $(`#facet-${status}`).remove();

          // remove from status filters
          const index = statusFilters.indexOf(status);
          statusFilters.splice(index, 1);

          if (statusFilters.length == 0) {
            statusFacets.hide();
          }

          applyFilter();
        });

        // filter data
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

    // add facet tags

    // console.log("after status filtering: ", filteredChangeData);
    // then if date filter is applied

    // go through filteredData

    // filter by date
    if (isSubmittedAfter) {
      // add date facet tag
      submittedFacets.show();
      submittedAfterFacet[0].innerHTML = `<p id="submitted-after-date" class="govuk-!-margin-bottom-0">${submittedAfterDate.toLocaleDateString(
        "en-UK",
        { day: "numeric", month: "long", year: "numeric" }
      )}</p>`;
      submittedAfterFacet.show();
      // filter data
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
      // add date facet tag
      submittedFacets.show();
      submittedBeforeFacet[0].innerHTML = `<p class="govuk-!-margin-bottom-0">${submittedBeforeDate.toLocaleDateString(
        "en-UK",
        { day: "numeric", month: "long", year: "numeric" }
      )}</p>`;
      submittedBeforeFacet.show();
      // filter data
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

  changeCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", filterStatus);
  });

  applyFilterButton.addEventListener("click", applyFilter);

  populateTrackChanges([]);
}

if (window.location.href.includes("change-details")) {
  urlParams = new URLSearchParams(window.location.search);
  let changeNum = urlParams.get("change");

  const changeDetailsTitle = $("#change-details-title")[0];
  const changeDetailsTag = $("#change-details-tag")[0];
  const changeDetailsDesc = $("#change-details-description")[0];
  const changeCompletionDate = $("#change-completion-date");
  const reportTimelineBody = $("#report-timeline-body")[0];
  const changeDetailsCase = $("#change-details-case")[0];
  const uploadEvidence = $("#upload-evidence");
  const uploadedDiv = $("#uploaded-div");
  const completionDate = $("#completion-date")[0];

  const timelineData = {
    received: [
      {
        date: "1 January 2021",
        status: "received",
        tag: "blue",
        desc: "We are assigning your report to a case worker",
      },
    ],
    inProgress: [
      {
        date: "10 February 2021",
        status: "in progress",
        tag: "yellow",
        desc: "Case worker administration",
      },
      {
        date: "25 January 2021",
        status: "in progress",
        tag: "yellow",
        desc: "Third party involvement<br/><br/>We are speaking to a third party to get further information.",
      },
      {
        date: "8 January 2021",
        status: "received",
        tag: "yellow",
        desc: "Assigned<br/><br/>A case worker has started working on your report.",
      },
      {
        date: "1 January 2021",
        status: "received",
        tag: "blue",
        desc: "We are assigning your report to a case worker",
      },
    ],
    evidenceRequested: [
      {
        date: "10 February 2021",
        status: "evidence requested",
        tag: "purple",
        desc: "We need evidence to support the change you have reported",
      },
      {
        date: "25 January 2021",
        status: "in progress",
        tag: "yellow",
        desc: "Third party involvement<br/><br/>We are speaking to a third party to get further information.",
      },
      {
        date: "8 January 2021",
        status: "received",
        tag: "yellow",
        desc: "Assigned<br/><br/>A case worker has started working on your report.",
      },
      {
        date: "1 January 2021",
        status: "received",
        tag: "blue",
        desc: "We are assigning your report to a case worker",
      },
    ],
    completed: [
      {
        date: "10 February 2021",
        status: "completed",
        tag: "green",
        desc: "We have completed and closed your change report.",
      },
      {
        date: "25 January 2021",
        status: "in progress",
        tag: "yellow",
        desc: "Third party involvement<br/><br/>We are speaking to a third party to get further information.",
      },
      {
        date: "8 January 2021",
        status: "received",
        tag: "yellow",
        desc: "Assigned<br/><br/>A case worker has started working on your report.",
      },
      {
        date: "1 January 2021",
        status: "received",
        tag: "blue",
        desc: "We are assigning your report to a case worker",
      },
    ],
    rejected: [
      {
        date: "10 February 2021",
        status: "rejected",
        tag: "red",
        desc: "Your change has been rejected and we have closed your report.",
      },
      {
        date: "25 January 2021",
        status: "in progress",
        tag: "yellow",
        desc: "Third party involvement<br/><br/>We are speaking to a third party to get further information.",
      },
      {
        date: "8 January 2021",
        status: "received",
        tag: "yellow",
        desc: "Assigned<br/><br/>A case worker has started working on your report.",
      },
      {
        date: "1 January 2021",
        status: "received",
        tag: "blue",
        desc: "We are assigning your report to a case worker",
      },
    ],
  };

  const populateReportTimeline = (type) => {
    // populate with default dates
    timelineData[type].forEach((update, i) => {
      reportTimelineBody.innerHTML += `
      <div class="timeline-wrapper">
        <div class="timeline-body">
          <h3 id="update-${i}" class="govuk-heading-m">${update.date}</h3>
          <strong class="govuk-tag govuk-tag--${update.tag} govuk-!-margin-bottom-5">${update.status}</strong>
          <p>${update.desc}</p>
        </div>
      </div>
      `;
    });
    // work out dates based on submitted and updated dates
    let d0 = new Date(changesData[changeNum].updated);
    $("#update-0")[0].innerText = d0.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    try {
      $("#update-1")[0].innerText = new Date(
        d0.setDate(d0.getDate() - 1)
      ).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      $("#update-2")[0].innerText = new Date(
        d0.setDate(d0.getDate() - 1)
      ).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      $("#update-3")[0].innerText = new Date(
        changesData[changeNum].submitted
      ).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    } catch (err) {}
  };

  // Insert correct values on the change details page
  changeDetailsTitle.innerText = `${changesData[changeNum].changeType}`;
  changeDetailsTag.classList = `govuk-tag govuk-tag--${changesData[changeNum].colour} govuk-!-margin-bottom-5`;
  changeDetailsTag.innerText = `${changesData[changeNum].status.replace(
    "-",
    " "
  )}`;
  completionDate.innerText = new Date(
    changesData[changeNum].complete
  ).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  if (changesData[changeNum].case) {
    changeDetailsCase.innerText = `${changesData[changeNum].case}`;
  }
  // changeDateSubmitted.innerText = `Submitted: ${new Date(changesData[changeNum].submitted).toLocaleDateString("en-GB", {day: "2-digit", month: "long", year: "numeric",})}`

  switch (changesData[changeNum].status) {
    case "received":
      changeDetailsDesc.innerHTML =
        "We are assigning your report to a case worker who will start working on it within 7 days. Once your report has been assigned, we will change the status to in progress.";
      populateReportTimeline("received");
      break;
    case "in-progress":
      changeDetailsDesc.innerHTML =
        "We are currently working on your report.<br/><br/>We provide the most up to date status information that we have and are doing all we can to progress your report. There may be multiple steps we have take while your report is in progress, such as speaking to the other parent or working with another government organisation.<br/><br/>We will contact you when the change is complete or if we need more information. You do not need to contact us.";
      populateReportTimeline("inProgress");
      break;
    case "evidence-requested":
      changeDetailsDesc.innerHTML = `If we need evidence from:
      <ul>
      <li>you, we have sent you a message. <a class="govuk-link--no-visited-state" href="/messages/messages">View messages and contact history</a> to see see if you need to upload evidence.</li>
      <li>the other parent, you will not have received a message from us. You do not need to do anything.</li>
      </ul>`;
      populateReportTimeline("evidenceRequested");
      break;
    case "completed":
      changeDetailsDesc.innerHTML = `We have completed and closed your change report. Your change has been accepted and we have sent you a <a href="#">confirmation letter.</a>`;
      changeCompletionDate.hide();
      uploadEvidence.hide();
      populateReportTimeline("completed");
      break;
    case "rejected":
      changeDetailsDesc.innerHTML = `We have completed and closed your change report. Your change has been rejected and we have sent you a <a href="#">letter explaining why.</a>`;
      changeCompletionDate.hide();
      uploadEvidence.hide();
      uploadedDiv.show();
      populateReportTimeline("rejected");
      break;
  }
}

//
// MESSAGES
// PAGE
//

if (window.location.href.includes("/messages/messages")) {
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
}

// REPORT
// A
// CHANGE

if (window.location.href.includes("/report-a-change")) {
  if (window.location.href.includes("/report-a-change/landing")) {
    if (userType == "RP") {
      $("#income-and-expenses-link-h2")[0].innerText = "Income";
      $("#income-and-expenses-para")[0].innerText =
        "Report any changes to income";
    }
  }

  if (window.location.href.includes("/report-a-change/income/income-landing")) {
    if (userType == "RP") {
      $("#special-expenses-row").hide();
      $("#income-and-expenses-title")[0].innerText = "Income";
      $("#income-and-expenses-breadcrumb")[0].innerText = "Income";
    }
  }

  if (window.location.href.includes("education/start")) {
    // add new change when start Change Children button is clicked

    const startEducationButton = $("#start-education-button")[0];

    startEducationButton.addEventListener("click", (e) => {
      e.preventDefault();
      sessionStorage.setItem("education", true);
      console.log("Doing the ting");
      window.location.href = window.location.href.replace(
        "/start",
        "/select-child"
      );
    });
  }
}

if (window.location.href.includes("/case-details/landing")) {
  if (userType == "RP") {
    $(
      "#income-details-div"
    )[0].innerHTML = `<a class="govuk-link--no-visited-state">
    <h2 class="govuk-!-margin-bottom-1">Income details</h2>
    </a>
    <p>As you don't pay child maintenance, we don't record your income details.</p>`;
  }
}
