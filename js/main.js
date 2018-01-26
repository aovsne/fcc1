var rii = [1,2,3]
var pu = rii.filter(function(even){
	return even % 2 === 0
})
console.log(pu)


// freecodecamp seek and destroy

function destroyer(arr) {
  
 var args = Array.from(arguments)

 for(i = 0; i < args[0].length; i++){
 	for(j = 0; j < args.length; j++){
 		if(args[0][i] === args[j]){
 			delete args[0][i]
 		}
 	}
 }
  

  return args[0].filter(function(x){
  	return Boolean(x)
  })


 
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))

// where do i belong (freecodecamp)

function getIndexToIns(arr, num) {
 // 1 insert num in arr
 	arr.push(num)

 // 2 sort the arr
 	arr = arr.sort(function(a, b){
 		return a - b
 	})

 // 3 find the position of the num and return the index

 	return arr.indexOf(num)

 
}

getIndexToIns([40, 60], 50)


// Caeser Cipher

function rot13(str) { // LBH QVQ VG!
  str = str.split("").map(cipher).join("");
  return str;
}

function cipher(letter){
  var symbol = /[^a-zA-Z]/g;
  if(symbol.test(letter)){
    return letter
  }

  var asciiCode = letter.charCodeAt(0);
  

  if(asciiCode > 77){
    asciiCode -= 13
  }else{
    asciiCode += 13
  }

  return String.fromCharCode(asciiCode)
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"))


  