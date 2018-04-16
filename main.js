document.addEventListener('DOMContentLoaded', function(){ 

    const container = createSVG();
    document.getElementById('spinners').appendChild(container);
    
    let options =  {
        color: "#FC4346",
        maxVal: 100,
        minVal: 10,
        step: 7,      
        radius: 100,
        strokewidth: 30,
        smoothscroll : false,
        name : "Transportation"
    };    

    let options2 =  {
        color: "#F3781C",
        maxVal: 100,
        minVal: 5,
        step: 10,      
        radius: 150,
        strokewidth: 30,
        smoothscroll : true,
        name : "Food"
    };    
    
    let options3 =  {
        color: "#009E23",
        maxVal: 20,
        minVal: 4,
        step: 2,      
        radius: 200,
        strokewidth: 30,
        smoothscroll : false,
        name : "Insurance"

    };    
    
    let options4 =  {
        color: "#0085BD",
        maxVal: 300,
        minVal: 50,
        step: 5,      
        radius: 250,
        strokewidth: 30,
        smoothscroll : true,
        name : "Entertainment"

    };    
    
    let options5 =  {
        color: "#5F3A6F",
        maxVal: 300,
        minVal: 50,
        step: 5,      
        radius: 300,
        strokewidth: 30,
        smoothscroll : false,
        name : "Healthcare"
    };    
    
    
    
    
    CreateCircle();
    CreateCircle();
    CreateCircle();
    CreateCircle();
    CreateCircle();   
    CreateCircle();
    CreateCircle();
    CreateCircle();
    CreateCircle();
    CreateCircle();
    CreateCircle();
    CreateCircle();
    CreateCircle();





}, false);




function createSVG(){
    return createSvgElement("svg", {
                            id:"container",
                            preserveAspectRatio: "xMidYMid slice",
                            viewBox: "1 1 1500 1500",
                            width: "100",
                            height: "100"
                          })
    
}


