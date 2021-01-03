const checkbox= document.getElementById('boxcheck');
const mode=document.getElementById('modus')
const ball = document.querySelector('.toggle-ball')

checkbox.addEventListener('click',() => {
        // debugger
        if(mode.textContent === 'Dark Mode'){
                mode.textContent='Light Mode'
                document.body.classList.toggle('dark');
                ball.classList.toggle('toggled');
                checkbox.classList.toggle('colored');
                return null;
                
        }
        if(mode.textContent === 'Light Mode'){
                document.body.classList.toggle('dark');
                mode.textContent='Dark Mode';
                ball.classList.toggle('toggled');
                checkbox.classList.toggle('colored');
                return null;
        }
});
 
