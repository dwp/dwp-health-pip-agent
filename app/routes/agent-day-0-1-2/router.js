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



router.post(`/application-selector-router`, (req, res) => {
  const applicationSelector = req.session.data['application-selector']

  if (applicationSelector == '1') {
    res.redirect(`application-1-overview`)
  }
  else if (applicationSelector == '2') {
    res.redirect(`application-2-overview`)
  }
  else if (applicationSelector == '3') {
    res.redirect(`application-3-overview`)
  }
  else if (applicationSelector == '4') {
    res.redirect(`application-4-overview`)
  }
  else if (applicationSelector == '5') {
    res.redirect(`application-5-overview`)
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
    res.redirect(`application-6-award-period-end`)
  }
   else {
    res.redirect(`application-6-award-review-date`)
  }
})







module.exports = router
