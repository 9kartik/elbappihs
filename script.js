(function myFunction() {
    setInterval(changer, 1000);
})();
var t=0;
function changer(){
	var classes=['active','inactive','inactive']
	for(var i=0;i<3;i++)
	{
		document.querySelector('#id'+(1+i)).className=classes[(t+i)%3]
	}
	t=(t+1)%3;
}