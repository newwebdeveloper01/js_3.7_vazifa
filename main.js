var form=document.querySelector(".form");
var sum=document.querySelector(".sum");
var select=document.querySelector(".select");
var natija=document.querySelector(".natija")
var button=document.querySelector(".button")
console.log("sdfufydb");
 form.addEventListener('submit', function(evt){
    evt.preventDefault();
    
    const content={
        som:sum.value,
        ozgarish:select.value
        
    }
    if(content.ozgarish=="usd"){
        content.pul=Number(content.som/10955).toFixed(1);
        natija.textContent=content.pul +"$";
    }
   else if (content.ozgarish=="rub"){
        content.pul=Number(content.som/200).toFixed(1);
        natija.textContent=content.pul + "₽";
    }
    else if(content.ozgarish=="eur"){
        content.pul=Number(content.som/11500).toFixed(1);
        natija.textContent=content.pul +"₤";
    }
    else 
    {
        natija.textContent="pul birligini tanlang";
    }
   
 } )