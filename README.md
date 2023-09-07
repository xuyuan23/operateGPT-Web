# operateGPT-WEB

## Installation
```commandline
npm install -g create-react-app
npm install react-scripts --save-dev
sudo npm run build
sudo npm start
```

## Quick Start By Docker
```commandline
docker build -t operategpt-web .
docker run --restart=unless-stopped -d -p 3200:3200 operategpt-web
```

see `localhost:3200`