const app = Vue.createApp({
    data(){
        return{
            showBooks: true,
            books: [
                {title: 'name fo the wind', author: 'patrick rothfuss', age: 32},
                {title: 'the way of kings', author: 'brandon sanderson', age: 20},
                {title: 'the way of kings', author: 'brandon sanderson', age: 59}
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