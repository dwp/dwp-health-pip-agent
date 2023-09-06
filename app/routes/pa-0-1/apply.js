const express = require('express')

const router = new express.Router()

function makeAStay(data) {
  const admission = new Date(`${data['admission-year']}-${data['admission-month']}-${data['admission-day']}`)
  const discharge = new Date(`${data['discharge-year']}-${data['discharge-month']}-${data['discharge-day']}`)
  const totalDays = Math.max(differenceInDays(discharge, admission) - 1, 0)
  return {admission, discharge, totalDays}
}


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




module.exports = router
