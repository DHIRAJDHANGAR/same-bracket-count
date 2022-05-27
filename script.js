/******************Same Backet count*********************** */


let input = "(){}[]]";
let lenght = input.length;
let stack = [];
let count = 0;

for (i=0; i<lenght; i++)
{
    let first = stack[stack.length - 1];
    if(input[i] === "(" || input[i] === "[" || input[i] === "{")
    {
        stack.push(input[i]);
        
    }
    else if(input[i] === ")" && first === "(")
    {  
        stack.pop();
        count+=2;
    }
    else if(input[i] === "]" && first === "[")
    {  
        stack.pop();
        count+=2;
    }
    else if(input[i] === "}" && first === "{")
    {  
        stack.pop();
        count+=2;
    }
}
console.log(count);
console.log(typeof count);