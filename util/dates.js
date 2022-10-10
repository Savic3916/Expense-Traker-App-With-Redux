export const getFormattedDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB', {
        year: "numeric",
        month: '2-digit',
        day: 'numeric',
    })
}

export const getDaysMinusDate = (date, days) => {
    return new Date().setDate(date.getDate() - days)
};