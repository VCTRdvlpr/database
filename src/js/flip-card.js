var elements = [          
    ['leon', 'leon'],        
];

var elements01 = [          
    ['ada', 'ada'],        
];

var elements02 = [          
    ['krauser', 'krauser'],        
];

var elements03 = [          
    ['ashley', 'ashley'],        
];

var elements04 = [          
    ['chris', 'chris'],        
];

var elements05 = [
    ['claire', 'claire']
];

var elements06 = [
    ['hunk', 'hunk']
];

var elements07 = [
    ['wesker', 'wesker']
];
    
    
function ShowCard(elements){
    
    for (var i = 0; i < elements.length; i++) {
        var elementId = elements[i][0];
        var elementImg = document.getElementById(elementId + '-img');
        var elementTxt = document.getElementById(elementId + '-txt');
        
        if(elementImg && elementTxt){
            elementImg.style.display='none';
            elementTxt.style.display='flex';                        
        }
    }
};

function ReturnCard(elements){

    for (var i = 0; i < elements.length; i++) {
        var elementId = elements[i][0];
        var elementTxt = document.getElementById(elementId + '-txt');
        var elementImg = document.getElementById(elementId + '-img');
        
        if(elementImg && elementTxt){
            elementTxt.style.display='none';
            elementImg.style.display='flex';                        
        }
    }
};
