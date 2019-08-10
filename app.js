
window.onload = function ()
{
    var button = document.getElementById("button");
    button.onclick = function (){
        var radiogroup1 = document.getElementsByName("radiogroup1");
        for (x=0;x<radiogroup1.length; x++){
            if(radiogroup1[x].checked){
                console.log(radiogroup1[x].value);
                document.getElementById("puntuacion1").value = radiogroup1[x].value;
            }
        }


        var radiogroup2 = document.getElementsByName("radiogroup2");
        for (x=0;x<radiogroup2.length; x++){
            if(radiogroup2[x].checked){
                console.log(radiogroup2[x].value);
                document.getElementById("puntuacion2").value = radiogroup2[x].value;
            }
        }

        var radiogroup3 = document.getElementsByName("radiogroup3");
        for (x=0;x<radiogroup3.length; x++){
            if(radiogroup3[x].checked){
                console.log(radiogroup3[x].value);
                document.getElementById("puntuacion3").value = radiogroup3[x].value;
            }
        }

        var radiogroup4 = document.getElementsByName("radiogroup4");
        for (x=0;x<radiogroup4.length; x++){
            if(radiogroup4[x].checked){
                console.log(radiogroup4[x].value);
                document.getElementById("puntuacion4").value = radiogroup4[x].value;
            }
        }

        var radiogroup5 = document.getElementsByName("radiogroup5");
        for (x=0;x<radiogroup5.length; x++){
            if(radiogroup5[x].checked){
                console.log(radiogroup5[x].value);
                document.getElementById("puntuacion5").value = radiogroup5[x].value;
            }
        }

        var radiogroup6 = document.getElementsByName("radiogroup6");
        for (x=0;x<radiogroup6.length; x++){
            if(radiogroup6[x].checked){
                console.log(radiogroup6[x].value);
                document.getElementById("puntuacion6").value = radiogroup6[x].value;
            }
        }

        var radiogroup7 = document.getElementsByName("radiogroup7");
        for (x=0;x<radiogroup7.length; x++){
            if(radiogroup7[x].checked){
                console.log(radiogroup7[x].value);
                document.getElementById("puntuacion7").value = radiogroup7[x].value;
            }
        }

        var radiogroup8 = document.getElementsByName("radiogroup8");
        for (x=0;x<radiogroup8.length; x++){
            if(radiogroup8[x].checked){
                console.log(radiogroup8[x].value);
                document.getElementById("puntuacion8").value = radiogroup8[x].value;
            }
        }

        var radiogroup9 = document.getElementsByName("radiogroup9");
        for (x=0;x<radiogroup9.length; x++){
            if(radiogroup9[x].checked){
                console.log(radiogroup9[x].value);
                document.getElementById("puntuacion9").value = radiogroup9[x].value;
            }
        }

        var radiogroup10 = document.getElementsByName("radiogroup10");
        for (x=0;x<radiogroup10.length; x++){
            if(radiogroup10[x].checked){
                console.log(radiogroup10[x].value);
                document.getElementById("puntuacion10").value = radiogroup10[x].value;
            }
        }


        var suma = parseInt(document.getElementById("puntuacion1").value) + parseInt(document.getElementById("puntuacion2").value) + parseInt(document.getElementById("puntuacion3").value) + parseInt(document.getElementById("puntuacion4").value) + parseInt(document.getElementById("puntuacion5").value) + parseInt(document.getElementById("puntuacion6").value) + parseInt(document.getElementById("puntuacion7").value) + parseInt(document.getElementById("puntuacion8").value) + parseInt(document.getElementById("puntuacion9").value) + parseInt(document.getElementById("puntuacion10").value);

        console.log(suma);
        document.getElementById("puntuaciontotal").value = suma;

    if(suma<=20){
        document.getElementById("interpretacion").value = "Dependencia total";
    }
    else if (suma<=35){
        document.getElementById("interpretacion").value = "Dependencia grave";
    }
    else if (suma<=55){
        document.getElementById("interpretacion").value = "Dependencia moderada";
    }
    else if (suma<100){
        document.getElementById("interpretacion").value = "Dependencia leve";
    }
    else if (suma==100){
        document.getElementById("interpretacion").value = "Independiente";
    }
    else {
        document.getElementById("interpretacion").value = "";
    }





        


    }




} 
