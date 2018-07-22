window.onscroll = function() {
    /*navbar animation*/
    if ( document.documentElement.scrollTop > 400) {
         document.getElementById("navbar").className = "roll-down";
        
    
    }
       else {
        document.getElementById("navbar").className = "roll-up";
      }
    
    
    
    /*portfolio animation*/
    if (document.documentElement.scrollTop > 900 ){
        document.getElementById('link-left').style.animation =' mymove 1s';
        document.getElementById('link-left').style.visibility='visible';
        
        
        document.getElementById('link-right').style.animation =' mymoveleft 1s';
        document.getElementById('link-right').style.visibility='visible';
        
        
        document.getElementById('link-center').style.animation =' mymovecenter 1s';
        document.getElementById('link-center').style.visibility='visible';
        
        
        
    }
    
    if (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 800  ){
    document.getElementById('kompo').style.backgroundColor ='#F7C502';}
    document.getElementById('portfoliooo').style.backgroundColor ='inherit';
    document.getElementById('kola').style.backgroundColor ='inherit';
    
    if (document.documentElement.scrollTop >900 && document.documentElement.scrollTop < 1200 ){
    document.getElementById('portfoliooo').style.backgroundColor ='#F7C502';
    document.getElementById('kompo').style.backgroundColor ='inherit';
    }
    
    if (document.documentElement.scrollTop > 1300 ){
    document.getElementById('portfoliooo').style.backgroundColor ='inherit';
    document.getElementById('kola').style.backgroundColor ='#F7C502';
    
    }
    if (document.documentElement.scrollTop < 300){
        document.getElementById('kompo').style.backgroundColor ='inherit';
    }
    
    
}

/*skills animation*/
window.sr = ScrollReveal();
sr.reveal('.item1', {duration: 1200 }, 320);











       