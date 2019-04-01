var c=1;
setInterval(() => {
    if(document.getElementsByClassName("proceedBtn").length >=1){
        document.getElementsByClassName("proceedBtn")[0].click();
        c=1;
    }
    else{
        document.getElementById("right_"+c).click();
        c++;
    }
 
}, 2000);

