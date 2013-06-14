/* 2520 is the smallest number that can be divided by each of the numbers
from 1 to 10 without any remainder.
What is the smallest positive number that is
evenly divisible by all of the numbers from 1 to 20?
*/

var counter= 22;



function test() {   
    while(findSmallest()=== false) {
        counter+=2;
        findSmallest();
        function findSmallest() {
            if(counter%20===0 && counter%19===0 && counter%18===0 && counter%17===0 && counter%16===0 &&counter%15===0 &&counter%14===0 && counter%13===0 && counter%12===0 && counter%11===0) {
                console.log(counter);
                return true;
            }else {return false;}
        }
    }
}

test();