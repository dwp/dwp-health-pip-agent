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

router.post(`/section-4-add-concent-router`, (req, res) => {
  const add1concent = req.session.data['section-4-add-concent']

  if (add1concent == 'Yes') {
    res.redirect(`section-4-add-1`)
  }
  else if (add1concent == 'No') {
    res.redirect(`cya-4`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/section-4-add-concent-a-router`, (req, res) => {
  const add1concent = req.session.data['section-4-add-concent']

  if (add1concent == 'Yes') {
    res.redirect(`section-4-hcp-1`)
  }
  else if (add1concent == 'No') {
    res.redirect(`cya-4`)
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

router.post(`/system-ur-submit-ab-router`, (req, res) => {
  const submitAB = req.session.data['system-ur-submit-ab']

  if (submitAB == 'submit-a') {
    res.redirect(`gov-uk-1-content`)
  }
  else if (submitAB == 'submit-b') {
    res.redirect(`gov-uk-1-content`)
  }
  else if (submitAB == 'submit-c') {
    res.redirect(`descriptors-overview`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/eligibility-method-router`, (req, res) => {
  const eligivilirtyMethodRouter = req.session.data['eligibility-method']

  if (eligivilirtyMethodRouter == 'eligibility') {
    res.redirect(`eligibility-method`)
  }
  else if (eligivilirtyMethodRouter == 'postcode') {
    res.redirect(`eligibility-postcode`)
  }
   else {
    res.redirect(`XXX`)
  }
})


// POSTCODE ROUTER
router.post(`/postcode-router`, (req, res) => {
  const postCodeChecker = req.session.data['postcode']

  if (postCodeChecker == 'NE1') {
    res.redirect(`eligibility-postcode-welcome`)
  } else if (postCodeChecker == 'NE2') {
    res.redirect(`eligibility-postcode-outside`)

  } else if (postCodeChecker == 'NE3') {
    res.redirect(`eligibility-postcode-full`)

  } else if (postCodeChecker == 'ne1') {
    res.redirect(`eligibility-postcode-welcome`)

  } else if (postCodeChecker == 'ne2') {
    res.redirect(`eligibility-postcode-outside`)

  } else if (postCodeChecker == 'ne3') {
    res.redirect(`eligibility-postcode-full`)

  } else if (postCodeChecker == 'XXX') {
  res.redirect(`XXX`)

  } else {
    res.redirect(`eligibility-postcode-outside`)
  }
})

router.post(`/preferance-stated-router`, (req, res) => {
  const preferanceStated = req.session.data['preferance-stated']

  if (preferanceStated == 'English') {
    res.redirect(`example-page`)
  }
  else if (preferanceStated == 'Welsh') {
    res.redirect(`example-page-welsh`)
  }
   else {
    res.redirect(`XXX`)
  }
})




module.exports = router
