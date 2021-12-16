function formatTime (dateString) {
  return dateString.split(' ')[0]
}

function getAge () {
  const current = new Date()
  const currentYear = current.getFullYear()
  return Number(currentYear) - 1993
}