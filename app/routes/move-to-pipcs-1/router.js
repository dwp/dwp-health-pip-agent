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

router.post(`/eject-reason-router`, (req, res) => {
  const ejectReason = req.session.data['eject-reason']

  if (ejectReason == 'PIPcs') {
    res.redirect(`eject-reason-justification`)
  }
  else if (ejectReason == 'eject-reason-other') {
    res.redirect(`eject-reason-justification`)
  }
  else if (ejectReason == 'Extend') {
    res.redirect(`/agent-day-0-1-5/record-timeline`)
  }
  else if (ejectReason == 'Withdraw') {
    res.redirect(`/agent-day-0-1-5/assurance-withdraw-check`)
  }
  else if (ejectReason == 'Disallow') {
    res.redirect(`/agent-day-0-1-5/record-timeline`)
  }
  else if (ejectReason == 'ID') {
    res.redirect(`/agent-day-0-1-5/record-timeline`)
  }
   else {
    res.redirect(`eject-reason-justification`)
  }
})

router.post(`/assurance-mm-tasklist-outcome-router`, (req, res) => {
  const assuranceOutcomeTaskList = req.session.data['assurance-mm-tasklist-outcome']

  if (assuranceOutcomeTaskList == 'AP') {
    res.redirect(`entry-home`)
  }
  else if (assuranceOutcomeTaskList == 'BAU') {
    res.redirect(`eject-reason`)
  }
  else if (assuranceOutcomeTaskList == 'Disallow') {
    res.redirect(`eject-reason`)
  }
  else if (assuranceOutcomeTaskList == 'Withdraw') {
    res.redirect(`assurance-withdraw-check`)
  }
   else {
    res.redirect(`eject-reason-justification`)
  }
})

router.post(`/assurance-disallow-check-router`, (req, res) => {
  const assuranceOutcomeDisallow = req.session.data['assurance-disallow-check']

  if (assuranceOutcomeDisallow == 'Yes') {
    res.redirect(`eject-reason`)
  }
  else if (assuranceOutcomeDisallow == 'No') {
    res.redirect(`assurance-disallow-actions`)
  }
   else {
    res.redirect(`eject-reason-justification`)
  }
})

router.post(`/assurance-withdraw-check-router`, (req, res) => {
  const assuranceOutcomeWithdraw = req.session.data['assurance-withdraw-check']

  if (assuranceOutcomeWithdraw == 'Yes') {
    res.redirect(`eject-reason`)
  }
  else if (assuranceOutcomeWithdraw == 'No') {
    res.redirect(`assurance-withdraw-actions`)
  }
  else if (assuranceOutcomeWithdraw == 'DontKnow') {
    res.redirect(`eject-reason`)
  }
   else {
    res.redirect(`eject-reason-justification`)
  }
})




module.exports = router
