burger=document.querySelector('.burger');
navbar=document.querySelector('.navbarlist')
menulist=document.querySelector('.menulist')


burger.addEventListener('click',()=>{
//   burger.classList.toggle('visibility-nav');
  navbar.classList.toggle('visibility-nav');
  navbar.classList.toggle('nav-height-resp');
  menulist.classList.toggle('visibility-nav');
})