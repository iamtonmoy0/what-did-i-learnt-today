### Introduction To Database

[Link](https://btholt.github.io/complete-intro-to-databases/)

### Installaion Docs

Here are a few of your options:

Docker
This is going to be how I'm going to do it and I will show you the correct Docker commands to run it this way. If you are unfamiliar with Docker and containers, I have a course here that will quickly get you up to speed on this. Even if containers aren't super familiar to you, if you install Docker and follow the commands everything should just work. Head here to install Docker Desktop which will handle everything you need.

Package manager
Another perfectly good option is to install the databases from a package manager. If you're on macOS, that will be homebrew on macOS and if you're on Windows that will can be either winget (this is still in public preview so it may not work totally well yet) or Chocolatey. As of writing, winget only has MongoDB and PostgreSQL. Homebrew and Chocolatey have all of the requisite databases.

For Linux, you will be using whatever your distro's package manager is. If you're using Linux as your desktop I assume you know how to do that. 😄

Download and install the binary yourself.
You can just head to all of the websites and install them yourself! I prefer to do this through a package manager but there's no reason you can't do it this way if you prefer. Here are all the correct URLs for you. Make sure you downloading the version I'm listing or you may have issues (it likely won't be the current version.)

MongoDB – v4.4.1
PostgreSQL -v13.0
Neo4j - v4.1.3
Redis - v6.0.8
Cloud solutions
I'm going to throw this out as a possibility if your computer simply cannot run a database. Chromebooks and iPads could potentially have this problem. All of these databases do run in the cloud and you could probably get a free trial version of each of these running in the cloud and just connect remotely to these databases. This could be difficult because it'll be a lot of managing connection strings and firewall rules and the like. I'll let you look for these on your own since I have a bit of a conflict of interest here in which one you choose (as of present I work for Microsoft's cloud, Azure.)

Node.js Version
We will be running some code samples with Node.js. It's less important which version of Node.js you choose as long you're above version 10. I will be using the latest LTS for this course, v12.18.4. Feel free to install through the website or through some sort of version manager like nvm.
