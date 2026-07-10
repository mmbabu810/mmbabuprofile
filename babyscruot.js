let text ="Graphic Designer | Assistant Professor in Computer Science | Software Engineer | AI Enthusiast";
let i=0;

function typing()
{
if(i<text.length)
{
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing,100);
}
}
typing();
document.getElementById("theme").onclick=function()
{
document.body.classList.toggle("dark");
}