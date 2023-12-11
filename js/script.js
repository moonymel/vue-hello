const { createApp } = Vue

createApp({
    
    data(){
        return {
            message: 'Hello, im using Vue!',
            image: 'https://pngimg.com/d/hello_PNG28.png',
            styleImage: 'width:200px',
        }
    }
}).mount('#app');