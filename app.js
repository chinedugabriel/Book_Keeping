
// function to that converts and calculate the value in the input
function calculate(inp,vw){
    vw.value = eval(inp.value);
};

let parent_tbody = document.getElementById("p-tbody");
let cal = document.getElementsByClassName("cal");

let view = document.getElementsByClassName("view");
let averageNum = document.getElementById("average");

let months = ['january','february','march','april','may','june','july','august','september','october','november','december'];

// let num = 12;
// this generates the tables
for (let j = 0; j < months.length; j++){
    parent_tbody.innerHTML += `  
    <tr>            
        <td class ="months">
            ${months[j]}
        </td>
        <td >
            <input type='text' class='cal'>
        </td>
        <td>                  
            <input type='text'  class='view'>
        </td>
    </tr>`;

}

let total = document.getElementById("total");
let result = [];
let countAverage = 0;

// this assigns an event on each input tag that is used for sending in values into the calculate function which displays the result in the second input. and give's the total 
for( let i = 0; i < cal.length; i++){
    cal[i].addEventListener("change", ()=>{ 

         calculate(cal[i], view[i]); 

// result takes in the value from the input that shows individual evaluation and is been converted into an array ;
         result.push(parseFloat(view[i].value));

// since result is an array it is reduce to sum of all it's value
         total.value = result.reduce((t,n)=>{ return t + n});

// here we loop through all the input to check for the once that has values and then get the average 
        for(let p = 0; p < view.length; p++){
            if(view[p].value !== ""){
                
                countAverage = result.reduce((t,n)=>{ return t + n}) / result.length;

                    averageNum.value =   countAverage;
     
            }
        }

        });

}
