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
    input=y+'';
}
function clearf()
{
    input='';
    document.getElementById("t").value=' ';
}
$(document).keypress(function(event){
    let b=event.key;
    if(!isNaN(b)||b=='+'||b=='-'||b=='*'||b=='/'||b=='.')
    Input(b);
    else if(b=='='||b=='Enter')
    calculate();
    else if(b=='c')
    clearf();
    else
    alert("wrong input")
});
