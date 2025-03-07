
export function createCard(obj)
{
    const card = document.createElement('div');
    card.classList.add('card')
    card.style.backgroundImage = `url(${obj.image})`
    card.style.backgroundSize = 'cover'
    card.style.width = '300px';
    card.style.height = '400px';
    card.style.borderRadius = '1rem';
    return card;
}
export function createSmallCard(obj)
{
    const card = document.createElement('div');
    card.classList.add('card')
    card.style.backgroundImage = `url(${obj.image})`
    card.style.backgroundSize = 'cover'
    card.style.backgroundPosition = 'center'
    card.style.width = '200px';
    card.style.height = '200px';
    card.style.borderRadius = '1rem';
    return card;
}
