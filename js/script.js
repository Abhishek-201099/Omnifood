// https://darkgone-omnifood.netlify.app/

// TO UPDATE THE YEAR IN FOOTER WITH THE CURRENT YEAR
document.querySelector('.year').textContent=new Date().getFullYear();

// TO MAKE THE MOBILE NAVIGATION WORK
document.querySelector('.btn-mobile-nav').addEventListener('click',function(){
  document.querySelector('.header').classList.toggle('nav-open');
}); 

// ANIMATING SMOOTH SCROLLING

document.querySelectorAll('a:link').forEach(function(link){
  link.addEventListener('click',function(e){
    e.preventDefault();
    // scroll to top
    if(link.getAttribute('href')==='#'){
      window.scrollTo({
        top:0,
        behavior:"smooth"
      })
    }
    // scroll to other sections
    if(link.getAttribute('href')!=='#' && link.getAttribute('href').startsWith('#')){
      document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:"smooth"});
    }
    // closing the mobile navigation upon clicking one of the nav options
    if(link.classList.contains('main-nav-link')){
      document.querySelector('.header').classList.toggle('nav-open');
    }
  })
})

// STICKY NAVIGATION
const observer=new IntersectionObserver(function(entries){
  if(!entries[0].isIntersecting){
    document.body.classList.add('sticky');
    return;
  }
  document.body.classList.remove('sticky');
},{
  root: null,
  threshold: 0,
  rootMargin:'-80px'
});
observer.observe(document.querySelector('.section-hero'))

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
