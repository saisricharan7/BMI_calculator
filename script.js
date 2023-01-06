let age= document.querySelector("#age");
let gender= document.querySelectorAll(".gender-value");
let height= document.querySelector("#height");
let weight= document.querySelector("#weight");
let result= document.querySelector(".result");
let calculate= document.querySelector("#calculate");
let clear = document.querySelector("#clear");
let bmi
age.addEventListener('change',()=>{
    if(age.value<2 || age.value>120)
    document.querySelector(".category").innerText="Please Enter Age Between 2 and 120"
})
calculate.addEventListener("click",()=>{
    if(age.value>2 && age.value<120){
    let height_m= parseFloat(height.value/100).toFixed(2)
    let rounded_weight= parseFloat(weight.value).toFixed(2)
    bmi= parseFloat((rounded_weight)/(height_m *height_m)).toFixed(2)
    let category='';
    if(bmi<16){
        category='Severe Thinness'
    }
    else if(bmi<17){
        category='Moderate Thinness'
    }
    else if(bmi<18.5){
        category='Mild Thinness'
    }
    else if(bmi<25){
        category='Normal'
    }
    else if(bmi<30){
        category='Overweight'
    }
    else if(bmi<35){
        category='Obese Class 1'
    }
    else if(bmi<40){
        category='Obese Class 2'
    }
    else{
        category='Obese Class 3'
    }
    result.innerHTML=`<strong>BMI = ${bmi} kg/m^2</strong>`
    document.querySelector(".category").innerText=`(${category})`}
})
clear.addEventListener('click',()=>{
    age.value='';
    gender.value='';
    height.value='';
    weight.value='';
})