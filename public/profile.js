let showBtnProfile = document.getElementById('showBtnProfile')
// let menuProfile = document.getElementById('menuProfile')
let isMenuProfileShowing = false

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
