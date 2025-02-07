console.log('javascript connected');
    let headerText = document.getElementById('headerText');
    let kpopImg = document.getElementById('kpopImg');
    let rapImg = document.getElementById('rapImg');
    let body = document.getElementById('body');
    let kpopMontage = document.getElementById('kpopmainVid');
    let textHeaderH1 = document.getElementById('textHeaderH1');
    function hoverIn(){
        headerText.style.cursor = 'pointer';
    }

    function hover(){
        kpopImg.style.cursor = 'pointer';
        rapImg.style.cursor = 'pointer';
        kpopMontage.style.display = 'block';
        
    } 
    function hoverOut(){
        body.style.cursor = 'crosshair';
        kpopMontage.style.display = 'none';
    }

    // function kpopVid(){
    //     if(kpopMontage.style.display === 'block'){
    //         kpopMontage.style.display = 'none';
    //     }else{
    //         kpopMontage.style.display = 'block';
    //     }
    // }
    // function titleclick(){
       
    //     headerText.style.margin = '0';
    //     body.style.overflow = 'unset';
    // }
    function titleclick(){
        headerText.style.margin = '0vh';
        body.style.overflow = 'unset';
        headerText.style.fontSize = 'unset';
    }