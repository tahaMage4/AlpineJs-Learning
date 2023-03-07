let FORMSPARK_ACTION_URL = "";

const contactForm = () => {
   return {
      // state
      data: {
         name: "",
         email: "",
         message: "",
         password: "",
         password_confirm: ""
      },
      status: false,
      isError: false,
      modalHeaderText: "",
      modalBodyText: "",
      buttonText: "Submit",
      loading: false,
      // Submit Function
      submit() {
         if (!this.data.email.length ||
            !this.data.password.length ||
            !this.data.password_confirm.length) {
            alert("Please fill out all required field and try again!")
            return;
         }

         this.buttonText = "Submitting...";
         this.loading = true;
         fetch(FORMSPARK_ACTION_URL, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
            },
            body: JSON.stringify(this.data),
         })
            .then((response) => {
               console.log(response);
               if (response.status === 201) {
                  this.modalHeaderText = "Congratulations!!!"
                  this.modalBodyText = "You have been successfully registered!";
                  this.status = true;
                  // redirected = url('./index.html')
               } else {
                  throw new Error("Your registration failed");
               }
            })
            .catch((error) => {
               console.log(error);
               this.modalHeaderText = "Ooops Error!"
               this.modalBodyText = error.message;
               this.isError = true;
            })
            .finally(() => {
               this.data.name = "";
               this.data.email = "";
               this.data.message = "";
               this.data.password = "";
               this.data.password_confirm = "";
               this.buttonText = "Submit";
               this.loading = false;
            });
      },
   };
}
