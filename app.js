const app = Vue.createApp({
    data(){
        return{
            showBooks: true,
            url: 'https://netninja.dev/',
            books: [
                {title: 'name fo the wind', author: 'patrick rothfuss', age: 32, img: 'assets/1.jpeg'},
                {title: 'the way of kings', author: 'brandon sanderson', age: 20, img: 'assets/2.jpg'},
                {title: 'the way of kings', author: 'brandon sanderson', age: 59, img: 'assets/3.jpeg'}
            ]
        }
    },
    methods:{
        changeBooks(value){
            this.books = value
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')