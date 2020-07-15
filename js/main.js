const checkbox= document.getElementById('boxcheck');
const mode=document.getElementById('modus')

checkbox.addEventListener('change',e=>{
        if(e.target.checked){
                mode.textContent='Dark Mode'
        }else{
                document.body.classList.toggle('dark');
                mode.textContent='Light Mode'
        }
});

