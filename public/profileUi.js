let showBtnProfile = document.getElementById('showBtnProfile')
let showMobileBtnProfile = document.getElementById('showMobileBtnProfile')
let isMenuProfileShowing = false
let isMobileMenuShowing = false

showBtnProfile.addEventListener('click', ()=>{
  console.log('click  ')
  isMenuProfileShowing = !isMenuProfileShowing
  if(isMenuProfileShowing){
    document.getElementById('menuProfile').style.display = 'block'
    // isMenuProfileShowing = true
  }else{
    document.getElementById('menuProfile').style.display = 'none'
    // isMenuProfileShowing = false
  }
  // document.getElementById('menu').style.display = 'none'
})
showMobileBtnProfile.addEventListener('click', ()=>{
  console.log('click  ')
  isMobileMenuShowing = !isMobileMenuShowing
  if(isMobileMenuShowing){
    document.getElementById('mobile-menu').style.display = 'block'
    // isMenuProfileShowing = true
  }else{
    document.getElementById('mobile-menu').style.display = 'none'
    // isMenuProfileShowing = false
  }
  // document.getElementById('menu').style.display = 'none'
})
