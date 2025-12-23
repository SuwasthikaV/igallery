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
