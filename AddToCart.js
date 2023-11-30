document.addEventListener('alpine:init', () => {
   Alpine.data('slideOut', () => ({
      slideOut: false,
      cart: 10,
      toggle() {
         this.slideOut = !this.slideOut
      },
      AddToCart() {
         this.cart = this.cart++;
      }
   }))

   Alpine.data('cart', () => ({
      cart: 10,
      AddToCart() {
         this.cart = this.cart++;
         // this.toast.show();
         console.log(this.cart++);
      }
   }));

   Alpine.data("toast", () => ({
      visible: false,
      delay: 5000,
      percent: 0,
      interval: null,
      timeout: null,
      message: null,
      close() {
         this.visible = false;
         clearInterval(this.interval);
      },
      show(message) {
         this.visible = true; slideOut
         this.message = message;

         if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
         }
         if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
         }

         this.timeout = setTimeout(() => {
            this.visible = false;
            this.timeout = null;
         }, this.delay);
         const startDate = Date.now();
         const futureDate = Date.now() + this.delay;
         this.interval = setInterval(() => {
            const date = Date.now();
            this.percent = ((date - startDate) * 100) / (futureDate - startDate);
            if (this.percent >= 100) {
               clearInterval(this.interval);
               this.interval = null;
            }
         }, 30);
      },
   }));
})