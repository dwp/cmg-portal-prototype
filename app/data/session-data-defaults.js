/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

function todayDate (){
  // calculate todays date
  const todayDate = new Date();
  var options = {month: 'long'};
  const day = todayDate.getDate();
  const month = new Intl.DateTimeFormat('en-US', options).format(todayDate);
  const year = todayDate.getFullYear();
  // build the string to display on the page
  //req.session.data['today-date'] = day + " " + month + " " + year;
  return day + " " + month + " " + year;
}

module.exports = {

  // Insert values here
  'today-date': todayDate()
};
