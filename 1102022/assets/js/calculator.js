function check(n) {
    if (n % 2 == 0) return "Even";
    else return "Odd";



}

function fact(n) {
    if(n==0) return 1;
    if(n==1) return 1;
    
    return n*fact(n-1);




}
function add(input1, input2) {
    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value;
    res = parseFloat(input1) + parseFloat(input2);

    document.getElementById("result").value = res;
    document.getElementById("evenodd").value = check(res);
    document.getElementById("fact").value = fact(res);
}

function sub(input1, input2) {
    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value;
    res = input1 - input2;
    document.getElementById("result").value = res;

    document.getElementById("evenodd").value = check(res);
}

function mul(input1, input2) {
    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value;
    res = input1 * input2;
    document.getElementById("result").value = res;
    document.getElementById("evenodd").value = check(res);
}

function div(input1, input2) {
    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value;
    res = input1 / input2;
    document.getElementById("result").value = res;
    document.getElementById("evenodd").value = check(res);
}

function mod(input1, input2) {
    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value;
    res = input1 % input2;
    document.getElementById("result").value = input1 % input2;
    document.getElementById("evenodd").value = check(res);
}

function per(input1, input2) {
    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value;
    res = (input1 / input2) * 100;
    document.getElementById("result").value = res;
    document.getElementById("evenodd").value = check(res);
}