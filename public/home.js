let hideBtn = document.getElementById('hideBtn')
let showBtn = document.getElementById('showBtn')

let showBtnProfile = document.getElementById('showBtnProfile')
// let menuProfile = document.getElementById('menuProfile')
let isMenuProfileShowing = false

hideBtn.addEventListener('click', ()=>{
  console.log('click')
  document.getElementById('menu').style.display = 'none'
})
showBtn.addEventListener('click', ()=>{
  console.log('click')
  document.getElementById('menu').style.display = 'block'
})

showBtnProfile.addEventListener('click', ()=>{
  console.log('click  ')
  if(isMenuProfileShowing){
    document.getElementById('menuProfile').style.display = 'block'
    isMenuProfileShowing = true
  }else{
    document.getElementById('menuProfile').style.display = 'none'
    isMenuProfileShowing = false
  }
  // document.getElementById('menu').style.display = 'none'
})
