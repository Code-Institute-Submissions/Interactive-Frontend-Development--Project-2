# Dengue or No?
## Interactive-Frontend-Development--Project-2

## DEMO

A live demo website can be found here : <https://boonhui91.github.io/Interactive-Frontend-Development--Project-2//>

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



- Navigation bar is available on every page and directs user to the specific content when clicked. Shows a highlight effect when hover upon. Changes to a 'Hamburger' Bar when screen size is below 992px. 
-slideshow animations are working with no overlap of images.
-When hovering over the 'SEE MORE', an underline effect is shown. Upon clicking, user will be directed to a new page with the Instagram post. Instagram posts embeded and centered.
-Back to top button works well on both mobile and laptop.
-Clicking on the subscribe button without inputting a Name and proper email address format, an "invalid" prompt will show up.


