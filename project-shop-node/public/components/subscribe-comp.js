const subscribeTemp = `<div class="communication">
<img src="img/subscribe_back.png" alt="com background" style="opacity:0.25;filter:alpha(opacity=25)">
<div class="communication_flex">
    <div class="comment">
        <img class="comment_img" src="img/comment.jpg" alt="face">
        <div class="comment_text">
            <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
        </div>
        <div class="comment_text_autor">
            <p><b>Bin Burhan</b>
                <br>Dhaka, Bd</p>
        </div>
    </div>
    <div class="comment_center"></div>
    <div class="subscribe">
        <div class="subscribe_text">
            <p>Subscribe</p>
            <span>FOR OUR NEWLETTER AND PROMOTION</span>
        </div>
        <form class="subscribe_form">
            <input class="subscribe_input" type="text" aria-label="email">
            <button class="subscribe_btn" type="submit">Subscribe</button>
        </form>
        <div class="falseEmail"></div>
    </div>
</div>
</div>`

Vue.component('subscribe-comp', {
    template: subscribeTemp
})