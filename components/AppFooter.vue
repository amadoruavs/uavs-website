<template>
    <footer class="footer">
        <div class="content has-text-centered">
            <h3 class="has-text-white">AmadorUAVs</h3>
            <hr />
            <div>
                <b-button type="is-info" inverted outlined tag="a"
                    href="https://www.twitter.com/amadoruavs">
                    <i class="fab fa-twitter"></i>
                </b-button>

                <b-button type="is-danger" inverted outlined tag="a"
                    href="https://www.instagram.com/amadoruavs/">
                    <i class="fab fa-instagram"></i>
                </b-button>

                <b-button type="is-info" inverted outlined tag="a"
                    href="https://www.facebook.com/amadoruavsclub">
                    <i class="fab fa-facebook"></i>
                </b-button>

                <b-button type="is-dark" inverted outlined tag="a"
                    href="https://www.medium.com/@AmadorUAVs">
                    <i class="fab fa-medium"></i>
                </b-button>
            </div>
        </div>
    </footer>
</template>


<style>
footer {
    background: var(--banner-gradient);
}

footer .button {
    border: none;
}

footer i {
    font-size: 1.125rem;
}

footer hr {
    margin-left: 10rem;
    margin-right: 10rem;
}
</style>