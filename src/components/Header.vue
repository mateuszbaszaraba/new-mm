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
        width: 100vw;
        height: 12vh;
        position: absolute;
        -webkit-user-select: none;  /* Chrome 49+ */
        -moz-user-select: none;     /* Firefox 43+ */
        -ms-user-select: none;      /* No support yet */
        user-select: none;     
    }
    .logo {
        width: 20vw;
        height: 12vh;
        float: left;
    }
    .logo img {
        width: 6vw;
        height: auto;
        margin: 6vh 0 0 8vw;
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
        height: 20vh;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 6vw;
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