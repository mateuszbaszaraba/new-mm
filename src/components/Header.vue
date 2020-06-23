<template>
    <nav>
        <div class="logo">
            <img src="../assets/logo4.png" />
        </div>
        <div class="menu">
            <ul>
                <router-link tag="li" to="/" activeClass="active" exact>Strona główna</router-link>
                <router-link tag="li" to="/nasze-produkty" activeClass="active">Nasze Produkty</router-link>
                <router-link tag="li" to="/kontakt" activeClass="active">Kontakt</router-link>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss">
    nav {
        background-color: black;
        width: 100vw;
        height: 12vh;
    }
    .logo {
        width: 20vw;
        height: 12vh;
        float: left;
    }
    .logo img {
        width: 6vw;
        height: auto;
        margin: 1.8vh 0 0 1.8vw;
    }
    .menu {
        width: 100vw;
        height: 12vh;
    }
    ul {
        text-transform: uppercase;
        margin: 0;
        width: 60vw;
        float: right;
        height: 12vh;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 4vw;
    }

    ul > li {
        width: auto;
        text-align: center;
        display: inline-block;
        font-size: 16px;
        color: white;
        margin-right: 1vw;
        cursor: pointer;
        padding: 3vh 2vw 3vh 2vw;
        transition: .5s;
    }
    .active {
        color: #E4C68B;
    }
</style>