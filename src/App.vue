<template>
    <div id="app">
        <main-page v-if="currentPage === 'mainPage'" @encrypt="encrypt" @decrypt="decrypt"></main-page>
        <result-page v-else :output="currentOutputMessage" @received="currentPage = 'mainPage'"></result-page>
    </div>
</template>

<script>
import mainPage from "./components/mainPage.vue";
import resultPage from "./components/resultPage.vue";
import encryptor from "./modules/encryptor";

export default {
    name: "app",
    data() {
        return {
            currentPage: "mainPage",
            currentOutputMessage: "Not Available"
        };
    },
    components: {
        mainPage,
        resultPage
    },
    methods: {
        encrypt(message) {
            if (message) {
                const encryptedString = encryptor.encrypt(message);
                this.currentOutputMessage = encryptedString;
                this.currentPage = "resultPage";
            }
        },
        decrypt(message) {
            if (message) {
                const decryptedString = encryptor.decrypt(message);
                this.currentOutputMessage = decryptedString;
                this.currentPage = "resultPage";
            }
        }
    }
};
</script>

<style lang="scss">
@import "assets/style/main";

html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;

    @media screen and (min-width: 600px) {
        font-size: 22px;
    }
}
</style>
