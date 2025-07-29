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
    res.redirect(`application-6-about`)
  }
  else if (applicationSelector == '2') {
    res.redirect(`application-6-about`)
  }
  else if (applicationSelector == '8') {
    res.redirect(`assurance-overview`)
  }
  else if (applicationSelector == '10') {
    res.redirect(`preparation-overview`)
  }
  else if (applicationSelector == '11') {
    res.redirect(`preparation-overview`)
  }
  else if (applicationSelector == '12') {
    res.redirect(`man-recon-overview`)
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

router.post(`/assurance-tasklist-separate-outcome-router`, (req, res) => {
  const assuranceOutcomeTaskList = req.session.data['assurance-tasklist-separate-outcome']

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
  else if (preparationOutcomeTaskList == 'AP') {
    res.redirect(`entry-home`)
  }
  else if (preparationOutcomeTaskList == 'PIPcs') {
    res.redirect(`/move-to-pipcs-1/eject-reason`)
  }
  else if (preparationOutcomeTaskList == 'Withdraw') {
    res.redirect(`assurance-withdraw-check`)
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


// QPPT

router.post(`/qppt-dl-3m-check-router`, (req, res) => {
  const qpptDaily3m = req.session.data['qppt-dl-3m-check']

  if (qpptDaily3m == 'Yes') {
    res.redirect(`qppt-dl-9m-check`)
  }
  else if (qpptDaily3m == 'Split') {
    res.redirect(`application-6-about`)
  }
  else if (qpptDaily3m == 'EffectiveDate') {
    res.redirect(`application-6-about`)
  }
  else if (qpptDaily3m == 'SplitRate') {
    res.redirect(`application-6-about`)
  }
  else if (qpptDaily3m == 'NoRestrictions') {
    res.redirect(`application-6-about`)
  }
   else {
     res.redirect(`pause`)
  }
})

router.post(`/qppt-dl-9m-check-router`, (req, res) => {
  const qpptDaily9m = req.session.data['qppt-dl-9m-check']

  if (qpptDaily9m == 'Yes') {
    res.redirect(`application-6-about`)
  }
  else if (qpptDaily9m == 'No') {
    res.redirect(`application-6-about`)
  }
   else {
     res.redirect(`application-6-about`)
  }
})

router.post(`/qppt-dl-effective-date-check-router`, (req, res) => {
  const qpptDailyEffectiveDateCheck = req.session.data['qppt-dl-effective-date-check']

  if (qpptDailyEffectiveDateCheck == 'Yes') {
    res.redirect(`qppt-dl-3m-alt-date`)
  }
   else {
     res.redirect(`qppt-dl-effective-date-multi`)
  }
})


router.post(`/qppt-m-3m-check-router`, (req, res) => {
  const qpptMobility3m = req.session.data['qppt-m-3m-check']

  if (qpptMobility3m == 'Yes') {
    res.redirect(`qppt-m-9m-check`)
  }
  else if (qpptMobility3m == 'Split') {
    res.redirect(`application-6-about`)
  }
  else if (qpptMobility3m == 'EffectiveDate') {
    res.redirect(`application-6-about`)
  }
  else if (qpptMobility3m == 'SplitRate') {
    res.redirect(`application-6-about`)
  }
  else if (qpptMobility3m == 'NoRestrictions') {
    res.redirect(`application-6-about`)
  }
   else {
     res.redirect(`pause`)
  }
})

router.post(`/qppt-m-9m-check-router`, (req, res) => {
  const qpptMobility9m = req.session.data['qppt-m-9m-check']

  if (qpptMobility9m == 'Yes') {
    res.redirect(`application-6-about`)
  }
  else if (qpptMobility9m == 'No') {
    res.redirect(`application-6-about`)
  }
   else {
     res.redirect(`application-6-about`)
  }
})

router.post(`/qppt-m-effective-date-check-router`, (req, res) => {
  const qpptMobilityEffectiveDateCheck = req.session.data['qppt-m-effective-date-check']

  if (qpptMobilityEffectiveDateCheck == 'Yes') {
    res.redirect(`qppt-m-3m-alt-date`)
  }
   else {
     res.redirect(`qppt-m-effective-date-multi`)
  }
})



// Prepare for AP Single task list items

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

router.post(`/assurance-tasklist-item-3-router`, (req, res) => {
  const assuranceCheckItem3 = req.session.data['assurance-tasklist-item-3']

  if (assuranceCheckItem3 == 'Expected') {
    res.redirect(`assurance-tasklist-item-3a`)
  }
  else if (assuranceCheckItem3 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-4`)
  }
  else if (assuranceCheckItem3  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`XXX`)
  }
})

router.post(`/assurance-tasklist-item-3-address-actions-router`, (req, res) => {
  const assuranceCheckItem3Actions = req.session.data['assurance-tasklist-item-3-address-actions']

  if (assuranceCheckItem3Actions == 'Update') {
    res.redirect(`assurance-tasklist-item-3-address-postcode`)
  }
  else if (assuranceCheckItem3Actions == 'Accept') {
    res.redirect(`assurance-tasklist-item-3-address-postcode`)
  }
  else if (assuranceCheckItem3Actions == 'Issue') {
    res.redirect(`assurance-tasklist-item-3-address-cant-resolve`)
  }
  else if (assuranceCheckItem3Actions  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`XXX`)
  }
})

router.post(`/assurance-tasklist-item-3a-router`, (req, res) => {
  const assuranceCheckItem3a = req.session.data['assurance-tasklist-item-3a']

  if (assuranceCheckItem3a == 'Expected') {
    res.redirect(`assurance-tasklist-item-4`)
  }
  else if (assuranceCheckItem3a == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-4`)
  }
  else if (assuranceCheckItem3a  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`4`)
  }
})

router.post(`/assurance-tasklist-item-4-router`, (req, res) => {
  const assuranceCheckItem4 = req.session.data['assurance-tasklist-item-4']

  if (assuranceCheckItem4 == 'Expected') {
    res.redirect(`assurance-tasklist-item-5`)
  }
  else if (assuranceCheckItem4 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-5`)
  }
  else if (assuranceCheckItem4  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`4`)
  }
})

router.post(`/assurance-tasklist-item-5-router`, (req, res) => {
  const assuranceCheckItem5 = req.session.data['assurance-tasklist-item-5']

  if (assuranceCheckItem5 == 'Expected') {
    res.redirect(`assurance-tasklist-item-6`)
  }
  else if (assuranceCheckItem5 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-6`)
  }
  else if (assuranceCheckItem5  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`5`)
  }
})

router.post(`/assurance-tasklist-item-6-router`, (req, res) => {
  const assuranceCheckItem6 = req.session.data['assurance-tasklist-item-6']

  if (assuranceCheckItem6 == 'Expected') {
    res.redirect(`assurance-tasklist-item-7`)
  }
  else if (assuranceCheckItem6 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-7`)
  }
  else if (assuranceCheckItem6  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`6`)
  }
})

router.post(`/assurance-tasklist-item-7-router`, (req, res) => {
  const assuranceCheckItem7 = req.session.data['assurance-tasklist-item-7']

  if (assuranceCheckItem7 == 'Expected') {
    res.redirect(`assurance-tasklist-item-8`)
  }
  else if (assuranceCheckItem7 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-8`)
  }
  else if (assuranceCheckItem7  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`7`)
  }
})

router.post(`/assurance-tasklist-item-8-router`, (req, res) => {
  const assuranceCheckItem8 = req.session.data['assurance-tasklist-item-8']

  if (assuranceCheckItem8 == 'Expected') {
    res.redirect(`assurance-tasklist-item-9`)
  }
  else if (assuranceCheckItem8 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-9`)
  }
  else if (assuranceCheckItem8  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`8`)
  }
})

router.post(`/assurance-tasklist-item-9-router`, (req, res) => {
  const assuranceCheckItem9 = req.session.data['assurance-tasklist-item-9']

  if (assuranceCheckItem9 == 'Expected') {
    res.redirect(`assurance-tasklist-item-10`)
  }
  else if (assuranceCheckItem9 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-10`)
  }
  else if (assuranceCheckItem9  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`9`)
  }
})

router.post(`/assurance-tasklist-item-10-router`, (req, res) => {
  const assuranceCheckItem10 = req.session.data['assurance-tasklist-item-10']

  if (assuranceCheckItem10 == 'Expected') {
    res.redirect(`assurance-tasklist-item-11`)
  }
  else if (assuranceCheckItem10 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-11`)
  }
  else if (assuranceCheckItem10  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`10`)
  }
})

router.post(`/assurance-tasklist-item-11-router`, (req, res) => {
  const assuranceCheckItem11 = req.session.data['assurance-tasklist-item-11']

  if (assuranceCheckItem11 == 'Expected') {
    res.redirect(`assurance-tasklist-item-12`)
  }
  else if (assuranceCheckItem11 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-12`)
  }
  else if (assuranceCheckItem11  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`11`)
  }
})

router.post(`/assurance-tasklist-item-12-router`, (req, res) => {
  const assuranceCheckItem12 = req.session.data['assurance-tasklist-item-12']

  if (assuranceCheckItem12 == 'Expected') {
    res.redirect(`assurance-tasklist-item-13`)
  }
  else if (assuranceCheckItem12 == 'Unexpected-spa') {
    res.redirect(`assurance-tasklist-item-12-1`)
  }
  else if (assuranceCheckItem12 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-13`)
  }
  else if (assuranceCheckItem12  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`12`)
  }
})

router.post(`/assurance-tasklist-item-12-1-router`, (req, res) => {
  const assuranceCheckItem12_1 = req.session.data['assurance-tasklist-item-12-1']

  if (assuranceCheckItem12_1 == 'Expected') {
    res.redirect(`assurance-tasklist-item-13`)
  }
  else if (assuranceCheckItem12_1 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-13`)
  }
  else if (assuranceCheckItem12_1  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`12`)
  }
})

router.post(`/assurance-tasklist-item-13-router`, (req, res) => {
  const assuranceCheckItem13 = req.session.data['assurance-tasklist-item-13']

  if (assuranceCheckItem13 == 'Expected') {
    res.redirect(`assurance-tasklist-item-14`)
  }
  else if (assuranceCheckItem13 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-14`)
  }
  else if (assuranceCheckItem13  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`13`)
  }
})

router.post(`/assurance-tasklist-item-14-router`, (req, res) => {
  const assuranceCheckItem14 = req.session.data['assurance-tasklist-item-14']

  if (assuranceCheckItem14 == 'Expected') {
    res.redirect(`assurance-tasklist-item-15`)
  }
  else if (assuranceCheckItem14 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-15`)
  }
  else if (assuranceCheckItem14  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`14`)
  }
})

router.post(`/assurance-tasklist-item-15-router`, (req, res) => {
  const assuranceCheckItem15 = req.session.data['assurance-tasklist-item-15']

  if (assuranceCheckItem15 == 'Expected') {
    res.redirect(`assurance-tasklist-item-16`)
  }
  else if (assuranceCheckItem15 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-16`)
  }
  else if (assuranceCheckItem15  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`15`)
  }
})

router.post(`/assurance-tasklist-item-16-router`, (req, res) => {
  const assuranceCheckItem16 = req.session.data['assurance-tasklist-item-16']

  if (assuranceCheckItem16 == 'Expected') {
    res.redirect(`assurance-tasklist-item-17`)
  }
  else if (assuranceCheckItem16 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-17`)
  }
  else if (assuranceCheckItem16  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`16`)
  }
})

router.post(`/assurance-tasklist-item-17-router`, (req, res) => {
  const assuranceCheckItem17 = req.session.data['assurance-tasklist-item-17']

  if (assuranceCheckItem17 == 'Expected') {
    res.redirect(`assurance-tasklist-item-18`)
  }
  else if (assuranceCheckItem17 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-18`)
  }
  else if (assuranceCheckItem17  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`17`)
  }
})

router.post(`/assurance-tasklist-item-17-router`, (req, res) => {
  const assuranceCheckItem17 = req.session.data['assurance-tasklist-item-17']

  if (assuranceCheckItem17 == 'Expected') {
    res.redirect(`assurance-tasklist-item-18`)
  }
  else if (assuranceCheckItem17 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-18`)
  }
  else if (assuranceCheckItem17  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`17`)
  }
})

router.post(`/assurance-tasklist-item-18-router`, (req, res) => {
  const assuranceCheckItem18 = req.session.data['assurance-tasklist-item-18']

  if (assuranceCheckItem18 == 'Expected') {
    res.redirect(`assurance-tasklist-item-19`)
  }
  else if (assuranceCheckItem18 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-19`)
  }
  else if (assuranceCheckItem18  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`18`)
  }
})

router.post(`/assurance-tasklist-item-19-router`, (req, res) => {
  const assuranceCheckItem19 = req.session.data['assurance-tasklist-item-19']

  if (assuranceCheckItem19 == 'Expected') {
    res.redirect(`assurance-tasklist-item-20`)
  }
  else if (assuranceCheckItem19 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-20`)
  }
  else if (assuranceCheckItem19  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`19`)
  }
})

router.post(`/assurance-tasklist-item-20-router`, (req, res) => {
  const assuranceCheckItem20 = req.session.data['assurance-tasklist-item-20']

  if (assuranceCheckItem20 == 'Expected') {
    res.redirect(`assurance-tasklist-item-21`)
  }
  else if (assuranceCheckItem20 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-21`)
  }
  else if (assuranceCheckItem20  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`20`)
  }
})

router.post(`/assurance-tasklist-item-21-router`, (req, res) => {
  const assuranceCheckItem21 = req.session.data['assurance-tasklist-item-21']

  if (assuranceCheckItem21 == 'Expected') {
    res.redirect(`assurance-tasklist-item-22`)
  }
  else if (assuranceCheckItem21 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-22`)
  }
  else if (assuranceCheckItem21  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`21`)
  }
})

router.post(`/assurance-tasklist-item-22-router`, (req, res) => {
  const assuranceCheckItem22 = req.session.data['assurance-tasklist-item-22']

  if (assuranceCheckItem22 == 'Expected') {
    res.redirect(`assurance-tasklist-item-23`)
  }
  else if (assuranceCheckItem22 == 'Unexpected') {
    res.redirect(`assurance-tasklist-item-23`)
  }
  else if (assuranceCheckItem22  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`22`)
  }
})

router.post(`/assurance-tasklist-item-23-router`, (req, res) => {
  const assuranceCheckItem23 = req.session.data['assurance-tasklist-item-23']

  if (assuranceCheckItem23 == 'Expected') {
    res.redirect(`assurance-tasklist-separate`)
  }
  else if (assuranceCheckItem23 == 'Unexpected') {
    res.redirect(`assurance-tasklist-separate`)
  }
  else if (assuranceCheckItem23  == 'Pause') {
    res.redirect(`assurance-tasklist-separate`)
  }
   else {
     res.redirect(`23`)
  }
})



// Prepare for decisions Single task list items

router.post(`/preparation-tasklist-item-1-router`, (req, res) => {
  const preparationCheckItem1 = req.session.data['preparation-tasklist-item-1']

  if (preparationCheckItem1 == 'Expected') {
    res.redirect(`preparation-tasklist-item-2`)
  }
  else if (preparationCheckItem1 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-2`)
  }
  else if (preparationCheckItem1  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`XXX`)
  }
})

router.post(`/preparation-tasklist-item-2-router`, (req, res) => {
  const preparationCheckItem2 = req.session.data['preparation-tasklist-item-2']

  if (preparationCheckItem2 == 'Expected') {
    res.redirect(`preparation-tasklist-item-3`)
  }
  else if (preparationCheckItem2 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-3`)
  }
  else if (preparationCheckItem2  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`XXX`)
  }
})

router.post(`/preparation-tasklist-item-3-router`, (req, res) => {
  const preparationCheckItem3 = req.session.data['preparation-tasklist-item-3']

  if (preparationCheckItem3 == 'Expected') {
    res.redirect(`preparation-tasklist-item-3a`)
  }
  else if (preparationCheckItem3 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-3a`)
  }
  else if (preparationCheckItem3  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`XXX`)
  }
})

router.post(`/preparation-tasklist-item-3a-router`, (req, res) => {
  const preparationCheckItem3a = req.session.data['preparation-tasklist-item-3a']

  if (preparationCheckItem3a == 'Expected') {
    res.redirect(`preparation-tasklist-item-4`)
  }
  else if (preparationCheckItem3a == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-4`)
  }
  else if (preparationCheckItem3a  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`4`)
  }
})

router.post(`/preparation-tasklist-item-4-router`, (req, res) => {
  const preparationCheckItem4 = req.session.data['preparation-tasklist-item-4']

  if (preparationCheckItem4 == 'Expected') {
    res.redirect(`preparation-tasklist-item-5`)
  }
  else if (preparationCheckItem4 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-5`)
  }
  else if (preparationCheckItem4  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`4`)
  }
})

router.post(`/preparation-tasklist-item-5-router`, (req, res) => {
  const preparationCheckItem5 = req.session.data['preparation-tasklist-item-5']

  if (preparationCheckItem5 == 'Expected') {
    res.redirect(`preparation-tasklist-item-5-1`)
  }
  else if (preparationCheckItem5 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-5-1`)
  }
  else if (preparationCheckItem5  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`5`)
  }
})

router.post(`/preparation-tasklist-item-5-1-router`, (req, res) => {
  const preparationCheckItem51 = req.session.data['preparation-tasklist-item-5-1']

  if (preparationCheckItem51 == 'Expected') {
    res.redirect(`preparation-tasklist-item-5-2`)
  }
  else if (preparationCheckItem51 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-5-2`)
  }
  else if (preparationCheckItem51  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`51`)
  }
})

router.post(`/preparation-tasklist-item-5-2-router`, (req, res) => {
  const preparationCheckItem52 = req.session.data['preparation-tasklist-item-5-2']

  if (preparationCheckItem52 == 'Expected') {
    res.redirect(`preparation-tasklist-item-6`)
  }
  else if (preparationCheckItem52 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-6`)
  }
  else if (preparationCheckItem52  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`52`)
  }
})

router.post(`/preparation-tasklist-item-6-router`, (req, res) => {
  const preparationCheckItem6 = req.session.data['preparation-tasklist-item-6']

  if (preparationCheckItem6 == 'Expected') {
    res.redirect(`preparation-tasklist-item-7`)
  }
  else if (preparationCheckItem6 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-7`)
  }
  else if (preparationCheckItem6  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`6`)
  }
})

router.post(`/preparation-tasklist-item-7-router`, (req, res) => {
  const preparationCheckItem7 = req.session.data['preparation-tasklist-item-7']

  if (preparationCheckItem7 == 'Expected') {
    res.redirect(`preparation-tasklist-item-8`)
  }
  else if (preparationCheckItem7 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-8`)
  }
  else if (preparationCheckItem7  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`7`)
  }
})

router.post(`/preparation-tasklist-item-8-router`, (req, res) => {
  const preparationCheckItem8 = req.session.data['preparation-tasklist-item-8']

  if (preparationCheckItem8 == 'Expected') {
    res.redirect(`preparation-tasklist-item-9`)
  }
  else if (preparationCheckItem8 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-9`)
  }
  else if (preparationCheckItem8  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`8`)
  }
})


router.post(`/preparation-tasklist-item-9-router`, (req, res) => {
  const preparationCheckItem9 = req.session.data['preparation-tasklist-item-9']

  if (preparationCheckItem9 == 'Expected') {
    res.redirect(`preparation-tasklist-item-10`)
  }
  else if (preparationCheckItem9 == 'Unexpected-spa') {
    res.redirect(`preparation-tasklist-item-9-1`)
  }
  else if (preparationCheckItem9 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-10`)
  }
  else if (preparationCheckItem9  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`9`)
  }
})

router.post(`/preparation-tasklist-item-9-1-router`, (req, res) => {
  const preparationCheckItem9_1 = req.session.data['preparation-tasklist-item-9-1']

  if (preparationCheckItem9_1 == 'Expected') {
    res.redirect(`preparation-tasklist-item-10`)
  }
  else if (preparationCheckItem9_1 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-10`)
  }
  else if (preparationCheckItem9_1  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`9-1`)
  }
})

router.post(`/preparation-tasklist-item-10-router`, (req, res) => {
  const preparationCheckItem10 = req.session.data['preparation-tasklist-item-10']

  if (preparationCheckItem10 == 'Expected') {
    res.redirect(`preparation-tasklist-item-11`)
  }
  else if (preparationCheckItem10 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-11`)
  }
  else if (preparationCheckItem10  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`10`)
  }
})

router.post(`/preparation-tasklist-item-11-router`, (req, res) => {
  const preparationCheckItem11 = req.session.data['preparation-tasklist-item-11']

  if (preparationCheckItem11 == 'Expected') {
    res.redirect(`preparation-tasklist-item-12`)
  }
  else if (preparationCheckItem11 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-12`)
  }
  else if (preparationCheckItem11  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`11`)
  }
})

router.post(`/preparation-tasklist-item-12-router`, (req, res) => {
  const preparationCheckItem12 = req.session.data['preparation-tasklist-item-12']

  if (preparationCheckItem12 == 'Expected') {
    res.redirect(`preparation-tasklist-item-13`)
  }
  else if (preparationCheckItem12 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-13`)
  }
  else if (preparationCheckItem12  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`12`)
  }
})

router.post(`/preparation-tasklist-item-13-router`, (req, res) => {
  const preparationCheckItem13 = req.session.data['preparation-tasklist-item-13']

  if (preparationCheckItem13 == 'Expected') {
    res.redirect(`preparation-tasklist-item-14`)
  }
  else if (preparationCheckItem13 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-14`)
  }
  else if (preparationCheckItem13  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`13`)
  }
})

router.post(`/preparation-tasklist-item-14-router`, (req, res) => {
  const preparationCheckItem14 = req.session.data['preparation-tasklist-item-14']

  if (preparationCheckItem14 == 'Expected') {
    res.redirect(`preparation-tasklist-item-15`)
  }
  else if (preparationCheckItem14 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-15`)
  }
  else if (preparationCheckItem14  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`14`)
  }
})

router.post(`/preparation-tasklist-item-15-router`, (req, res) => {
  const preparationCheckItem15 = req.session.data['preparation-tasklist-item-15']

  if (preparationCheckItem15 == 'Expected') {
    res.redirect(`preparation-tasklist-item-16`)
  }
  else if (preparationCheckItem15 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-16`)
  }
  else if (preparationCheckItem15  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`15`)
  }
})

router.post(`/preparation-tasklist-item-16-router`, (req, res) => {
  const preparationCheckItem16 = req.session.data['preparation-tasklist-item-16']

  if (preparationCheckItem16 == 'Expected') {
    res.redirect(`preparation-tasklist-item-17`)
  }
  else if (preparationCheckItem16 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-17`)
  }
  else if (preparationCheckItem16  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`16`)
  }
})

router.post(`/preparation-tasklist-item-17-router`, (req, res) => {
  const preparationCheckItem17 = req.session.data['preparation-tasklist-item-17']

  if (preparationCheckItem17 == 'Expected') {
    res.redirect(`preparation-tasklist-item-18`)
  }
  else if (preparationCheckItem17 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-18`)
  }
  else if (preparationCheckItem17  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`17`)
  }
})

router.post(`/preparation-tasklist-item-17-router`, (req, res) => {
  const preparationCheckItem17 = req.session.data['preparation-tasklist-item-17']

  if (preparationCheckItem17 == 'Expected') {
    res.redirect(`preparation-tasklist-item-18`)
  }
  else if (preparationCheckItem17 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-18`)
  }
  else if (preparationCheckItem17  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`17`)
  }
})

router.post(`/preparation-tasklist-item-18-router`, (req, res) => {
  const preparationCheckItem18 = req.session.data['preparation-tasklist-item-18']

  if (preparationCheckItem18 == 'Expected') {
    res.redirect(`preparation-tasklist-item-19`)
  }
  else if (preparationCheckItem18 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-19`)
  }
  else if (preparationCheckItem18  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`18`)
  }
})

router.post(`/preparation-tasklist-item-19-router`, (req, res) => {
  const preparationCheckItem19 = req.session.data['preparation-tasklist-item-19']

  if (preparationCheckItem19 == 'Expected') {
    res.redirect(`preparation-tasklist-item-20`)
  }
  else if (preparationCheckItem19 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-20`)
  }
  else if (preparationCheckItem19  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`19`)
  }
})

router.post(`/preparation-tasklist-item-20-router`, (req, res) => {
  const preparationCheckItem20 = req.session.data['preparation-tasklist-item-20']

  if (preparationCheckItem20 == 'Expected') {
    res.redirect(`preparation-tasklist-item-21`)
  }
  else if (preparationCheckItem20 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-21`)
  }
  else if (preparationCheckItem20  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`20`)
  }
})

router.post(`/preparation-tasklist-item-21-router`, (req, res) => {
  const preparationCheckItem21 = req.session.data['preparation-tasklist-item-21']

  if (preparationCheckItem21 == 'Expected') {
    res.redirect(`preparation-tasklist-item-22`)
  }
  else if (preparationCheckItem21 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-22`)
  }
  else if (preparationCheckItem21  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`21`)
  }
})

router.post(`/preparation-tasklist-item-22-router`, (req, res) => {
  const preparationCheckItem22 = req.session.data['preparation-tasklist-item-22']

  if (preparationCheckItem22 == 'Expected') {
    res.redirect(`preparation-tasklist-item-23`)
  }
  else if (preparationCheckItem22 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-23`)
  }
  else if (preparationCheckItem22  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`22`)
  }
})

router.post(`/preparation-tasklist-item-23-router`, (req, res) => {
  const preparationCheckItem23 = req.session.data['preparation-tasklist-item-23']

  if (preparationCheckItem23 == 'Expected') {
    res.redirect(`preparation-tasklist-item-24`)
  }
  else if (preparationCheckItem23 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-24`)
  }
  else if (preparationCheckItem23  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`23`)
  }
})

router.post(`/preparation-tasklist-item-24-router`, (req, res) => {
  const preparationCheckItem24 = req.session.data['preparation-tasklist-item-24']

  if (preparationCheckItem24 == 'Expected') {
    res.redirect(`preparation-tasklist-item-25`)
  }
  else if (preparationCheckItem24 == 'Unexpected') {
    res.redirect(`preparation-tasklist-item-25`)
  }
  else if (preparationCheckItem24  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`24`)
  }
})

router.post(`/preparation-tasklist-item-25-router`, (req, res) => {
  const preparationCheckItem25 = req.session.data['preparation-tasklist-item-25']

  if (preparationCheckItem25 == 'Expected') {
    res.redirect(`preparation-tasklist-separate`)
  }
  else if (preparationCheckItem25 == 'Unexpected') {
    res.redirect(`preparation-tasklist-separate`)
  }
  else if (preparationCheckItem25  == 'Pause') {
    res.redirect(`preparation-tasklist-separate`)
  }
   else {
     res.redirect(`25`)
  }
})


router.post(`/preparation-mm-tasklist-outcome-router`, (req, res) => {
  const preparationOutcomeTaskList = req.session.data['preparation-mm-tasklist-outcome']

  if (preparationOutcomeTaskList == 'Decision') {
    res.redirect(`application-6-about`)
  }
  else if (preparationOutcomeTaskList == 'PIPcs') {
    res.redirect(`/move-to-pipcs-1/eject-process`)
  }
  else if (preparationOutcomeTaskList == 'Disallow') {
    res.redirect(`/move-to-pipcs-1/eject-process`)
  }
  else if (preparationOutcomeTaskList == 'Withdraw') {
    res.redirect(`/move-to-pipcs-1/eject-process`)
  }
   else {
    res.redirect(`/move-to-pipcs-1/eject-reason-justification`)
  }
})

router.post(`/accessibility-ab-router`, (req, res) => {
  const accessibilityAB = req.session.data['accessibility-ab']

  if (accessibilityAB == '1') {
    res.redirect(`accessibility-1`)
  }
  else if (accessibilityAB == '2') {
    res.redirect(`accessibility-2`)
  }
  else if (accessibilityAB == '3') {
    res.redirect(`accessibility-3`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/scenario-4/health-condition-typo-router`, (req, res) => {
  const typoRouter = req.session.data['health-condition-typo']

  if (typoRouter == 'Yes') {
    res.redirect(`health-condition-summary-6`)
  }
  else if (typoRouter == 'No') {
    res.redirect(`health-condition-primary-search`)
  }
  else if (typoRouter == 'Advanced') {
    res.redirect(`health-condition-advanced-search-cat2`)
  }
   else {
    res.redirect(`XXX`)
  }
})


router.post(`/scenario-4/health-condition-choice-router`, (req, res) => {
  const choiceRouter = req.session.data['health-condition-choice']

  if (choiceRouter == 'Yes') {
    res.redirect(`health-condition-summary-6`)
  }
  else if (choiceRouter == 'No') {
    res.redirect(`health-condition-primary-search`)
  }
   else {
    res.redirect(`XXX`)
  }
})



router.post(`/scenario-4/health-condition-advanced-search-router`, (req, res) => {
  const cat2Router = req.session.data['cat2-filter']

  if (cat2Router == 'cat2-16') {
    res.redirect(`health-condition-advanced-search-cat2-Neurological`)
  }
  else if (cat2Router == 'cat2-19') {
    res.redirect(`health-condition-advanced-search-cat2-skin`)
  }
  else if (cat2Router == 'cat2-21') {
    res.redirect(`health-condition-advanced-search-cat2-nocondition`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/scenario-5/health-condition-advanced-search-router`, (req, res) => {
  const cat2Router = req.session.data['cat2-filter']

  if (cat2Router == 'cat2-16') {
    res.redirect(`health-condition-advanced-search-cat2-Neurological`)
  }
  else if (cat2Router == 'cat2-19') {
    res.redirect(`health-condition-advanced-search-cat2-skin`)
  }
  else if (cat2Router == 'cat2-21') {
    res.redirect(`health-condition-advanced-search-cat2-nocondition`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/scenario-4/health-condition-choice-router`, (req, res) => {
  const conditionChoiceRouter = req.session.data['cat2-filter']

  if (conditionChoiceRouter == 'Yes') {
    res.redirect(`health-condition-summary-6`)
  }
  else if (conditionChoiceRouter == 'No') {
    res.redirect(`health-condition-advanced-search-cat2`)
  }
   else {
    res.redirect(`XXX`)
  }
})




module.exports = router
