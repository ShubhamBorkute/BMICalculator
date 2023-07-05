let button=document.getElementById('btn');
button.addEventListener('click',()=>{

    const height=parseFloat(document.getElementById('height').value);
    const weight=parseFloat(document.getElementById('weight').value);
    const result=document.getElementById('output');
    
    let height_status=false;
    let weight_status=false;

    if(isNaN(height)||height<=0){
        document.getElementById('height_error').innerHTML="Enter valid Height";
    }
    else{
        document.getElementById('height_error').innerHTML='';
        height_status=true;
    }
    if(isNaN(weight)||weight<=0){
        document.getElementById('weight_error').innerHTML="Enter valid Weight";
    }
    else{
        document.getElementById('weight_error').innerHTML='';
        weight_status=true;
    }

    if(height_status && weight_status ){
    
        const bmi=(weight/((height*height)/10000)).toFixed(2);

        if(bmi<18.6){

            result.innerHTML="Under Weight : "+bmi;
        }
        else if(bmi>=18.6 && bmi<=24.4){
            result.innerHTML="Normal : "+bmi;
        }
        else{
            result.innerHTML="Overflow Weight : "+bmi;
        }

    }else{
        alert("Something Went Wrong");
      result.innerHTML='';
    }



});

function reload(){
    window.location.reload();
}