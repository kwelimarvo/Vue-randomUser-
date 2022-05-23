const app = Vue.createApp({
     data() {
         return {
             fname: 'Marvin',
             lname: 'Wanyama',
             email: 'marvin@kwelicapital.com',
             gender: 'male',
             picture: 'https://randomuser.me/api/portraits/thumb/men/55.jpg'
         }
     },

     methods: {
         async getUser() {
            const res = await fetch('https://randomuser.me/api') 

            const {results} = await res.json()

            console.log(results)

            this.fname = results[0].name.first
            this.lname = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.thumbnail
        }
     }
})


app.mount('#app')