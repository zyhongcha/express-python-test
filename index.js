const express = require('express')
const {spawn} = require('child_process')
const app = express()
const port = 8080

// based on this article https://medium.com/swlh/run-python-script-from-node-js-and-send-data-to-browser-15677fcf199f



/**
 * 1. Get echo'ed values from python script
 */

app.get('/', (req,res) => {
  

    // I will pass this data to python script
    const exampleData = JSON.stringify({
        "email": "test@example.com",
        "user_id": 1,
        "stocks": [
            {
             "stockCode": "AAPL",
             "stockAmount": 6
            },
            {
             "stockCode": "MSFT",
             "stockAmount": 12
            },
            {
             "stockCode": "TSLA",
             "stockAmount": 32
            }
        ]
    })

    // spawn new child process
    // also pass parameters to the python script
    const python = spawn('python', ['script1.py', 'hello first param', 'hello snd param', exampleData])
    
    let receivedData = ''
    // collect data from script
    python.stdout.on('data', (data) => {
        receivedData += data.toString()
        console.log('received data is: ',receivedData)
    })

    python.on('close', (code) => {
        console.log(`Closing python script with code ${code}`)
        // send data to browser
        res.send(receivedData)
    })
})






app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})