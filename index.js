let input='';
function Input(x)
{
    input+=x;
    document.getElementById("t").value=input;
    return input;
}
function calculate()
{
    var y=eval(input);
    document.getElementById("t").value=y;
    input='';
}