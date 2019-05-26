/*
//I am not used to ES6 style, so for the first few assignments, I might write js function first then change to ES6 style
function alpha_order(str)
  {
    //define punctuantions and numbers regex so that they are ignored
    let punc_and_num=/[\u2000-\u206F\u2E00-\u2E7F\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~\0-9]/g;
    str=str.replace(punc_and_num,'');
    return str.split('').sort().join('');
  }
console.log(alphabet_order("supercalifragilisticexpialidocious"));
*/

const alpha_order = (str) =>{
  //define punctuantions and numbers regex so that they are ignored
  let punc_and_num=/[\u2000-\u206F\u2E00-\u2E7F\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~\0-9]/g;
  str=str.replace(punc_and_num,'');
  return str.split('').sort().join('');
}
console.log(alpha_order("supercalifragilisticexpialidocious"));
