
function superbowlWin(record) {
  let ringsWon  = record.find(record => record.result === "W")
  return ringsWon ? ringsWon.year: undefined
}
