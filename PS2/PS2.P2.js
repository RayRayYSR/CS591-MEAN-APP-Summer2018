function* separate(str) {
    while (true) {
        let result = str.split(" ");
        yield result;
    }
}

let str='All I know is something like a bird within her sang'
new_str=separate(str)
console.log(new_str.next().value);
