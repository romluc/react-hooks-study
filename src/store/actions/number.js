export function addNumber(dispatch, payload) {
  dispatch({ type: 'addNumber', payload })
}

export function divNumberBy25(dispatch) {
  dispatch({ type: 'divNumberBy25' })
}

export function numberTimes7(dispatch) {
  dispatch({ type: 'numberTimes7' })
}

export function numberToInt(dispatch) {
  dispatch({ type: 'numberInt' })
}
