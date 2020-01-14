(() => {
    console.log('fired');
    let menuToggle = document.querySelector('#toggle');
    let nav = document.querySelector('nav')
    
    


    function toggleMenu(){
        console.log('hamburger menu clicked!')
        nav.classList.toggle('hide-me');

 
    }
   

    

    menuToggle.addEventListener('click', toggleMenu)



    

 
})()