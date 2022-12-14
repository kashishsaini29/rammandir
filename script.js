var morebtn=document.getElementsByClassName("myBtn");
var reqele=morebtn[0];
var dots=document.getElementsByClassName("dots");
var moretext=document.getElementsByClassName("more");
   reqele.addEventListener('click',function(){
   if(dots[0].style.display === "none"){
        dots[0].style.display="inline";
        morebtn[0].innerText="Read More";
        moretext[0].style.display="none";
    }
    else{
        dots[0].style.display="none";
        morebtn[0].innerText="Read Less";
        moretext[0].style.display="inline";
    }
    
    // moretext[0].style.display="inline";
});