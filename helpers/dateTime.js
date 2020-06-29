const format = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: 'short',
  day: '2-digit'
})

export const formatTime = time => {
  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year }
  ] = format.formatToParts(time)

  return {
    day,
    month,
    year
  }
}

export const sortByTime = (list, asc = true) =>
  list.sort((itemA, itemB) =>
    asc ? itemB.date - itemA.date : itemA.date - itemB.date
  )

export const formatDateStringField = (list, fieldToFormat) =>
  list.map(item => ({
    ...item,
    [fieldToFormat]: new Date(item[fieldToFormat])
  }))
