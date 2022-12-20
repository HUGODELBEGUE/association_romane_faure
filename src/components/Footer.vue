<template>
    <div class="footer__container container">
        <div class="links__footer">
            <h3>Actualités et événements</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias exercitationem iure explicabo quam!
            </p>
            <ul>
                <li><a class="link__facebook" href=""><i class="bi bi-facebook"></i>Facebook</a></li>
                <li><a class="link__instagram" href=""><i class="bi bi-instagram"></i>Instagram</a></li>
                <li><a class="link__twitter" href=""><i class="bi bi-twitter"></i>Twitter</a></li>
                <li><a class="link__perspectiv" href=""><i class="bi bi-house-fill"></i>Perspectiv'immo</a></li>
            </ul>
        </div>
        <div class="text__footer">
            <h3>En savoir plus..</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                blanditiis sequi itaque possimus deleniti corrupti temporibus delectus
                aperiam pariatur tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                blanditiis sequi itaque possimus deleniti corrupti temporibus delectus
                aperiam pariatur tempore?
            </p>
        </div>
        <div class="contact__footer">
            <h3>Nous contacter</h3>
            <div class="link__mail"><a href="mailto:ass.romanefaure@hotmail.com"><i
                        class="bi bi-envelope-fill"></i>ass.romanefaure@hotmail.com</a></div>
            <div class="link__phone"><a href="tel:0664003007"><i class="bi bi-telephone-fill"></i>06.64.00.30.07</a>
            </div>
            <div class="link__address"><a href="https://goo.gl/maps/uaMchZXqZpfA8DTg7" target="_blank"><i
                        class="bi bi-geo-alt-fill"></i>26, rue Colonel Dumont 38000 Grenoble</a>
            </div>
            <div class="link__policy"><a href=""><i class="bi bi-fingerprint"></i>Politique de confidentialité</a></div>
        </div>
    </div>
</template>

<style scoped>
.footer__container {
    display: flex;
    text-align: left;
}

.links__footer,
.text__footer,
.contact__footer {
    padding: 2rem;
    width: calc(100% / 3);
}

.link__facebook:hover {
    color: #4267b2;
}

.link__instagram:hover {
    color: #e1306c;
}

.link__twitter:hover {
    color: #1da1f2;
}

.link__perspectiv:hover {
    color: #bd4032;
}
</style>
