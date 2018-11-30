const getTime = time => {
  let hours = Math.floor(time / 3600)
  time %= 3600
  let minutes = Math.floor(time / 60)
  let seconds = time % 60

  return `${Math.round(hours * 100) / 100}h${Math.round(minutes * 100) /
    100}m${Math.round(seconds * 100) / 100}s`
}

export default getTime
