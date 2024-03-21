const red = document.querySelector('.card-red');
const dark = document.querySelector('.card-dark');

red.addEventListener('mouseenter',()=> {
    wrapper.classList.add('wrapper-red');
}); 
red.addEventListener('mouseleave', () => {
    wrapper.classList.remove('wrapper-red');
});
dark.addEventListener('mouseenter',()=> {
    wrapper.classList.add('wrapper-dark');
}); 
dark.addEventListener('mouseleave', () => {
    wrapper.classList.remove('wrapper-dark');
});

