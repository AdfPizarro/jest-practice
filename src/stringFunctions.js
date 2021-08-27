function stringLength(string){
  let length=string.length

  if (string.length>10){
    return "Too big"
  }
  if (string.length<1){
    return "Too short"
  }
  return string.length;
}

function reverseString(string){
  return string.split("").reverse().join('')
}


function capitalizeString(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {stringLength, reverseString, capitalizeString};
