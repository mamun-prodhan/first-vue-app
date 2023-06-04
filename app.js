const app = Vue.createApp({
    data(){
        return{
            books: 'The song of ice and fire',
            author: 'Daniyel Difo',
            age: 25
        }
    },
    methods:{
        changeBooks(value){
            this.books = value
        }
    }
})

app.mount('#app')