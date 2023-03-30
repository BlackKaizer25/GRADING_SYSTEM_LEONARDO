function show_result(){
    let AVG, SUM, Jose, Web, Path, Prog, Net, Eth, OS;
    Jose  = Number(document.getElementById('A').value);
    Web  = Number(document.getElementById('B').value);
    Path  = Number(document.getElementById('C').value);
    Prog  = Number(document.getElementById('D').value);
    Net  = Number(document.getElementById('E').value);
    Eth  = Number(document.getElementById('F').value);
    OS  = Number(document.getElementById('G').value);

    SUM = Jose + Web + Path + Prog + Net + Eth + OS;
    AVG = SUM/7;
    document.getElementById('AVE').innerHTML = parseFloat(AVG).toFixed(2);

    if(AVG>=90 && AVG<=100){
        document.getElementById('REM').innerHTML = "PASSED"
        document.getElementById('DES').innerHTML = "Outstanding";
    }
    else if(AVG>=85 && AVG<=89){
        document.getElementById('REM').innerHTML = "PASSED"
        document.getElementById('DES').innerHTML = "Very Satisfactory";
    }
    else if(AVG>=80 && AVG<=84){
        document.getElementById('REM').innerHTML = "PASSED"
        document.getElementById('DES').innerHTML = "Satisfactory";
    }
    else if(AVG>=75 && AVG<=79){
        document.getElementById('REM').innerHTML = "PASSED"
        document.getElementById('DES').innerHTML = "Fairly Satisfactory";
    }
    else if(AVG>=0 && AVG<75){
        document.getElementById('REM').innerHTML = "FAILED"
        document.getElementById('DES').innerHTML = "FAILED";
    }
    else{
        document.getElementById('REM').innerHTML = "DOES NOT EXIST"
        document.getElementById('DES').innerHTML = "DOES NOT EXIST";
    }
}