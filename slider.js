var i=0;
var j=0;
var x=0;
var a=0;
var b=0;
var c=0;
var d=0;
var e=0;
var imagefiles1=['2067_1.jpg','2067_2.jpg', '2067_3.jpg'];
window.setInterval(startSlider1,2000);
function startSlider1()
{
	document.getElementById("topimg1").src="images/2067/"+imagefiles1[i];
	i++;
	if(i>2)
	{
		i=0;
	}
}


var imagefiles2=['ava_1.jpg','ava_2.jpg', 'ava_3.jpg'];
window.setInterval(startSlider2,2000);
function startSlider2()
{
	document.getElementById("topimg2").src="images/ava/"+imagefiles2[j];
	j++;
	if(j>2)
	{
		j=0;
	}
}


var imagefiles3=['wwg_1.jpg','wwg_2.jpg','wwg_3.jpg'];
window.setInterval(startSlider3,2000);
function startSlider3()
{
	document.getElementById("topimg3").src="images/war_with_grand/"+imagefiles3[x];
	x++;
	if(x>2)
	{
		x=0;
	}
}

var imagefiles4=['honesttheif_2.jpg','honesttheif_1.png'];
window.setInterval(startSlider4,2000);
function startSlider4()
{
	document.getElementById("topimg4").src="images/honest_thief/"+imagefiles4[a];
	a++;
	if(a>1)
	{
		a=0;
	}
}

var imagefiles5=['snowfalls_1.jpg','snowfalls_2.jpg'];
window.setInterval(startSlider5,2000);
function startSlider5()
{
	document.getElementById("topimg5").src="images/snowfalls/"+imagefiles5[b];
	b++;
	if(b>1)
	{
		b=0;
	}
}

var imagefiles6=['followme_1.jpg','followme_2.jpg'];
window.setInterval(startSlider6,2000);
function startSlider6()
{
	document.getElementById("topimg6").src="images/followme/"+imagefiles6[c];
	c++;
	if(c>1)
	{
		c=0;
	}
}

var imagefiles7=['mom_1.jpg','mom_2.jpg'];
window.setInterval(startSlider7,2000);
function startSlider7()
{
	document.getElementById("topimg7").src="images/mom/"+imagefiles7[d];
	d++;
	if(d>1)
	{
		d=0;
	}
}



