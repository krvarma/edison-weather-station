Basic weather station using Intel Edison, Cylon.js, Pubnub and Freeboard.io
-------------------------------------

This is project I worked this weekend. The project use Intel Edison and BMP085 sensor for the weather data. Using Cylon.js I collect the sensor data display it on Freeboard.io using Pubnub real-time communication. 

Cylon.js is a powerful JavaScript robotic framework based on Node.js and supports multiple development platform and different sensors. You can install Cylon.js on Intel Edison and use it to create powerful programs. In this project I use Pubnub for real-time communication and Freeboard.io is used to create beautiful dashboard. You can also send sensor data to IoT Cloud solutions and use it for processing. I am using [Intel XDK IoT Edition](https://software.intel.com/en-us/html5/xdk-iot) for development.

**Prepare and install on Intel Edison**

To run this project, first you have to setup the Intel Edison, [this link](https://software.intel.com/en-us/iot/getting-started) has the detailed instructions to setup the board. Then download install the Intel XDK Iot Edition from [here](https://software.intel.com/en-us/html5/xdk-iot). Download the project from GitHub, open and upload to the board. Please note that you have to use the XDK's Compile/Build options, this will fetch cylon.js and all the necessary modules and install it on Edison.

**Wiring**

 1. BMP085 Vcc to Edison Breakout Board's 3.3v 
 2. BMP085 GND to Edison Breakout Board's GND 
 3. BMP085 SDA to Edison Breakout Board's A4 
 4. BMP085 SCL to Edison Breakout Board's A5

**Screenshots**

*Intel Edison*
![Intel Edison](https://raw.githubusercontent.com/krvarma/edison-weather-station/master/images/IMG_0009.JPG)

*Setting up Freeboard.io*
![Setting up Freeboard.io](https://raw.githubusercontent.com/krvarma/edison-weather-station/master/images/datasource.png)

*Freeboard Dashboard*
![Freeboard Dashboard](https://raw.githubusercontent.com/krvarma/edison-weather-station/master/images/dashboard.png)