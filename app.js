const app = Vue.createApp({
    data(){
        return{
            showBooks: true,
            books: 'The song of ice and fire',
            author: 'Daniyel Difo',
            age: 25,
            x: 0,
            y: 0,
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