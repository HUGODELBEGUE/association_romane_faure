<script setup>
</script>

<template>
    <div class="footer__container container width__desktop__down">
        <div class="links__footer box__divise">
            <h3>Actualités et événements</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias exercitationem iure explicabo quam!
            </p>
            <ul>
                <li>
                    <Link href="https://www.facebook.com/" src="/src/assets/facebook.png" alt="logo facebook" />
                </li>
                <li>
                    <Link href="https://www.instagram.com/" src="/src/assets/instagram.png" alt="logo instagram" />
                </li>
                <li>
                    <Link href="https://www.twitter.com/" src="/src/assets/twitter.png" alt="logo twitter" />
                </li>
                <li>
                    <Link href="https://www.perspectiv-immo.net/" src="/src/assets/home.png"
                        alt="logo perspectiv-immo" />
                </li>
            </ul>
        </div>
        <div class="text__footer box__divise">
            <h3>En savoir plus..</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                blanditiis sequi itaque possimus deleniti corrupti temporibus delectus
                aperiam pariatur tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                blanditiis sequi itaque possimus deleniti corrupti temporibus delectus
                aperiam pariatur tempore?
            </p>
        </div>
        <div class="contact__footer box__divise">
            <h3>Nous contacter</h3>
            <div class="contact__details">
                <div class="link__mail"><a href="mailto:ass.romanefaure@hotmail.com"><i
                            class="bi bi-envelope-fill"></i>ass.romanefaure@hotmail.com</a></div>
                <div class="link__phone"><a href="tel:0664003007"><i class="bi bi-telephone-fill"></i>06.64.00.30.07</a>
                </div>
                <div class="link__address"><a href="https://goo.gl/maps/uaMchZXqZpfA8DTg7" target="_blank"><i
                            class="bi bi-geo-alt-fill"></i>26, rue Colonel Dumont 38000 Grenoble</a>
                </div>
                <div class="link__policy"><a href=""><i class="bi bi-fingerprint"></i>Politique de confidentialité</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer__container {
    display: flex;
    text-align: left;
    padding-top: 0;
    padding-bottom: 0;
}

.links__footer,
.text__footer,
.contact__footer {
    padding: 2rem;
}

.links__footer {
    ul {
        display: flex;
        column-gap: 1em;
    }
}

.contact__details {
    display: flex;
    flex-direction: column;
    row-gap: .6em;
}
</style>
