const hamMenuBtn = document.querySelector('.header__smIcons')
const smMenu = document.querySelector('.header__smallmenu')
const mainMenuBtn = document.querySelector('.header__smIcons--ham')
const headerHamMenuCloseBtn = document.querySelector('.header__smIcons--close')
const headerSmallMenuLinks = document.querySelectorAll('.header__smallmenu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smMenu.classList.contains('header__smallmenu--active')) {
    smMenu.classList.remove('header__smallmenu--active')
  } else {
    smMenu.classList.add('header__smallmenu--active')
  }
  if (mainMenuBtn.classList.contains('d-none')) {
    
    mainMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    mainMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smMenu.classList.remove('header__smallmenu--active')
    hamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}
/*
// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = '/'
})
;*/