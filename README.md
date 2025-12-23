# Ex.07 Design of Interactive Image Gallery
## Date:23.12.2025

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```
igallery.html
<html>
    <head>
        <title>Gallery</title>
        <link rel="stylesheet" href="styles.css">
        <script src="scripts.js"></script>
    </head>
    <body>
        <div class="heading">IMAGE GALLERY</div>
        <hr>
        <div class="box">
        <div class="image">
        <img src="komodonationalpark.avif" id="imgid" width="300" height="250">
        </div>
        <h3 id="captid"></h3>
        <div class="buttons">
        <button onclick="prev()">Prev</button>
        <button onclick="next()">Next</button>
        </div>
        </div>
        <footer>&copy; SUWASTHIKA V (25000885)</footer>
    </body>
</html>

styles.css
body{
    background-color: rgb(0, 255, 255);
}
.heading{
    text-align: center;
    font-size: xx-large;
    font-weight: bold;
    background-color: rgb(150, 127, 255);

}
.box{
    border: solid 5px black;
    width: 350px;
    height: 350px;
    background-color: blue;
    margin-top: 200px;
    margin-left: 800px;
}
.buttons{
    display: flex;
    justify-content: space-around;
}
h3{
    display: flex;
    justify-content: center;
}
footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: rgb(124, 124, 124);
    text-align: center;
    left: 0;
}
.image{
    margin-left: 25px;
    margin-top: 15px;
}

scripts.js
let Index=0;
var Images=[
    {source: "Komodonationalpark.avif",caption:"KOMODO NATIONAL PARK"},
    {source: "Lauterbrunnenvalley.jpg",caption:"LAUTERBRUNNEN"},
    {source: "Milford Sound.jpg",caption:"MILFORD SOUND"},
    {source: "Santorini.webp",caption: "SANTORINI"},
    {source: "Grand Canyon.webp",caption: "GRAND CANYON"},
    {source: "Whitehaven Beach.jpg",caption: "WHITEHAVEN BEACH"}

];
function display()
{
    document.getElementById("imgid").src=Images[Index].source;
    document.getElementById("captid").innerHTML=Images[Index].caption;
}
function prev()
{
    Index--;
    if(Index<0)
        Index=Images.length-1;
    display();
}
function next()
{
    Index++;
    display();
    if(Index>=Images.length-1)
        Index=0;
    
}
```

## OUTPUT:
![alt text](<Screenshot (40).png>)
![alt text](<Screenshot (41).png>)
![alt text](<Screenshot (42).png>)
![alt text](<Screenshot (43).png>)
![alt text](<Screenshot (44).png>)
![alt text](<Screenshot (45).png>)

## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
