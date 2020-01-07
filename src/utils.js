// moment js for better date parsing browser compatibility
const moment = require('moment');

export default {
  normalizeName: (name) => {
    name = name || ""
    return name.replace(/[^a-zA-Z0-9 -]/g, '').replace(/-/g, ' ').replace(/\s+/g, '-').toLowerCase();
  },
  normalizePrice: (price) => {
    price = price || 0
    return parseFloat(price).toFixed(2);
  },
  getRatingText(rating, numRatings=1, starsOnly=true) {
    let stars = ""
    while(stars.length < Math.floor(rating)) {
      stars = stars+"★"
    }
    while(stars.length < 5) {
      stars = stars+"✰"
    }

    return `${stars}${starsOnly?"":" "+numRatings}${starsOnly? "":" Review"}${!starsOnly && numRatings!==1?"s":""}`
  },
  dateToHumanReadable: (date) => {
    date = new Date(moment.utc(`${date}`).format())

    let curDate = new Date()
    let dateDiff = curDate - date
    let oneMin = 1000 * 60
    let sixtyMins = 1000 * 60 * 60
    let oneWeek = sixtyMins * 24 * 7

    // if < 1 minute ago: show just now
    if (dateDiff < oneMin) {
      return "Just now";
    }
    //if < 60 minutes: show x minutes ago
    else if (dateDiff < sixtyMins) {
      return `${Math.floor(dateDiff / 1000 / 60)} minutes ago`
    }
    //else if this week: show mon/tues/wed @ timeOfDay
    else if (dateDiff < oneWeek) {
      let timeOfDay = date.toLocaleTimeString(navigator.language, { hour: 'numeric', minute: '2-digit' })
      let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      weekday = weekday[date.getDay()]
      return `${weekday} at ${timeOfDay}`
    }
    //else: just show date in normal format Nov 12, 2019
    else {
      return date.toLocaleString(navigator.language, { month: 'short', day: 'numeric', year: 'numeric' })
    }
  },
  setCollectionURL: (historyProp, collectionName, collectionId) => {
    const newLocation = `/collections/${collectionName}.${collectionId}`
    if (newLocation !== window.location.pathname) {
      historyProp.push(newLocation)
    }
  },
  setProductURL: (historyProp, productName, productId, append) => {
    const newLocation = `/products/${productName}.${productId}${append||""}`
    if (newLocation !== window.location.pathname) {
      historyProp.push(newLocation)
    }
  },
}