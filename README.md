# SDG Meter project

## Introduction

The Sustainable Development Goals (SDGs) are the guiding line to
achieve a better and more sustainable future for all. They tackle the global challenges we face, including poverty, inequality, climate change, environmental
degradation, peace and justice. The OnePlanet network - an open partnership
for sustainable development - provides a platform where all countries, including
all relevant stakeholders and organizations, are invited to join and actively engage. Thus, the latter submit daily a large number of descriptions of innovative
projects that may be linked to one or more SDGs. For experts, the task of linking all the texts submitted to the SDGs they deal with is very time consuming,
which is why the need to automate this process is very important. In this context,
we propose to solve this problem with a multi-lablel classification of texts using BERT (Bidirectional Encoder Representations from Transformers). We first
present the key steps for building our database, then the multi-label classification
phase using BERT and finally we will present and discuss the obtained results.

# Setup

You must have python 3.8 for this project not above due to some conflict errors

This project gathers the frontend and backend parts of the SDG Meter.  

In order to develop on the project, you need first to install python dependencies.  
It's recommended to use a python virtual environment, for more details look at [the official documentation](https://docs.python.org/3/tutorial/venv.html).  

You need the binary of the model `backend/app/models/finetuned_models/pytorch_model.bin` which is to heavy to be in this repository.  
Ask someone to get it

To install python dependencies:  
`pip install -r backend/requirements.txt`

# Development

### Frontend

In your nagivator enter the path to access the **index.html** file.  
`YOUR_PATH_TO_THE_PROJECT/SDG-Meter/frontend/code/index.html`

### Backend

To run the backend:  
`python backend/app/app.py`

# Production

For production we use [Docker](https://www.docker.com/), be sure to have **docker** and **docker-compose** installed on the host.  
To launch the all project run:

`docker-compose up --build -d`  
--build: In order to rebuild the containers   
-d: To launch the containers in background

**Warning:** Be sure to update the *hostName* variable in [script.js](frontend/code/js/scripts.js) line 84:
- development: localhost
- production: the IP address of the server / hostname to access the API
