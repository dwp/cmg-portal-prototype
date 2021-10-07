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

// export {sentMessagesData, receivedMessagesData}

module.exports = {sentMessagesData, receivedMessagesData}