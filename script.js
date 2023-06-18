let firstNum, secondNum, op, display, calc;
const screen = document.querySelector(".screen");
calc=0;
display = "0";
firstNum = "";
secondNum = "";
screen.textContent = display;

const ac = document.querySelector("#ac");
ac.addEventListener("mouseover",()=>{
    console.log("hi");
    ac.classList.add("select");
});
ac.addEventListener("mouseleave",()=>{
    ac.classList.remove("select");
});
ac.addEventListener("click",()=>
{
    display = "";
    screen.textContent = display;
    calc=0; firstNum=0; secondNum=0;
});


const ce = document.querySelector("#ce");
ce.addEventListener("mouseover",()=>{
    console.log("hi");
    ce.classList.add("select");
});

ce.addEventListener("mouseleave",()=>{
    ce.classList.remove("select");
});
ce.addEventListener("click",()=>
{
    display = display.toString();
    display = display.slice(0,-1);
    if(!display) {display = "0"; calc=0; firstNum=0; secondNum=0;}
    screen.textContent = display;
});


function add(a,b){
    let ans = a+b;
    if (Math.floor(ans)!=ans && ans.toString().split(".")[1].length >= 8)
        return ans.toFixed(8)
    return ans;
}

function sub(a,b){
    let ans = a-b;
    if (Math.floor(ans)!=ans && ans.toString().split(".")[1].length >= 8)
        return ans.toFixed(8)
    return ans;
}

function mul(a,b){
    let ans = a*b;
    if (Math.floor(ans)!=ans && ans.toString().split(".")[1].length >= 8)
        return ans.toFixed(8)
    return ans;
}

function divide(a,b){
    let ans = a/b;
    if (Math.floor(ans)!=ans && ans.toString().split(".")[1].length >= 8)
        return ans.toFixed(8)
    return ans;
}

function operate(first,second,op){
    first = +first;
    second = + second;

    if(op==="+") return add(first,second);
    else if(op==="-") return  sub(first,second);
    else if(op==="*") return  mul(first,second);
    else if(op==="/") return  divide(first,second);
}

let nums = document.querySelectorAll(".number");
nums = Array.from(nums);
for(let i=0;i<nums.length;i++){
    nums[i].addEventListener("click",()=>
    {
        if(nums[i].textContent==="=") {calc=0; calculate(display);}
        else if(nums[i].textContent === "+"||nums[i].textContent==="-"||nums[i].textContent==="*"||nums[i].textContent==="/")
        {
            display= display+" "+ nums[i].textContent + " ";
            calc++;
        }
        else display+=nums[i].textContent;

        if(calc > 1) {calc = 0; calculate(display);}
        if(display[0]==="0" && calc===0) display=display.slice(1); 
        screen.textContent = display;
    });

    nums[i].addEventListener("mouseover",()=>{
        nums[i].classList.add("select");
    });

    nums[i].addEventListener("mouseleave",()=>{
        nums[i].classList.remove("select");
    });
}

function calculate(s)
{
    let arr = s.split(" ");
    if(!arr[2]) return;
    firstNum = arr[0];
    op = arr[1];
    secondNum = arr[2];
    display = operate (firstNum,secondNum,op);
    if(arr[3]) 
    {
        op = arr[3];
        display = display + " " + op + " ";
        calc = 1;
    }
    screen.textContent = display;
}