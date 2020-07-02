<template>
    <div class="mob-header" :class="{bgblack: menuClose}">
        <router-link to="/"><img src="../assets/logo4.png"/></router-link>
        <div id="wrapper">
            <div class="main-item menu" :class="{close: menuClose}" @click="menuClose=!menuClose">
                <span class="line line01"></span>
                <span class="line line02"></span>
                <span class="line line03"></span>
            </div>
        </div>
        <div class="opened-menu" :class="{open: !menuClose}">
            <ul>
                <router-link tag="li" to="/" activeClass="active" exact>Strona główna</router-link>
                <router-link tag="li" to="/nasze-produkty" activeClass="active">Nasze Produkty</router-link>
                <router-link tag="li" to="/kontakt" activeClass="active">Kontakt</router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuClose: false
        }
    }
}
</script>

<style lang="scss">

    .bgblack {
        background-color: black;
    }

    .mob-header {
        width: 100vw;
        height: 14vh;
        position: absolute;
    }

    .mob-header img {
        width: 15vw;
        float: left;
        margin: 3.5vh 0 0 7vw;
        max-width: 15vw;
    }

    #wrapper {
        display: inline-block;
        position: relative;
        cursor: pointer;
        width: 78vw;
    }

    .main-item {
        width: 10vw;
        height: 8vh;
        position: relative;
        margin: 3.1vh 0 0 57vw;
    }

    .line {
        position: absolute;
        height: .5vh;
        width: 100%;
        background:white;
        border-radius:10px;
        transition: all cubic-bezier(0.25, 0.1, 0.28, 1.54) 0.32s;
    }

    .line01 {
        top:19%;
    }

    .line02 {
        top:49%;
    }

    .line03 {
        top:79%;
    }

    .menu.close .line01 {
        transform:rotate(45deg);
        top:49%;
    }

    .menu.close .line02, .menu.close .line03 {
        transform:rotate(-45deg);
        top:49%;
    }

    .open {
        display: none;
    }

    .opened-menu {
        width: 100vw;
        height: 90vh;
        background-color: black;
        z-index: 10;
        position: absolute;
    }

    .opened-menu > ul {
        width: 100vw;
        height: 90vh;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin: 0;
    }

    .opened-menu > ul > li {
        display: block;
        width: 100vw;
        padding: 8vh 0 8vh;
    }
</style>