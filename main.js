const openModalBtn=document.querySelector('#open-btn')
const closeBtn=document.querySelector('#close-btn')
const modalContainer=document.querySelector('#modal-container')

openModalBtn.addEventListener('click',()=>{
    modalContainer.style.display='block'
})


closeBtn.addEventListener('click',()=>{
    modalContainer.style.display='none'
})
window.addEventListener('click',(e)=>{
    
if(e.target===modalContainer){
    modalContainer.style.display='none'

}
})