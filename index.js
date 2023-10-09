var flag1=["Danemark","Tunisia","Switzerland","Uganda"]
var flag2=["Sweden","Austri","Bhutan","Jamaica"]
var flag3=["Norway","Brazil","Jordan","turkey"]
var flag4=["Cyprus","Estonia","Maldives","Mozambique"]
var countries=["https://th.bing.com/th/id/OIP.JoenChSAZlRtogGHCIELqgHaE7?pid=ImgDet&rs=1",
"https://www.publicdomainpictures.net/pictures/250000/velka/sweden-flag.jpg",
"https://th.bing.com/th/id/R.050af32191d31ac1bbbd52b869949ed5?rik=PaE3e4NuGKVjWw&riu=http%3a%2f%2fwww.printableflags.net%2fwp-content%2fuploads%2f2017%2f04%2fflag-norway-050af32191d31ac1bbbd52b869949ed5-NhCMBD.jpg&ehk=tQSseDpAO7YnUjYgMsYliy4Vq3Tg7IpMHzuQAz9DF8Y%3d&risl=&pid=ImgRaw&r=0",
"https://th.bing.com/th/id/R.035cb9c36cc9a2806093efa2a0f13042?rik=tVj0Wrly8A473g&riu=http%3a%2f%2fwww.theflagman.co.uk%2fwp-content%2fuploads%2f2017%2f03%2fflag-of-Cyprus.jpg&ehk=0wDwaBsuRCAr54ga2pZPklXpxm6QUF211rWaV55Y09o%3d&risl=&pid=ImgRaw&r=0"
]
var img=$("#gameimg")[0]
var next=$("#button1")
var p1=$("#p1")[0]
var p2=$("#p2")[0]
var p3=$("#p3")[0]
var p4=$("#p4")[0]
var score=$("#score")[0]
console.log(score)
img.src=countries[0]
p1.textContent=flag1[0]
p2.textContent=flag1[1]
p3.textContent=flag1[2]
p4.textContent=flag1[3]

var x1=$("#1")
var x2=$("#2")
var x3=$("#3")
var x4=$("#4")
x1.on("click",function(){
    if (img.src===countries[0]){
       x1.css({"background-color": "green"})

    }
    else
   x1.css({"background-color": "red"})
}
)
x2.on("click",function(){
    if (img.src===countries[1]){
       x2.css({"background-color": "green"})
    }
    else
   x2.css({"background-color": "red"})
}
)
x3.on("click",function(){
    if (img.src===countries[2]){
       x3.css({"background-color": "green"})
    }
    else
   x3.css({"background-color": "red"})
}
)
x4.on("click",function(){
    if (img.src===countries[3]){
       x4.css({"background-color": "green"})
    }
    else
   x4.css({"background-color": "red"})
}
)
var p=window.getComputedStyle(x1[0])

next.on("click",function(){
    console.log(typeof(p.getPropertyValue("background-color")))
    if (img.src===countries[0] && p.getPropertyValue("background-color")==="rgb(0,128,0)"){
        img.src=countries[1]
        p1.textContent=flag2[2]
        p2.textContent=flag2[1]
        p3.textContent=flag2[0]
        p4.textContent=flag2[3]
    }
    else
    alert("you haven't guessed the flag yet")
})
/*obj key danemark*/
