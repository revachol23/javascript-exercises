

const repeatString = function(string, num){
   let dummy = "";
    for (num; num >= 1; num--){
    dummy += string
    }
    return dummy
}


final_String = repeatString("hey", 4)

console.log(final_String)
// Do not edit below this line
module.exports = repeatString;
