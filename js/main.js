const app = Vue.createApp({
    data() {
        return {
            randomEmail: [],
        };
    },
    methods: {

    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios
                .get(
                    "https://flynn.boolean.careers/exercises/api/random/mail"
                )
                .then((axiosResp) => {
                    console.log(axiosResp.data)
                    axiosResp.data;
                    this.randomEmail.push(axiosResp.data.response);
                });
                
        };
    },
});

app.mount("#app");