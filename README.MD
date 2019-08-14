## Install dependencies
cd to server directory
run:
```
npm install
```

## Running project Locally
```
node index.js
```

## Using Nodemon
install nodemon:
```
npm install -g nodemon
```
### Running with nodemon
```
npx nodemon index.js
```

### Run:
```
docker build -t dockerizedexpressapp:0.0.1 .
```

### Run in foler where docker-compose.yml is located on server:
```
docker-compose up -d
```

## Deployment
Transfer new files over to server.

SSH to the server and location where the Dockerfile is located