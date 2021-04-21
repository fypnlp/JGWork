Hi, 

This git repository contains examples of my various training projects.

**Cypress Automation Framework**

I uploaded my entire cypress course when I completed a number of years ago (that's the cypress projects part of the repository). 

The training course leader used intermixed files for different contexts.  

It's not how to would do things in a professional setting. 

So for the sake of clarity I will add  a video.   

This is example BDD overlay (with Page Object + Mocha). 

link: https://www.dropbox.com/s/p9s9055mi3lrfzx/BDD%20Test%20%20with%20Mocha%20and%20Page%20Ojbect.mp4?dl=0

**Docker desktop for Cypress**
This file contains an example of a simple automation test which can run on docker desktop.  Below I've also inlcluded commands to run tests using docker a terminal also as part of docker-container.yml file which can be used for CD/CI if required.

Command to Run Docker Container

docker-compose -f docker-compose.yml up

Command to run docker in termainal

docker run -it -v $PWD:/e2e -w /e2e cypress --entrypoint=cypress cypress/included:6.8.0 run


It will be regularly updated and expanded. 

Best wishes
