const header = document.querySelector('.header')

export function generateHeader()
{

    let homeActivePage,moviesActivePage,tvActivePage;
    if(location.href.endsWith('index.html'))
    {
        homeActivePage = 'header__content__nav__list--item--active'
    }
    if(location.href.endsWith('movies.html'))
    {
        moviesActivePage = 'header__content__nav__list--item--active'
    }
    if(location.href.endsWith('tv.html'))
    {
        tvActivePage = 'header__content__nav__list--item--active'
    }
    
 

    const headerContent = `
            <div class='container' style='background-color: transparent;'>
                <div class='header__content'>
                    <h1 class='header__content__heading'>ER-TV</h1>
                    <nav class='header__content__nav'>
                        <ul class='header__content__nav__list'>
                            <li class='header__content__nav__list--item ${homeActivePage}'><a class='header__content__nav__list--link' href="./index.html">Home</a></li>
                            <li class='header__content__nav__list--item ${moviesActivePage}'><a class='header__content__nav__list--link' href="./movies.html">Movies</a></li>
                            <li class='header__content__nav__list--item ${tvActivePage}'><a class='header__content__nav__list--link' href="./tv.html">TV Shows</a></li>
                    </nav>
                    <div class='flex-group header__content__search-group'>
                        <input class='header__content__search' type='text' placeholder='Search'/>
                        <div class='flex-group' style='background-color:transparent;'>
                            ${localStorage.getItem('isLoggedIn') ? `
                                <button class='btn' id='header__profile'>profile</button>
                                <button class='btn' id='header__logout'>Logout</button>
                                ` : `
                            <button class='btn loginButton'>Login</button>
                            <button class='btn signupButton'>Sign Up</button>`}
                        </div>
                    </div>
                </div>
            </div>
    `
    header.innerHTML = headerContent

    if (localStorage.getItem('isLoggedIn')) {
        const profileButton = document.querySelector('#header__profile')
        const logoutButton = document.querySelector('#header__logout')
        profileButton.addEventListener('click', () => {
            location.href = './profile.html'
        })
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('user')
            location.href = './login.html'
        })
    }
    else {
        const loginButton = document.querySelector('.loginButton');
        const signupButton = document.querySelector('.signupButton');
        loginButton.addEventListener('click',navigateLogin)
        signupButton.addEventListener('click',navigateSignup)
    }

}
function navigateLogin(e) {
    location.href = './login.html'
}
function navigateSignup(e) {
    location.href = './signup.html'
}
