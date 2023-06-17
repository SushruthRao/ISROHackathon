let submitbtn = document.getElementById("submit-btn");
var px1 = document.getElementById("plane-1-x-1");
var px2 = document.getElementById("plane-1-x-2");
var zpx1 = document.getElementById("z-plane-1-x-1");
var zpx2 = document.getElementById("z-plane-1-x-2");

var py1 = document.getElementById("plane-2-y-1");
var py2 = document.getElementById("plane-2-y-2");
var zpy1 = document.getElementById("z-plane-2-y-1");
var zpy2 = document.getElementById("z-plane-2-y-2");
submitbtn.addEventListener('click',function () {
    
    console.log(px1.value);
    let pxval1 = px1.value; //a
    let pxval2 = px2.value;
    let zpxval1 = zpx1.value; //a
    let zpxval2 = zpx2.value;

   
    let pxval3 = py1.value;
    let pxval4 = py2.value;
    let zpxval3 = zpy1.value;
    let zpxval4 = zpy2.value;
    
    
    
    let resultbox = document.getElementById("result-btn");
    let determinant = ((pxval1*pxval2) - (pxval3*pxval4));
    console.log("determinant  = " + determinant);
    
    if((pxval1/pxval2) != (pxval3/pxval4) && (zpxval1/zpxval2) != (zpxval3/zpxval4) )
    {
        
        resultbox.innerText = "Chance of crashing !";
    }
    else{
        
        resultbox.innerText = "No crash !";
    }
    var plane1 = {
        x: [pxval1, zpxval1],
        y: [pxval2, zpxval2],
        name: 'Plane-1',
        mode: 'marker',
        type: 'scatter'
    };
    console.log(plane1);

    var plane2 = {
        x: [pxval3, zpxval3],
        y: [pxval4, zpxval4],
        name: 'Plane-2',
        mode: 'marker',
        type: 'scatter'
    };

    

    var data = [plane1, plane2];
    console.log(data);
    Plotly.newPlot('plot', data);
})


//id="z" class="d-flex h-100 text-center "
///////////////


