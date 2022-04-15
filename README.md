# SDG Meter project

## Introduction

[The Sustainable Development Goals (SDGs)](http://62.160.8.100/#sdgs) are the guiding line to
achieve a better and more sustainable future for all. They tackle the global challenges we face, including poverty, inequality, climate change, environmental
degradation, peace and justice. The OnePlanet network - an open partnership
for sustainable development - provides a platform where all countries, including
all relevant stakeholders and organizations, are invited to join and actively engage. Thus, the latter submit daily a large number of descriptions of innovative
projects that may be linked to one or more SDGs. For experts, the task of linking all the texts submitted to the SDGs they deal with is very time consuming,
which is why the need to automate this process is very important. In this context,
we propose to solve this problem with a multi-lablel classification of texts using BERT (Bidirectional Encoder Representations from Transformers). We first
present the key steps for building our database, then the multi-label classification
phase using BERT and finally we will present and discuss the obtained results.

## Important
This project is the global project for the SDG tool.  
**The main goal is to launch the entire project in production mode.**  
Do not update directly this project but use the [SDG-Backend](https://github.com/Unep-Isep/SDG-Backend) and [SDG-Frontend](https://github.com/Unep-Isep/SDG-Frontend) projects instead.


## Setup

The project contains submodules, in order to get them when cloning the project there are two solutions:

1. Directly when Cloning the project
> git clone https://github.com/Unep-Isep/SDG-Global-Project.git --recurse-submodules

2. After cloning the project
> git clone https://github.com/Unep-Isep/SDG-Global-Project.git  

> git submodule init

> git submodule update


To update the project:

- To get changes from the current repository (except submodules) run `git pull`
- To get changes from the submodules run `git submodule update --remote`

For more details on submodules check out the [documentation](https://git-scm.com/book/en/v2/Git-Tools-Submodules)

## Run

For launching the project we use [Docker](https://www.docker.com/), be sure to have **docker** and **docker-compose** installed on the machine.  
To launch the all project run:

> docker-compose up --build -d  

--build: In order to rebuild the containers   
-d: To launch the containers in background

The project will be accessible on the port 80 of the machine: **localhost:80**

>**Warning:** Be sure to update the *hostName* variable in [script.js](SDG-Frontend/js/scripts.js) line 84:
>- development: localhost
>- production: the IP address of the server (62.160.8.100)  

To remove the containers:
> docker-compose down


## Nginx

This project uses a Nginx reverse-proxy listening on port 80 in order to dispatch the requests to the appropriate service.
The configuration is located in the [nginx.conf](nginx.conf) file
- Requests which begin with **/api** will be redirected to the backend service
- Other requests will be handled by nginx to serve for the frontend

Moreover, Nginx serves all the html, css, js and images files for the frontend.

To add another service use the syntax below
> `proxy_pass http://<NAME_OF_THE_SERVICE>:<PORT>;`