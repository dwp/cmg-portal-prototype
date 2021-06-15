const express = require('express')
const router = express.Router()


// Add your routes here - above the module.exports line

// Message subject branch
router.post('/messages/send-a-message/message-subject-answer', function (req, res) {

  const messageSubject = req.session.data['message-subject']

  if (messageSubject == 'Responding to a request from the Child Maintenance Service' ||
      messageSubject == 'Payment calculation query' ||
      messageSubject == 'Payment schedule query' ||
      messageSubject == 'General query' ||
      messageSubject == 'About my method of payment' ||
      messageSubject == 'Other change' ||
      messageSubject == 'Make a complaint') {
    // Go to case selection
    res.redirect('/messages/send-a-message/case-select');
  } else {
    // transform radio selectio to lower case
    req.session.data['message-subject-lower'] = req.session.data['message-subject'].toLowerCase();
    // Go to report a change start page
    res.redirect('/messages/send-a-message/report-immediately')
  }
})

// Report a change now branch
router.post('/messages/send-a-message/report-immediately-answer', function (req, res) {

  const messageSubject = req.session.data['message-subject'];
  const reportNow = req.session.data['report-now'];

  if (reportNow == 'Yes, report immediately' && messageSubject == 'Missed payment') {
    // Go to missed payments start
    res.redirect('../../report-a-change/report-missed-payment')
  } else if(reportNow == 'Yes, report immediately' && messageSubject == 'Change to number of children in your household') {
    // Go to supporting another child
    res.redirect('../../report-a-change/number-of-children')
  } else if(reportNow == 'Yes, report immediately' && messageSubject == 'Change of income') {
    // Go to change of income start page
    res.redirect('../../report-a-change/change-income')
  } else{
    // Go to case select
    res.redirect('/messages/send-a-message/case-select')
  }

})

// new sent messages
router.post('/messages/send-a-message/declaration-answer', function(req, res){
  req.session.data['sent-new-message'] = "true";
  console.log(req.session.data['sent-new-message']);
  res.redirect('/messages/send-a-message/confirmation');
})

module.exports = router
