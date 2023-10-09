/*var flag1=["Danemark","Tunisia","Switzerland","Uganda"]
var flag2=["Austri","Bhutan","Jamaica","Sweden"]
var flag3=["Brazil","Jordan","Norway","turkey"]
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
x3.on("click",function(){
    if (img.src===countries[1]){
       x3.css({"background-color": "green"})
    }
    else
   x3.css({"background-color": "red"})
}
)
x2.on("click",function(){
    if (img.src===countries[2]){
       x2.css({"background-color": "green"})
    }
    else
   x2.css({"background-color": "red"})
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

    x1.css({"background-color": "rgb(169, 190, 209)"})
    x2.css({"background-color": "rgb(169, 190, 209)"})
    x3.css({"background-color": "rgb(169, 190, 209)"})
    x4.css({"background-color": "rgb(169, 190, 209)"})

    if (img.src===countries[0]){
        img.src=countries[1]
        p1.textContent=flag2[2]
        p2.textContent=flag2[1]
        p3.textContent=flag2[0]
        p4.textContent=flag2[3]
    }
    if (img.src===countries[2]){
        img.src=countries[2]
        p1.textContent=flag3[2]
        p2.textContent=flag3[1]
        p3.textContent=flag3[0]
        p4.textContent=flag3[3]
    }
    else
    alert("you haven't guessed the flag yet")
})
/*obj key danemark*/
var propositions=[
    {flag:"https://th.bing.com/th/id/OIP.JoenChSAZlRtogGHCIELqgHaE7?pid=ImgDet&rs=1",
     corranswer:"Denmark",
     props:["Denmark","Tunisia","Switzerland","Uganda"]
},
{flag:"https://www.publicdomainpictures.net/pictures/250000/velka/sweden-flag.jpg",
corranswer:"Sweden",
props:["Austri","Bhutan","Jamaica","Sweden"]
},
{flag:"https://th.bing.com/th/id/R.050af32191d31ac1bbbd52b869949ed5?rik=PaE3e4NuGKVjWw&riu=http%3a%2f%2fwww.printableflags.net%2fwp-content%2fuploads%2f2017%2f04%2fflag-norway-050af32191d31ac1bbbd52b869949ed5-NhCMBD.jpg&ehk=tQSseDpAO7YnUjYgMsYliy4Vq3Tg7IpMHzuQAz9DF8Y%3d&risl=&pid=ImgRaw&r=0",
corranswer:"Norway",
props:["Brazil","Norway","Jordan","turkey"]
},
{flag:"https://th.bing.com/th/id/R.035cb9c36cc9a2806093efa2a0f13042?rik=tVj0Wrly8A473g&riu=http%3a%2f%2fwww.theflagman.co.uk%2fwp-content%2fuploads%2f2017%2f03%2fflag-of-Cyprus.jpg&ehk=0wDwaBsuRCAr54ga2pZPklXpxm6QUF211rWaV55Y09o%3d&risl=&pid=ImgRaw&r=0",
corranswer:"Cyprus",
props:["Estonia","Maldives","Cyprus","Mozambique"]
}
]

var count=0
var score=0
var tries=3
var check=false

function displayflag(){
    $("#gameimg")[0].src=propositions[count].flag
    $("#p1")[0].textContent=propositions[count].props[0]
    $("#p2")[0].textContent=propositions[count].props[1]
    $("#p3")[0].textContent=propositions[count].props[2]
    $("#p4")[0].textContent=propositions[count].props[3]
}

var buttons=$(".prop1")
buttons.on("click",function(){
    var answer=$(this).text()
    if (tries===1){
        alert("you loose,your score is "+score)
        return
    }
if (answer===propositions[count].corranswer){
    $(this).css({"background-color": "green"})
    score++
    $("#score span").text(score)
    $("#tries span").text(tries)
    check=true
}else {
score-=1
tries-=1
$("#score span").text(score)
$("#tries span").text(tries)
$(this).css({"background-color": "red"})}
})

var next=$("#button1")
next.on("click",function(){
    if (!check){
        alert("you havent guessed the flag yet")
        return
    }
    if (count<propositions.length-1){
        count++
        displayflag()
        buttons.css({"background-color": "lightgray"})
        check=false
    }
   else
        alert("you win,your score is "+score)
    })
displayflag()