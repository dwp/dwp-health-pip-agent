const express = require('express')
const path = require('path')

const router = new express.Router()

function makeAStay(data) {
  const admission = new Date(`${data['admission-year']}-${data['admission-month']}-${data['admission-day']}`)
  const discharge = new Date(`${data['discharge-year']}-${data['discharge-month']}-${data['discharge-day']}`)
  const totalDays = Math.max(differenceInDays(discharge, admission) - 1, 0)
  return {admission, discharge, totalDays}
}

// PDF DOWNLOADER
router.use(`/pip-letter.pdf`, express.static(path.resolve('app/views/agent-0-7/pip-letter.pdf')))
router.use(`/pip-doc1.pdf`, express.static(path.resolve('app/views/agent-0-7/pip-doc1.pdf')))
router.use(`/pip-doc2.pdf`, express.static(path.resolve('app/views/agent-0-7/pip-doc2.pdf')))
router.use(`/pip-doc3.pdf`, express.static(path.resolve('app/views/agent-0-7/pip-doc3.pdf')))
router.use(`/pip-doc4.pdf`, express.static(path.resolve('app/views/agent-0-7/pip-doc4.pdf')))
router.use(`/pip-doc5.pdf`, express.static(path.resolve('app/views/agent-0-7/pip-doc5.pdf')))
router.use(`/pip-doc8.pdf`, express.static(path.resolve('app/views/agent-0-7/pip-doc8.pdf')))

// —————————————————————————————————


router.post(`/test-radio-router`, (req, res) => {
  const testRadio = req.session.data['test-router']

  if (testRadio == 'test1') {
    res.redirect(`xx1`)
  }
  else if (testRadio == 'test2') {
    res.redirect(`xx2`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/system-application-selector-router`, (req, res) => {
  const applicationSelector = req.session.data['system-application-selector']

  if (applicationSelector == '1') {
    res.redirect(`application-6-overview`)
  }
  else if (applicationSelector == '2') {
    res.redirect(`application-6-overview`)
  }
  else if (applicationSelector == '3') {
    res.redirect(`award-dates-data-input`)
  }
  else if (applicationSelector == '4') {
    res.redirect(`preparation-linear-overview`)
  }
  else if (applicationSelector == '0') {
    res.redirect(`assurance-mm-tasklist`)
  }
  else if (applicationSelector == '05') {
    res.redirect(`assurance-linear-overview`)
  }
  else if (applicationSelector == '5') {
    res.redirect(`ftc-make-contact`)
  }
  else if (applicationSelector == '6') {
    res.redirect(`fta-make-contact`)
  }
  else if (applicationSelector == '7') {
    res.redirect(`preparation-linear-overview`)
  }
  else if (applicationSelector == '8') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/system-myopentasks-selector-router`, (req, res) => {
  const openTaskSelector = req.session.data['system-myopentasks-selector']

  if (openTaskSelector == '1') {
    res.redirect(`my-open-tasks`)
  }
  else if (openTaskSelector == '2') {
    res.redirect(`my-open-tasks`)
  }
   else {
    res.redirect(`XXX`)
  }
})




router.post(`/section-4-add-1-router`, (req, res) => {
  const add1 = req.session.data['section-4-add-1']

  if (add1 == 'Yes') {
    res.redirect(`section-4-hcp-1`)
  }
  else if (add1 == 'No') {
    res.redirect(`cya-4`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/section-4-add-2-router`, (req, res) => {
  const add2 = req.session.data['section-4-add-2']

  if (add2 == 'Yes') {
    res.redirect(`section-4-hcp-2`)
  }
  else if (add2 == 'No') {
    res.redirect(`cya-4`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/section-4-add-3-router`, (req, res) => {
  const add3 = req.session.data['section-4-add-3']

  if (add3== 'Yes') {
    res.redirect(`section-4-hcp-3`)
  }
  else if (add3 == 'No') {
    res.redirect(`cya-4`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/application-1-outcome-letter-check-router`, (req, res) => {
  const letterEdit = req.session.data['application-1-outcome-letter-check']

  if (letterEdit== 'Yes') {
    res.redirect(`application-1-letter-edit`)
  }
  else if (letterEdit == 'No') {
    res.redirect(`application-1-letter-review`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/application-5-outcome-letter-check-router`, (req, res) => {
  const letter5Edit = req.session.data['application-5-outcome-letter-check']

  if (letter5Edit== 'Yes') {
    res.redirect(`application-5-letter-edit`)
  }
  else if (letter5Edit == 'No') {
    res.redirect(`application-5-letter-review`)
  }
   else {
    res.redirect(`XXX`)
  }
})




router.post(`/inbound-1-greeting-router`, (req, res) => {
  const inboundGreeting = req.session.data['inbound-1-greeting']

  if (inboundGreeting == 'Yes') {
    res.redirect(`find-someone-1-gather`)
  }
  else if (inboundGreeting == 'No') {
    res.redirect(`inbound-1-other-help`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/inbound-1-end-call-process-router`, (req, res) => {
  const inboundEndCallProcess = req.session.data['inbound-1-end-call-process']

  if (inboundEndCallProcess == 'Yes') {
    res.redirect(`inbound-1-end-call-dispute`)
  }
  else if (inboundEndCallProcess == 'No') {
    res.redirect(`inbound-1-end-call-exit`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/application-3-lpa-1-router`, (req, res) => {
  const lpaChangeMade = req.session.data['application-3-lpa-1']

  if (lpaChangeMade == 'Yes') {
    res.redirect(`record-1-overview`)
  }
  else if (lpaChangeMade == 'No') {
    res.redirect(`inbound-1-end-call-process`)
  }
   else {
    res.redirect(`XXX`)
  }
})




router.post(`/outbound-precall-router`, (req, res) => {
  const preCall = req.session.data['outbound-precall']

  if (preCall == 'Yes') {
    res.redirect(`find-someone-1-offline-gather`)
  }
  else if (preCall == 'No') {
    res.redirect(`XXX`)
  }
   else {
    res.redirect(`XXX`)
  }
})

// Scenario 1 routers


router.post(`/application-1-about-a1-router`, (req, res) => {
  const aboutA1 = req.session.data['application-1-about-a1']

  if (aboutA1 == 'Agree') {
    res.redirect(`application-1-about`)
  }
  else if (aboutA1 == 'Amended') {
    res.redirect(`application-1-about-a1-reason`)
  }
   else {
    res.redirect(`application-1-about`)
  }
})

router.post(`/application-1-about-a6-router`, (req, res) => {
  const aboutA6 = req.session.data['application-1-about-a6']

  if (aboutA6 == 'No-change') {
    res.redirect(`application-1-about`)
  }
  else if (aboutA6 == 'Amended') {
    res.redirect(`application-1-about-a6-reason`)
  }
   else {
    res.redirect(`application-1-about`)
  }
})


router.post(`/application-1-about-a12-router`, (req, res) => {
  const aboutA12 = req.session.data['application-1-about-a12']

  if (aboutA12 == 'Agree') {
    res.redirect(`application-1-about`)
  }
  else if (aboutA12 == 'Amended') {
    res.redirect(`application-1-about-a12-reason`)
  }
   else {
    res.redirect(`application-1-about`)
  }
})

// Scenario 5 routers

router.post(`/application-5-about-a1-router`, (req, res) => {
  const about5_A1 = req.session.data['application-5-about-a1']

  if (about5_A1 == 'Agree') {
    res.redirect(`application-5-about-a1-reason`)
  }
  else if (about5_A1 == 'Amended') {
    res.redirect(`application-5-about-a1-score`)
  }
   else {
    res.redirect(`application-5-about-clear`)
  }
})

router.post(`/application-5-about-a6-router`, (req, res) => {
  const about5_A6 = req.session.data['application-5-about-a6']

  if (about5_A6 == 'Agree') {
    res.redirect(`application-5-about-a6-reason`)
  }
  else if (about5_A6 == 'Amended') {
    res.redirect(`application-5-about-a6-score`)
  }
   else {
    res.redirect(`application-5-about`)
  }
})


router.post(`/application-5-about-a12-router`, (req, res) => {
  const about5_A12 = req.session.data['application-5-about-a12']

  if (about5_A12 == 'Agree') {
    res.redirect(`application-5-about-a12-reason`)
  }
  else if (about5_A12 == 'Amended') {
    res.redirect(`application-5-about-a12-score`)
  }
   else {
    res.redirect(`application-5-about`)
  }
})

router.post(`/application-5-award-review-check-router`, (req, res) => {
  const awardReview = req.session.data['application-5-award-review-check']

  if (awardReview == 'No') {
    res.redirect(`application-5-award-review-date`)
  }
   else {
    res.redirect(`application-5-letter-review`)
  }
})

router.post(`/record-1-event-history-filter-router`, (req, res) => {
  const eventFilter = req.session.data['record-1-event-history-filter']

  if (eventFilter == '1') {
    res.redirect(`record-1-event-history-inbound-calls`)
  }
   else {
    res.redirect(`record-1-event-history`)
  }
})


router.post(`/application-5-about-a1-ap-justification-routers`, (req, res) => {
  const apJustification = req.session.data['application-5-about-a1-ap-justification']

  if (apJustification == 'Yes') {
    res.redirect(`application-5-about-a1-ap-justification-overwrite`)
  }
   else {
    res.redirect(`application-5-about-a-autofill`)
  }
})

router.post(`/application-1-task-t3-routers`, (req, res) => {
  const t3check = req.session.data['application-1-task-t3']

  if (t3check == 'Request') {
    res.redirect(`application-1-task-t3-action`)
  }
   else {
    res.redirect(`application-5-tasklist`)
  }
})


router.post(`/application-6-award-period-end-check-router`, (req, res) => {
  const awardPeriodCheck = req.session.data['application-6-award-period-end-check']

  if (awardPeriodCheck == 'Yes') {
    res.redirect(`application-6-assessment-report-completed`)
  }
   else {
    res.redirect(`application-6-award-date-needed`)
  }
})


router.post(`/application-6-award-date-needed-router`, (req, res) => {
  const awardDateCheck = req.session.data['application-6-award-date-needed']

  if (awardDateCheck == 'Yes') {
    res.redirect(`application-6-agree-AP`)
  }
   else {
    res.redirect(`application-6-award-period-end`)
  }
})


router.post(`/award-dates-AP-rec-check-router`, (req, res) => {
  const agreeAPCheck = req.session.data['award-dates-AP-rec-check']

  if (agreeAPCheck == 'Yes') {
    res.redirect(`award-dates-playback`)
  }
   else {
    res.redirect(`award-dates-review-manual`)
  }
})

router.post(`/award-dates-review-manual-router`, (req, res) => {
  const reviewDatesManual = req.session.data['award-dates-review-manual']

  if (reviewDatesManual == 'None') {
    res.redirect(`award-dates-payment-date`)
  }
   else {
    res.redirect(`award-dates-playback`)
  }
})




router.post(`/award-dates-payment-check-router`, (req, res) => {
  const paymentEndDate = req.session.data['award-dates-payment-check']

  if (paymentEndDate == 'Yes') {
    res.redirect(`award-dates-payment-date`)
  }
   else {
    res.redirect(`award-dates-playback`)
  }
})

router.post(`/assurance-mm-tasklist-outcome-router`, (req, res) => {
  const assuranceOutcomeTaskList = req.session.data['assurance-mm-tasklist-outcome']

  if (assuranceOutcomeTaskList == 'AP') {
    res.redirect(`entry-home`)
  }
  else if (assuranceOutcomeTaskList == 'PIPcs') {
    res.redirect(`/move-to-pipcs-1/eject-process`)
  }
  else if (assuranceOutcomeTaskList == 'Disallow') {
    res.redirect(`/move-to-pipcs-1/eject-process`)
  }
  else if (assuranceOutcomeTaskList == 'Withdraw') {
    res.redirect(`/move-to-pipcs-1/eject-process`)
  }
   else {
    res.redirect(`/move-to-pipcs-1/eject-reason-justification`)
  }
})

router.post(`/assurance-disallow-check-router`, (req, res) => {
  const assuranceOutcomeDisallow = req.session.data['assurance-disallow-check']

  if (assuranceOutcomeDisallow == 'Yes') {
    res.redirect(`/move-to-pipcs-1/eject-reason`)
  }
  else if (assuranceOutcomeDisallow == 'No') {
    res.redirect(`assurance-disallow-actions`)
  }
   else {
    res.redirect(`/move-to-pipcs-1/eject-reason-justification`)
  }
})

router.post(`/assurance-withdraw-check-router`, (req, res) => {
  const assuranceOutcomeWithdraw = req.session.data['assurance-withdraw-check']

  if (assuranceOutcomeWithdraw == 'Yes') {
    res.redirect(`/move-to-pipcs-1/eject-reason-justification`)
  }
  else if (assuranceOutcomeWithdraw == 'No') {
    res.redirect(`assurance-withdraw-actions`)
  }
  else if (assuranceOutcomeWithdraw == 'DontKnow') {
    res.redirect(`/move-to-pipcs-1/eject-reason-justification`)
  }
   else {
    res.redirect(`/move-to-pipcs-1/eject-reason-justification`)
  }
})



router.post(`/preparation-linear-outcome-router`, (req, res) => {
  const preparationOutcomeTaskList = req.session.data['preparation-linear-outcome']

  if (preparationOutcomeTaskList == 'Ready') {
    res.redirect(`application-6-overview`)
  }
  else if (preparationOutcomeTaskList == 'Disallow') {
    res.redirect(`/move-to-pipcs-1/eject-process`)
  }
  else if (preparationOutcomeTaskList == 'PIPcs') {
    res.redirect(`/move-to-pipcs-1/eject-process`)
  }
  else if (preparationOutcomeTaskList == 'Withdraw') {
    res.redirect(`/move-to-pipcs-1/eject-process`)
  }
   else {
    res.redirect(`exit-event-history`)
  }
})




router.post(`/fta-make-contact-router`, (req, res) => {
  const ftaOutcome = req.session.data['fta-make-contact']

  if (ftaOutcome == 'Valid') {
    res.redirect(`entry-home`)
  }
  else if (ftaOutcome == 'Invalid') {
    res.redirect(`actions-to-withdraw`)
  }
  else if (ftaOutcome  == 'Disallow') {
    res.redirect(`actions-to-disallow`)
  }
   else {
     res.redirect(`ftx-contact-issues`)
  }
})

router.post(`/ftc-make-contact-router`, (req, res) => {
  const ftcOutcome = req.session.data['ftc-make-contact']

  if (ftcOutcome == 'Valid') {
    res.redirect(`entry-home`)
  }
  else if (ftcOutcome == 'Invalid') {
    res.redirect(`actions-to-withdraw`)
  }
  else if (ftcOutcome == 'Disallow') {
    res.redirect(`actions-to-disallow`)
  }
   else {
     res.redirect(`ftx-contact-issues`)
  }
})

router.post(`/application-vcc-check-router`, (req, res) => {
  const vccCheck = req.session.data['application-vcc-check']

  if (vccCheck == 'PIPcs') {
    res.redirect(`/move-to-pipcs-1/eject-reason-justification`)
  }
   else {
     res.redirect(`application-6-letter-review`)
  }
})

router.post(`/qppt-dl-check-router`, (req, res) => {
  const qpptDaily = req.session.data['qppt-dl-check']

  if (qpptDaily == 'Yes') {
    res.redirect(`qppt-m-check`)
  }
   else {
     res.redirect(`qppt-dl-alt-date`)
  }
})

router.post(`/qppt-m-check-router`, (req, res) => {
  const qpptMoto = req.session.data['qppt-m-check']

  if (qpptMoto == 'Yes') {
    res.redirect(`award-dates-data-input`)
  }
   else {
     res.redirect(`qppt-m-alt-date`)
  }
})

// Single task list items

router.post(`/assurance-tasklist-item-1-router`, (req, res) => {
  const assuranceCheckItem1 = req.session.data['assurance-tasklist-item-1']

  if (assuranceCheckItem1 == 'Expected') {
    res.redirect(`assurance-tasklist-item-2`)
  }
  else if (assuranceCheckItem1 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-2`)
  }
  else if (assuranceCheckItem1  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`XXX`)
  }
})

router.post(`/assurance-tasklist-item-2-router`, (req, res) => {
  const assuranceCheckItem2 = req.session.data['assurance-tasklist-item-2']

  if (assuranceCheckItem2 == 'Expected') {
    res.redirect(`assurance-tasklist-item-3`)
  }
  else if (assuranceCheckItem2 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-3`)
  }
  else if (assuranceCheckItem2  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`XXX`)
  }
})



module.exports = router
