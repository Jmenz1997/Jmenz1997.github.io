/*function verify(){
	var checkBox1 = document.getElementById("lactoseF");
	var checkBox2 = document.getElementById("nutsF");
	var checkBox3 = document.getElementById("organique");
	var checkBox4 = document.getElementById("none");


	if(checkBox4.checked==true && (checkBox1.checked==true || checkBox2.checked==true || checkBox3.checked==true)){
		alert("Vous ne pouvez pas cocher plusieur veterinaireet une autre case, SVP réessayer");
	}else{
		alert("Votre choix est confirmé, cliquez sur 'suivant'")
	}
}*/

function validationForm(fName,lName,txtPhone,animalName,debit) {
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var letters = /^[A-Za-z]+$/;
    var phoneFilter = /^[0-9]+$/;
    
    if(txtPhone.value.match(phoneFilter)){
        //doNothing
    }
    else{alert("Le ' NUMÉRO DE TÉLÉPHONE ' doit contenir seulement de chiffre");}

    
   if(fName.value.match(letters)){
       //doNothing
   }
   else{alert(" Le ' PRÉNOM ' doit contenir seulement des 'lettres'");}

   if(lName.value.match(letters)){
       //doNothing
   }
   else{alert(" Le ' NOM ' doit contenir seulement des 'lettres'");}
   
   

   if(animalName.value.match(letters)){
       //doNothing
   }
   else{alert("Le ' NOM DE L'ESPÈCE ANIMAL ' doit contenir seulement des 'lettres'");}
   
   if(debit.value.match(phoneFilter)){
       var a=debit.value.length;
       if(!(a==16)){
           alert("Votre carte de crédit doit contenir '16 chiffres' !")
       }
       //doNothing
   }
   else{alert("Le numéro de 'carte de crédit' doit contenit seulement de 'chiffres'");}
   



   
}
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";
function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    var checkBox1=document.getElementById("radio-1");
    var checkBox2=document.getElementById("radio-2");
    var checkBox3=document.getElementById("radio-3");

    if(checkBox1.checked==true)
    if (date.getDay() === 0 || date.getDay()===6  )
        return [false];
    if(checkBox2.checked==true)
    if (date.getDay() === 0 || date.getDay()===5 || date.getDay()===6)
        return [false];
    
    if(checkBox3.checked==true)
    if (date.getDay() === 0 || date.getDay()===2 || date.getDay()===6 || date.getDay()===1 )
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}
function verifyCheckedVet(){
    var checkBox1=document.getElementById("radio-1");
    var checkBox2=document.getElementById("radio-2");
    var checkBox3=document.getElementById("radio-3");
    if(checkBox1.checked==false && checkBox2.checked==false && checkBox3.checked==false){
        return alert("Veuillez selectionner un veterinaire !");
    }
}
$(document).ready(function(){
    $( "#dateInput" ).datepicker(
    {
        dateFormat: setDateFormat,
        // no calendar before June 1rst 2020
        minDate: new Date('06/01/2020'),
        maxDate: '+4M',
        // used to disable some dates
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: disableDates
    });
    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

});
function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("SVP entrer une adresse mail valide !");  
  return false;  
  }  
}  