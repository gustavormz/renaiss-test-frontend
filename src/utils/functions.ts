const formatDateTime = (dateTime: Date): string => {
  const now = new Date()
  if (
    dateTime.getFullYear() === now.getFullYear() &&
    dateTime.getMonth() === now.getMonth() &&
    dateTime.getDate() === now.getDate()
  ) {
    return `${dateTime.getHours().toString().padStart(2, '0')}:${dateTime
      .getMinutes()
      .toString()
      .padStart(2, '0')}`
  } else {
    return `${dateTime.getDate().toString().padStart(2, '0')}/${(
      dateTime.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}/${dateTime.getFullYear().toString()} ${dateTime
      .getHours()
      .toString()
      .padStart(2, '0')}:${dateTime.getMinutes().toString().padStart(2, '0')}`
  }
}

export {
  formatDateTime,
}
