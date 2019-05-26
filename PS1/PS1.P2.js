const evaluate = (str) => {
    if (str.includes("+")) {
        let first_char=str.charAt(0);
        let sec_char=str.charAt(2);
        let first_num=parseInt(first_char, 10);
        let sec_num=parseInt(sec_char, 10);
        return first_num+sec_num;
    }
    if (str.includes("*")) {
        let first_char=str.charAt(0);
        let sec_char=str.charAt(2);
        let first_num=parseInt(first_char, 10);
        let sec_num=parseInt(sec_char, 10);
        return first_num*sec_num;
    }
    if (str.includes("-")) {
        let first_char=str.charAt(0);
        let sec_char=str.charAt(2);
        let first_num=parseInt(first_char, 10);
        let sec_num=parseInt(sec_char, 10);
        return first_num-sec_num;
    }
    if (str.includes("/")) {
        let first_char=str.charAt(0);
        let sec_char=str.charAt(2);
        let first_num=parseInt(first_char, 10);
        let sec_num=parseInt(sec_char, 10);
        return first_num/sec_num;
    }
    if (str.includes("%")) {
        let first_char=str.charAt(0);
        let sec_char=str.charAt(2);
        let first_num=parseInt(first_char, 10);
        let sec_num=parseInt(sec_char, 10);
        return first_num%sec_num;
    }
    if (str.includes("^")) {
        let first_char=str.charAt(0);
        let sec_char=str.charAt(2);
        let first_num=parseInt(first_char, 10);
        let sec_num=parseInt(sec_char, 10);
        return Math.pow(first_num, sec_num);
    }
}
const expression1 = '4+2';
console.log(`${expression1} = ${evaluate(expression1)}`);
const expression2 = '5*7';
console.log(`${expression2} = ${evaluate(expression2)}`);
const expression3 = '6-1';
console.log(`${expression3} = ${evaluate(expression3)}`);
const expression4 = '9/2';
console.log(`${expression4} = ${evaluate(expression4)}`);
const expression5 = '2^3';
console.log(`${expression5} = ${evaluate(expression5)}`);
const expression0 = '8%3';
console.log(`${expression0} = ${evaluate(expression0)}`);

