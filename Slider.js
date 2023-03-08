const Slider = () => {
   return {
      images: ['https://randomuser.me/api/portraits/men/1.jpg',
         'https://randomuser.me/api/portraits/men/2.jpg',
         'https://randomuser.me/api/portraits/men/3.jpg',
         'https://randomuser.me/api/portraits/men/4.jpg',
         'https://randomuser.me/api/portraits/women/5.jpg',
      ],
      activeImage: null,

      PreState() {
         let index = this.images.indexOf(this.activeImage);
         if (index === 0)
            index = this.images.length;
         this.activeImage = this.images[index - 1];
      },

      NextState() {
         let index = this.images.indexOf(this.activeImage);
         if (index === this.images.length - 1)
            index = -1;
         this.activeImage = this.images[index + 1];
      },

      init() {
         this.activeImage = this.images.length > 0 ? this.images[0] : null
      }

   }
}

