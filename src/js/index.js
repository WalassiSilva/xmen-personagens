const heros = document.querySelectorAll('.hero');


heros.forEach(hero => {
    hero.addEventListener('mouseenter', ()=>{  
        
        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        removeHeroSelection();
        
        hero.classList.add('selected');

        changeImageHero(hero);
        changeHeroInfo(hero);

    })
})

function removeHeroSelection(){
    const selectedHero = document.querySelector('.selected');
    selectedHero.classList.remove('selected');
}

function changeImageHero(hero){
    const heroFocus = document.querySelector('.hero-focus');
    const idHero = hero.attributes.id.value;
    heroFocus.src = `./src/imgs/card-${idHero}.png`;
}

function changeHeroInfo(hero){
    const heroName = document.getElementById('hero-name');
    const heroDescription = document.getElementById('hero-description');
    heroName.innerText = hero.getAttribute('data-name');
    heroDescription.innerText = hero.getAttribute('data-description');

}