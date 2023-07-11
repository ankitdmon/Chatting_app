const moment = require('moment');
const momentTimezone = require('moment-timezone');

export function convertDT(date, currentTimezone) {
    const clientTime = momentTimezone.tz(date, "YYYY-MM-DD HH:MM:SS", currentTimezone);
    const serverTimeZone = clientTime.clone().tz("asia/Kolkata");

    return serverTimeZone.format("YYYY-MM-DD HH:MM:SS");
}