<template>
    <div class="footer__container">
        <div class="links__footer">
            <h3>Actualités et événements</h3>
            <ul>
                <li><a href=""><i class="bi bi-facebook"></i>Facebook</a></li>
                <li><a href=""><i class="bi bi-instagram"></i>Instagram</a></li>
                <li><a href=""><i class="bi bi-twitter"></i>Twitter</a></li>
                <li><a href=""><i class="bi bi-house-fill"></i>Perspectiv'immo</a></li>
            </ul>
        </div>
        <div class="text__footer">
            <h3>En savoir plus..</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                blanditiis sequi itaque possimus deleniti corrupti temporibus delectus
                aperiam pariatur tempore?
            </p>
        </div>
        <div class="contact__footer">
            <h3>Nous contacter</h3>
            <div class="link__mail"><a href=""><i class="bi bi-envelope-fill"></i>maildelasso@gmail.com</a></div>
            <div class="link__phone"><a href=""><i class="bi bi-telephone-fill"></i>06.55.66.84.69</a></div>
            <div class="link__address"><a href=""><i class="bi bi-geo-alt-fill"></i>14, route du chemin du paradis</a>
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
</style>
