// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front


const reverseString = (str) =>{
    return str.split('').reverse().join('');
}
reverseString('w3resources');

