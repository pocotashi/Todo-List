exports.getDate = function (){
  const today = new Date();
  const options = {month:"long", day:"numeric", weekday:"long"}
  return  today.toLocaleDateString("en-US", options)

}

exports.getDay = function() {
  const today = new Date()
  const option = {weekday:"long"}
  return today.toLocaleDateString('en-US', option)

}
