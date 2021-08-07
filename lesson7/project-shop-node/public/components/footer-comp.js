const footerTemp = `<footer>
<div class="center copy_flex">
    <div class="copyright_text">
        <p>© 2021 Brand All Rights Reserved.</p>
    </div>
    <div class="url">
        <a href="#"><i class="fab fa-facebook-square"></i></a>
        <a href="#"><i class="fab fa-twitter-square"></i></a>
        <a href="#"><i class="fab fa-pinterest-square"></i></a>
        <a href="#"><i class="fab fa-google-plus-square"></i></a>
    </div>
</div>
</footer>`

Vue.component('footer-comp', {
    template: footerTemp
})