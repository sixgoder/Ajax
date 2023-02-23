const express = require('express')

const app = express()

app.get('/server',(request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('HELLO AJAX')
})

app.post('/server',(request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('HELLO AJAX POST -2')
})

app.all('/json-server', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    const data = {
        name:'json obj'
    }
    response.send(JSON.stringify(data))
})

app.get('/delay',(request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(() => {
        response.send('Delay Response')
    }, 3000);
})

app.all('/jquery-server',(request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('jQuery ajax')
})

app.all('/axios-server',(request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    response.send('axios ajax')
})

app.all('/fetch-server',(request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    const data = {fetch: 'server'}
    response.send(JSON.stringify(data))
})

app.all('/jsonp-server',(request, response)=>{
    const data = {name: 'server'} 
    let str = JSON.stringify(data)
    response.send(`handle(${str})`)
})

app.listen(8000, ()=>{
    console.log('服务已启动， 8000端口监听中....')
})