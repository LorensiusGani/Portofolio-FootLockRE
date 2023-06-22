const nav = document.querySelector('.garis-tiga input');
const respon = document.querySelector('nav ul');    

nav.addEventListener('click', function () {
    respon.classList.toggle('muncul-responsive');
})

const searchclick = () =>{
    const searchfoot = document.getElementById("Search-shoes").value;
    const store = document.getElementById("Shoes-items")
    const items = document.querySelectorAll(".Products")
    const name = store.getElementsByTagName('h3')

    for(var i = 0;i < name.length; i++){
        let find =  items[i].getElementsByTagName('h3')[0];

        if(find){
            let value = find.textContent || find.innerHTML;

            if(value.indexOf(searchfoot) > -1){
                items[i].style.display = "";
            }else{
                items[i].style.display = "none";
            }
        }
    }

    
}
