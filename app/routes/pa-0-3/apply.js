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
    res.redirect(`section-mobility-submit`)
  }
  else if (submitAB == 'submit-b') {
    res.redirect(`section-mobility`)
  }
   else {
    res.redirect(`XXX`)
  }
})


// ALT Formats

router.post(`/alt-formats-comms-format-router`, (req, res) => {
  const altFormatCommsFormat = req.session.data['alt-formats-comms-format']

  if (altFormatCommsFormat == 'Yes') {
    res.redirect(`alt-formats-type`)
  }
  else if (altFormatCommsFormat == 'No') {
    res.redirect(`cya-2`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/alt-formats-type-router`, (req, res) => {
  const altFormatCommsFormat = req.session.data['alt-formats-type']

  if (altFormatCommsFormat == 'Braille') {
    res.redirect(`alt-formats-braille`)
  }
  else if (altFormatCommsFormat == 'Sign language') {
    res.redirect(`alt-formats-sign-language`)
  }
  else if (altFormatCommsFormat == 'Audio') {
    res.redirect(`alt-formats-audio`)
  }
  else if (altFormatCommsFormat == 'Paper') {
    res.redirect(`alt-formats-paper`)
  }
  else if (altFormatCommsFormat == 'Other') {
    res.redirect(`alt-formats-other`)
  }
   else {
    res.redirect(`XXX`)
  }
})


router.post(`/alt-formats-other-router`, (req, res) => {
  const altFormatOther = req.session.data['alt-formats-other']

  if (altFormatOther == 'Coloured paper') {
    res.redirect(`alt-formats-paper-colour`)
  }
  else if (altFormatOther == 'Large print – 16 point font') {
    res.redirect(`cya-2`)
  }
  else if (altFormatOther == 'Large print with a custom font') {
    res.redirect(`alt-formats-paper-custom-font`)
  }
  else if (altFormatOther == 'Accessible PDF') {
    res.redirect(`alt-formats-other-pdf`)
  }
  else if (altFormatOther == 'Email') {
    res.redirect(`alt-formats-other-email`)
  }
  else if (altFormatOther == 'Other') {
    res.redirect(`alt-formats-other-other`)
  }
   else {
    res.redirect(`XXX`)
  }
})






module.exports = router
