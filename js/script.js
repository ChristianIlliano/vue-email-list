const { createApp } = Vue;

createApp({
    data() {
      return {

        emailArray: [],

      };
    },

    created () {
        this.generatorEmails();
    },

    methods: {
        generatorEmails: function () {
            for (i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((generatedMail) => {
                    this.emailArray.push(generatedMail.data.response);
                  });
              }
          },
    },
    }).mount("#app");