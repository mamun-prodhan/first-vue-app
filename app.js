const app = Vue.createApp({
    data(){
        return{
            showBooks: true,
            books: 'The song of ice and fire',
            author: 'Daniyel Difo',
            age: 25
        }
    },
    methods:{
        changeBooks(value){
            this.books = value
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')