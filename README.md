# Dengue or No?
## Interactive-Frontend-Development--Project-2

## DEMO

A live demo website can be found here : <https://boonhui91.github.io/Interactive-Frontend-Development--Project-2/>

![Responsive](/images/responsive.jpg)

## Context
This web project focuses on delivering relevant information to users about the Dengue disease in Singapore. I hope that through this project, it will be able to raise awareness of the Dengue Fever situation here in Singapore. 

Using the data provided by the Singapore Government, the information shown is accurate as per the latest data provided. Although the information provided in the project is all Singapore based, overseas users will be able to use it to have a better understanding of the situation here.  

# UX
### STRATEGY
* Target audience
    - Locals looking to find more information about Dengue in Singapore.
    - Locals interested to find out where are the Dengue clusters locally.
    - Users interested in seeing the correlationship between Dengue cases and other environmental factors.
* Goals
	- to promote awareness about Dengue Fever (Owner)
	- to consolidate the different information across different Government sites into one (Owner)
	- to learn more about Dengue Fever in Singapore (User)
	- to find out more about the local clusters and breeding habitat (User)


### SCOPE
* User Story
    - I am a resident, I want to find out more about local clusters as there has been a spike of cases in my area
	- I am a resident, I want to learn more about the past trend of cases in the country
	- I am a foreigner, I want to find out more about the Dengue situation in a developed country such as Singapore
* Requirements
	- User to be able to view local dengue clusters 
	- User to see all the known Aedes Mosquito breeding habitat
	- User to be able to view number of cases for the past few years
	- User be able to compare the number of cases with other factors

### Information Architecture
Designed with a mobile first approach, on the home page, user will see a header image of a mosquito with an overlay of a short passage to emphasize how severe dengue can be. Nav bar is mobile responsive and shows as a 'Hamburger' bar in mobile screen size.
On the 'cluster' page, user will be able to see an interactive map centered in Singapore. Information such as the list of symptoms will enlarge and change color when hover over. Toggle buttons to show the dengue clusters, [CHAS clinics](https://www.chas.sg/content.aspx?id=303) and hospitals on the map are available. On the top right corner of the map, user will be able to choose an overlay for the mosquito breeding habitats across the region. 
Lastly, on the 'More Insight' page, user will be presented with 4 interactive bar charts. Each chart is interactive and allows user to click on the specific year to see the relationship across the 4 datas for the year. 
### Sitemap
Dengue or No? is designed using Single Page Application method. 


# UI
### Colors
The colors are chosen with reference to a theme I found suitable to the back and white color of the Aedes Mosquito and a shade of red. 

### Fonts
The font types chosen blends well with the serious tone of the website. The color contrast well with their respective background.

## FUTURE FEATURES
* User to be able to make an appointment with the doctors through the site
* To include more data such as the gender and age group of each infected case.

# TECHNOLOGIES USED
* HTML5
* CSS3
* Javascript
* jQuery
* Microsoft Excel
* Leaflet
* Leaflet Omnivore
* CSVtoJson
* Axios
* Crossfilter
* d3.js / dc.js
* Am I Responsive(<http://ami.responsivedesign.is/>)
* Screen To Gif(<https://www.screentogif.com/>)
* Google fonts (<https://fonts.google.com/>)
* Font Awesome
* Github/Gitpod/Visual Studio Code

# TESTING
### Manual Testing

### 1) Testing of Nav Bar
Nav bar works fine as intended to be Single page setup in both desktop and mobile size. 

### 2) Testing of Map and Toggle buttons
Map is set start in Singapore, "Home" button on map works fine when moving away or zooming on the map. 
THe 3 toggle buttons (Show cluster, show CHAS clinic, show hospital) shows the intended layers when clicked, and remove the layers when toggle off. Breeding habitat panel on top right of map is able to toggle on and off as well.
Mouse over event on the symptoms list enlarge and change the text color, and reverts back to original after.

### 2) Testing of Graphs
All 4 graphs does not overlap and both X and Y axis tickers are spaced properly. No overlapping of why Y axis label with the tickers value (Happens on Cases and Rainfall graph initially, fixed it using CSS)
All graphs are interactive and response to each other when clicking on specific year. No issue when selecting multiple years. 

### 3) Mobile Responsive
All section tested and works well both in mobile and laptop display.

### BUGS
When testing between mobile and laptop screen size using browser developer tool, a manual refresh is required when changing between laptop size to mobile size. The graphs responsive function only detects the original screen size the page was initially loaded. Does not cause an issue for users, as they will not be switching between screen sizes.

# DEPLOYMENT
This site is hosted using GitHub pages, deployed directly from the master branch. This site can be viewed [here](https://boonhui91.github.io/Interactive-Frontend-Development--Project-2/). 
The deployed site will update automatically upon new commits from the master branch. For the site to be deploy correctly on GitHub pages, the landing page must be named 'index.html'.

To run locally, clone this repository directly into the editor of your choice by pasting git clone 
https://github.com/boonhui91/Interactive-Frontend-Development--Project-2 into your terminal. To cut ties with this GitHub repository, type git remote rm origin into the terminal.


# CREDITS

* Images
    - Mosquito background image (https://www.pond5.com)
    - Clinic and Hospital Icons (https://www.flaticon.com)

* Color Scheme
    - https://coolors.co/c8143c-0c120c-a6afbf-274354-eaedf2

* Manually created Hospital geojson file
    - http://geojson.io/
    - http://jsonpathfinder.com/


# Acknowledgements
* Data (<https://data.gov.sg/>)
* Hospitals coordinates and information (Wikipedia)
* Graph-resizing.js (Instructor @kunxin-chor)

**This is for educational use** 