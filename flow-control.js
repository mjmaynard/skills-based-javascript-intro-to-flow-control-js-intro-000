function basicTeenager(age) {
  if(19>=age && age>=13) {
    return('You are a teenager!')
  }
}

function teenager(age) {
  if(19>=age && age>=13) {
    return('You are a teenager!')
  } else {
    return ('You are not a teenager')
  }
}

function ageChecker(age) {
  if(19>=age && age>=13) {
    return("You are a teenager!")
  } else if(12>=age) {
    return("You are a kid")
  } else {
    return("You are a grownup")
  }
}

function ternaryTeenager(age) {
  var age = 13
  return if(19>=age && age>=13) ? "You are a teenager" : "You are not a teenager"
}
