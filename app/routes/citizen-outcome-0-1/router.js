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

router.post(`/outcome-overview-landing-router`, (req, res) => {
  const outcomeLanding = req.session.data['outcome-overview-landing']

  if (outcomeLanding == '1') {
    res.redirect(`outcome-notification-method`)
  }
  else if (outcomeLanding == '2') {
    res.redirect(`understand-1`)
  }
  else if (outcomeLanding == '3') {
    res.redirect(`outcome-query-status`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/outcome-overview-1-router`, (req, res) => {
  const outcomeOverview1 = req.session.data['outcome-overview-1']

  if (outcomeOverview1 == '1') {
    res.redirect(`outcome-overview-2`)
  }
  else if (outcomeOverview1 == '2') {
    res.redirect(`outcome-overview-3`)
  }
  else if (outcomeOverview1 == '3') {
    res.redirect(`outcome-overview-4`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/outcome-notification-method-router`, (req, res) => {
  const outcomeNotificationMethod = req.session.data['outcome-notification-method']

  if (outcomeNotificationMethod == 'Print') {
    res.redirect(`outcome-overview-2`)
  }
  else if (outcomeNotificationMethod == 'Digital') {
    res.redirect(`outcome-digital-copy`)
  }
   else {
    res.redirect(`next-steps`)
  }
})




router.post(`/outcome-overview-3-router`, (req, res) => {
  const outcomeOverview3 = req.session.data['outcome-overview-3']

  if (outcomeOverview3 == '1') {
    res.redirect(`application-data-used`)
  }
  else if (outcomeOverview3 == '2') {
    res.redirect(`understand-1`)
  }
  else if (outcomeOverview3 == '3') {
    res.redirect(`outcome-notification-method`)
  }
  else if (outcomeOverview3 == '4') {
    res.redirect(`dont-agree`)
  }
  else if (outcomeOverview3 == '5') {
    res.redirect(`actions-for-application`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/understand-choice-router`, (req, res) => {
  const understandChoice = req.session.data['understand-choice']

  if (understandChoice == '1') {
    res.redirect(`application-data-used`)
  }
  else if (understandChoice == '2') {
    res.redirect(`outcome-overview-landing`)
  }
  else if (understandChoice == '3') {
    res.redirect(`exit`)
  }
  else if (understandChoice == '4') {
    res.redirect(`dont-agree`)
  }
  else if (understandChoice == '5') {
    res.redirect(`actions-for-application`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/other-help-router`, (req, res) => {
  const otherHelp = req.session.data['other-help']

  if (otherHelp == 'Yes') {
    res.redirect(`other-help-yes`)
  }
   else {
    res.redirect(`exit`)
  }
})

router.post(`/reference-1-router`, (req, res) => {
  const reference1 = req.session.data['reference-1']

  if (reference1 == '1') {
    res.redirect(`11`)
  }
  else if (reference1 == '2') {
    res.redirect(`22`)
  }
   else {
    res.redirect(`11`)
  }
})

router.post(`/exit-check-router`, (req, res) => {
  const exitCheck = req.session.data['exit-check']

  if (exitCheck == 'Yes') {
    res.redirect(`gov-uk-1-content`)
  }
  else if (exitCheck == 'No') {
    res.redirect(`outcome-overview-landing`)
  }
  else if (exitCheck == 'Status') {
    res.redirect(`outcome-query-status`)
  }
   else {
    res.redirect(`gov-uk-1-content`)
  }
})




module.exports = router
