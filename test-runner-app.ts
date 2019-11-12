// TODO: Add the honor code pledge with your name and onyen here.
/**    
 * Author: Charles Chow
 * ONYEN: cchow
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received   
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */

/** Import Test Helpers */
import { print } from "introcs";
import { cons } from "introcs/list";
import { test, testList } from "./test-util";

// TODO: Import functions as you write them
import { 
    last, 
    valueAt, 
    max,
    scale,
    all,
    equals,
    arrayToList,
    sub,
    splice,


} from "./list-utils";

export let main = async () => {
    
    print("List Utils Tests");

    // Some simple lists data to test with.
    // You should add your own lists, too!
    let numbers = cons(null, null);
    let numbers1 = cons(1, null);
    let numbers12 = cons(1, cons(2, null));
    let numbers121 = cons(1, cons(2, cons(1, null)));
    let numbers363 = cons(3, cons(6, cons(3, null)));
    let numbers1234 = cons(1, cons(2, cons(3, cons(4, null))));

    let stringsA = cons("A", null);
    let stringsAB = cons("A", cons("B", null));
    let stringsABC = cons("A", cons("B", cons("C", null)));
    let stringsABCD = cons("A", cons("B", cons("C", cons("D", null))));
    let stringsCD = cons("C", cons("D", null));

    // This constant is an alias for the smallest number possible.
    const MIN = Number.MIN_SAFE_INTEGER;

    // ================================    
    // Part 1. last
    print("Last is correct");
  
    // ================================    
    // Part 2. valueAt
    print("valueAt is correct");

    // ================================
    // Part 3. max
    // Use Cases
    print("max is correct");

    // ================================
    // Part 4. all
    print("all is correct");

    // ================================
    // Part 5. equals
    print("equals is correct"); 

    // ================================
    // Part 6. scale
    print("scale is correct");
    // Use Cases
    // One example is shown below:
    // Edge Cases
    
    // ================================
    // Part 7. arrayToList
    print("arrayToList is correct");
    // Use Cases

    // Edge Cases

    // ================================
    // Part 8. concat
    print("Concat is correct");
    // Use Cases
    // Edge Cases

    // ================================
    // Part 9. splice
    print("Part 9. splice");
    // Use Cases
    testList("splice(stringAB, 0, string CD)", cons("C", cons("D", cons("A", cons("B", null)))), splice(stringsAB, 0, stringsCD));
    // Edge Cases   

    // ================================
    // Part 10. sub
    print("Part 10. sub");
    // Use Cases
    testList("sub(stringABCD, 0, 4)", cons("A", cons("B", cons("C", cons("D", null)))), sub(stringsABCD, 0, 4));
    // Edge Cases

};

main();