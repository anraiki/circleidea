# What is Circle Idea

It is a project managing, note taking, idea making application.

## Welcome

We are a tiny community creating a project managing app in Typescript. The idea is to make something better than Trello, and make all sorts of neat feature that will help us be better in productivity.

Visit our Discord: https://discord.gg/WPNYGr3

### Prerequisites

 - Node.JS
 - Docker

Our server is [a headless api](https://en.wikipedia.org/wiki/Headless_content_management_system) that we use our client, made in [React.JS](https://reactjs.org/), to inteface with. 

If you want to get started, you will need [Node.JS](https://nodejs.org/en/) installed as well as [Docker](https://www.docker.com/).

### Installing

```
npm install
docker build .
docker-compose up -d
```

Once you have met all prerequisites, run `npm install` on the root directory

Build the dockerfile with `docker build .`

Then compose it up: `docker-compose up -d `

When you want to take it down use `docker-compose down`

