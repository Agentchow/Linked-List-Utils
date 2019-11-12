    // TODO: Add the honor code pledge with your name and onyen here.
    /**    
     * Author: Chares Chow    
     * ONYEN: cchow
     * UNC Honor Pledge: I certify that no unauthorized assistance has been received   
     * or given in the completion of this work. I certify that I understand and 
     * could now rewrite on my own, without assistance from course staff,  
     * the problem set code I am submitting.
     */

    import { Node, cons, first, rest, listify } from "introcs/list";

    export let last = <T> (list: Node<T>): T => {
        if (list === null) {
            return null;
        } else {
            if (rest(list) === null) {
                return first(list);
            } else {
                return last(rest(list));
            }
        }
    };

    export let valueAt = <T> (list: Node<T>, index: number): T => {
        if (list === null) {
            return null;
        } else {
            if (index === 0) {
                return first(list);
            } else {
                return valueAt(rest(list), index - 1);
            }
        }
    };

    export let max = (list: Node<number>, record: number): number => {
        if (list === null) {
            return record;
        } 
        if (first(list) >= record) {
            record = first(list);
            return max(rest(list), record);
        }
        if (first(list) <= record) {
            return max(rest(list), record);
        }
        return record;
    };

    export let all = <T> (list: Node<T>, value: T): boolean => {
        if (list === null) {
            return true;
        } else {
            if (first(list) === value) {
                return all(rest(list), value);
            } else {
                return false;
            }
        }
    };

    export let equals = <T> (a: Node<T>, b: Node<T>): boolean => {
        if (a === null && b === null) {
            return true;
        } 
        if (a === null || b === null) {
            return false;
        }
        if (first(a) === first(b)) {
            return equals(rest(a), rest(b));
        } else {
            return false;
        }
    };

    export let scale = (list: Node<number>, factor: number): Node<number> => {
        if (list === null) {
            return null;
        } 
        return cons(list.value * factor, scale(rest(list), factor));
    };

    export let arrayToList = <T> (array: T[], index: number): Node<T> => {
        if (array.length === 0) {
            return null;
        }
        if (index === array.length) {
            return null;
        }
        return cons(array[index], arrayToList(array, 1 + index));
    };

    export let concat = <T> (list: Node<T>, list2: Node<T>): Node<T> => {
        if (list === null && list2 === null) {
            return null;
        }
        if (list != null) {
            return cons(first(list), concat(rest(list), list2));
        } else {
            return cons(first(list2), concat(list, rest (list2)));
        }
    };
    // Part 9. sub
    export let sub = <T> (list: Node<T>, index: number, length: number): Node<T> => {
        if (list === null || index <= -1 || length <= 0) {
            return null;
        } 
        if (index === 0) {
            length--;
            return cons((first(list)), sub(rest(list), index, length));
        }
        index--;
        return sub(rest(list), index, length);
    };


    // Part 10. splice
    export let splice = <T> (list: Node<T>, index: number, list2: Node<T>): Node<T> => {
        if (list === null && list2 === null) {
            return null;
        }
        if (list === null) {
            return list2;
        }
        if (list2 === null) {
            return list;
        }
        if (list === null) {
            return null;
        }
        if (index !== 0) {
            return cons(first(list), splice(rest(list), index - 1, list2));
        }   
        return(concat(list2, list));
    };

    export let indexFinder = (targetValue: string, list: Node<string>): number  => {
        let array: string[] = [];
        while (list !== null) {
            array[array.length] = first(list);
            list = rest(list);
        }
        for (let i = 0; i < array.length; i++) {
            if (array[i] === targetValue) {
                return i;
            }
        }
        return Infinity;
    };
    // export let splice = <T> (list1: Node<T>, index: number, list2: Node<T>): Node<T> => {

    // }