const headerTemp = `<header class="header">
<div class="center header-flex">
    <div class="header-left">
        <a href="index.html" class="header__logo"><img class="logo" src="img/logo.svg" alt="logo"></a>
        
        <search-comp></search-comp>
    </div>
    <div class="header-right">
        <div class="header__nav">
            <input type="checkbox" name="nav" id="switcher">
            <label for="switcher"><img src="img/nav.png" alt="nav"></label>
            <div class="nav-box">
                <label class="close" for="switcher"><i class="fas fa-times"></i></label>
                <p>Menu</p>
                <div class="nav-box-item">
                    <h3 class="nav-box-item-heading">MAN</h3>
                    <a href="catalog.html" class="nav-link">Accessories</a>
                    <a href="catalog.html" class="nav-link">Bags</a>
                    <a href="catalog.html" class="nav-link">Denim</a>
                    <a href="catalog.html" class="nav-link">T-Shirts</a>
                </div>
                <div class="nav-box-item">
                    <h3 class="nav-box-item-heading">WOMAN</h3>
                    <a href="catalog.html" class="nav-link">Accessories</a>
                    <a href="catalog.html" class="nav-link">Jackets & Coats</a>
                    <a href="catalog.html" class="nav-link">Polos</a>
                    <a href="catalog.html" class="nav-link">T-Shirts</a>
                    <a href="catalog.html" class="nav-link">Shirts</a>
                </div>
                <div class="nav-box-item">
                    <h3 class="nav-box-item-heading">KIDS</h3>
                    <a href="catalog.html" class="nav-link">Accessories</a>
                    <a href="catalog.html" class="nav-link">Jackets & Coats</a>
                    <a href="catalog.html" class="nav-link">Polos</a>
                    <a href="catalog.html" class="nav-link">T-Shirts</a>
                    <a href="catalog.html" class="nav-link">Shirts</a>
                    <a href="catalog.html" class="nav-link">Bags</a>
                </div>

            </div>

        </div>
        <a href="registration.html" class="header__acc"><img src="img/acc.png" alt="acc"></i></a>
        <cart-comp></cart-comp>
    </div>
</div>

</header>`

Vue.component('header-comp', {
    template: headerTemp,


})