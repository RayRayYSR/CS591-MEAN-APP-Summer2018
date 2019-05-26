const data = (str, lambda_function) => lambda_function(str);
let result1 = data(`supercalifragilisticexpialidocious`,str=>str.split(/(?=c)/g));
console.log(result1);
let result2 = data(`supercalifragilisticexpialidocious`,str=>{
    let new_str=str.replace(/a/g,"A");
    let num=(new_str.match(/A/g)||[]).length;
    let len=new_str.length;
    var obj={
          originalString:str,
          modifiedString:new_str,
          numberReplaced:num,
          length:len
    };
    return obj;
});
console.log(result2);


