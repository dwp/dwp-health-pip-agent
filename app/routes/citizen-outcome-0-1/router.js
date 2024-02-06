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

module.exports = router
