




const validateInputs = id =>{
    //getting the input values by using the id as an parameter
    const inputVal = document.getElementById(id).value;

    const idVal = document.getElementById(id);

    //input next sibling is the span element
    const icon = idVal.nextSibling;

    console.log(icon);
    if(inputVal.length <= 8 || inputVal === " " || inputVal.startsWith("_") || inputVal.startsWith("-")){
        icon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        icon.style.marginTop = '15px';
        icon.style.color = "red";
    }else{
        
        icon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        icon.style.marginTop = '15px';
        icon.style.color = "green";
    }

}