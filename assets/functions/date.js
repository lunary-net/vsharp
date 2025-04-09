export const getDateInfo = (locale = 'en-US', format = 'long') => ({
    dateISO: new Date().toISOString(),
    dateUTC: new Date().toUTCString(),
    dateLocal: new Date().toLocaleDateString(locale),
    timeLocal: new Date().toLocaleTimeString(locale),
    weekday: new Date().toLocaleString(locale, { weekday: format }),
    month: new Date().toLocaleString(locale, { month: format }),
    timezoneOffset: new Date().getTimezoneOffset(),
});