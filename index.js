const express = require("express");
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    host: "redis-server",
    port: 6379
});
client.set("visits", 0);

app.get("/", (req, res) => {
    // process.exit(1); // Docker를 중지시켰을 경우 docker-compose.yml의 on-failure에서 잡아낼 수 있는 지에 대한 test
    client.get("visits", (err, visits) => {
        if(err != null) {
            console.error(err);
        }
        res.send("Number of visits is " + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port2 8081');
});