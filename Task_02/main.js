      // show menu
const navMenu = document.getElementById('nav__menu'),
      navToggle = document.getElementById('nav__toggle'),
      navClose = document.getElementById('nav__close')

      // menu show
 if(navToggle){
    navToggle.addEventListener('click', ()=>{
      navMenu.classList.add('show-menu')
    })
 }     

      // menu hidden
if(navClose){
   navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu')
   } )
}      
      // remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=> {
  const navMenu  = document.getElementById('nav__menu')
  // when click on nav__link to remove the show-menu
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// home typed js
const typedHome = new Typed('#home__typed', {
    strings: [
        'Front End Developer',
        'Back End Developer',
        'UI/UX Designer'
    ],
    typeSpeed: 60,      // Speed of typing
    backSpeed: 30,      // Speed of erasing
    backDelay: 2000,    // How long it stays before erasing
    loop: true,
    cursorChar: '_', 
});
      // add shadow header
const shadowHeader = ()=> {
    const header = document.getElementById("header")
    // add a class if the button offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')     
}
window.addEventListener('scroll', shadowHeader)

// EmailJS initialization (ADD THIS ONCE)
emailjs.init('hN5HAIFiM2Jd1U2tw');

      // contact email js
const contactForm = document.getElementById('contact__form'),
      contactMessage = document.getElementById('contact__message')

const sendEmail = (e) => {
  e.preventDefault()

  emailjs.sendForm(
    'service_no8txgr',
    'template_0ficz0f',
    '#contact__form'
  )
  .then(() => {
    contactMessage.textContent = 'Message sent successfully ✅'
    contactForm.reset()

    setTimeout(() => {
      contactMessage.textContent = ''
    }, 5000)
  })
  .catch((error) => {
    contactMessage.textContent = 'Message not sent ❌'
    console.error(error)
  })
}

contactForm.addEventListener('submit', sendEmail)
 
      // show scroll up
const scrollUp = () => {
      const scrollUp = document.getElementById('scroll-up')
      // when the scroll is higher than 350 vieport height, add the show-scroll class to the page.
      this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

   
// Scroll selection active link
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
   const scrollDown = window.scrollY

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
         sectionsClass.classList.add('active-link')
      } else {
         sectionsClass.classList.remove('active-link')
      }
   })
}

window.addEventListener('scroll', scrollActive)   
      // scroll reveal animation
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
   reset: false
})

sr.reveal(`.home__content, .resume__content:nth-child(1), .footer__container`)
sr.reveal(`.home__data, .resume__content:nth-child(2)`, { delay: 500, origin: 'bottom' })
sr.reveal('.home__social', { origin: 'left' })
sr.reveal('.home__image', { origin: 'right' })

    // contact part
sr.reveal('.contact__card', { interval: 100, origin: 'left' });
sr.reveal('.contact__form', { origin: 'right' });    

            // skill part
sr.reveal('.skills__content', { interval: 100 });
sr.reveal('.skills__data', { origin: 'left', interval: 100 });
sr.reveal('.skills__circle-box', { origin: 'bottom', interval: 100 });

sr.reveal('.about__content, .contact__content', { origin: 'bottom' })
sr.reveal('.about__image, .contact__form', { delay: '300' })

sr.reveal('.projects__card', { interval: '100' })

                  // NEW SETUP
const modal = document.getElementById('projectModal')
const modalImages = document.getElementById('modalImages')
const modalClose = document.getElementById('modalClose')

const viewButtons = document.querySelectorAll('.view-project')

viewButtons.forEach(button => {
  button.addEventListener('click', () => {

    // Clear old images
    modalImages.innerHTML = ''

    // Get image list
    const images = button.dataset.images.split(',')

    images.forEach(src => {
      const img = document.createElement('img')
      img.src = src.trim()
      modalImages.appendChild(img)
    })

    modal.classList.add('active')
  })
})

modalClose.addEventListener('click', () => {
  modal.classList.remove('active')
})

// Close when clicking outside
modal.addEventListener('click', (e) => {
  if(e.target === modal){
    modal.classList.remove('active')
  }
})                  
