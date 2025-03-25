function SubmitValidation(){
    const Name = document.getElementById("username").value
    const Mail = document.getElementById("email").value
    const Number = document.getElementById("phone").value
    const Negara = document.getElementById("Country").value
    const Check = document.getElementById("Checkbox").checked


    // Saat Kosong 
    if(Name == ""){
        alert("Username can't be empty")
    }
    // Email diakhiri dengan @gmail.com
    else if(!Mail.endsWith("@gmail.com")){
        alert("Email always end with gmail.com")
    }
    //Nomor telepon diawali dengan 0
    else if(Number.charAt(0) != 0){
        alert("Your Phone number must start with 0")
    }
    //Mengisi Dropdown tidak boleh empty
    else if(Negara == "empty"){
        alert("Country cannot be empty")
    }
    //Harus Centang terms and conditions
    else if(!Check){
        alert("You must agree the terms and conditions")
    }
    else{
        alert(`Thank you for submitted ${Name}`)
    }
}