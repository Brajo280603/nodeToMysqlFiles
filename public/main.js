let email = document.getElementById("email")
let name = document.getElementById("name")
let file_a = document.getElementById("file_a")
let file_b = document.getElementById("file_b")
let submit_a = document.getElementById("submit_form_a")
let submit_b = document.getElementById("submit_form_b")


// email.value
// name.value
// file_a.value
// file_b.value





submit_a.addEventListener("click",async()=>{
    
    submit_a_todb();



    let formData = new FormData();
    formData.append('myFile',  file_a.files[0]);


    await fetch("http://localhost:1234/upload_data_a", {
        method: "POST",   
        body:formData,
    })

        file_a.disabled = true
  
    alert("form 1 is submitted! submit form 2 to continue")

    // .then(response =>{
    //     return response.json()
    // } )
    // .then(json => console.log(json));
   
} )


submit_b.addEventListener("click",()=>{
    
    let formData = new FormData();
    formData.append('myFile',  file_b.files[0]);


    fetch("http://localhost:1234/upload_data_b", {
        method: "POST",   
        body:formData,
    })
 

    if(file_a.disabled == false){
        file_b.disabled = true
    }else{
        file_a.disabled = false
        file_b.disabled = false
        email.disabled = false;
        name.disabled = false;

        file_a.value = ""
        file_b.value = ""
        email.value = "";
        name.value = "";

        alert("Thank you for your Submission!")

    }
    // .then(response =>{
    //     return response.json()
    // } )
    // .then(json => console.log(json));
    
} )




  function submit_a_todb(){
    fetch("http://localhost:1234/upload", {   
        method: "POST",
        body: JSON.stringify({
            email: email.value,
            name: name.value,
        }),     
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    email.disabled = true;
    name.disabled = true;

    
    // .then(response =>{
        
    //     return response.json()
    // } )
    // .then(json => console.log(json));

  }