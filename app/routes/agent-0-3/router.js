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
router.use(`/pip-letter.pdf`, express.static(path.resolve('app/views/agent-0-1/pip-letter.pdf')))
router.use(`/pip-doc1.pdf`, express.static(path.resolve('app/views/agent-0-1/pip-doc1.pdf')))
router.use(`/pip-doc2.pdf`, express.static(path.resolve('app/views/agent-0-1/pip-doc2.pdf')))
router.use(`/pip-doc3.pdf`, express.static(path.resolve('app/views/agent-0-1/pip-doc3.pdf')))

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
    res.redirect(`entry-home`)
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




module.exports = router
