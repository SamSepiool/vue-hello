const app = new Vue ({

    el: '#root',

    data: {
        message: 'Ti piacciono i meme?',
        seen: false,
        seen1: false,
        images: {
            imageSrc: ['https://i.imgflip.com/4/42dddp.jpg', 'https://www.repstatic.it/content/localirep/img/rep-napoli/2016/08/16/172557101-bf56eb14-9cfd-442b-b478-43e8d35c8683.jpg' ],
            alt: ['jeremyClarksonMeme', 'TheGreatLeoMeme']
        },
    },
    
    
    methods: {

        displayImgNo: function(){
            this.seen = true;
        },

        displayImgYes: function(){
            this.seen1 = true
        }


    
    }
})