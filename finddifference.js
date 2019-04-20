function findDifference(A,B,status){

var outerloop,innerloop;
switch(status){
	case 'A-B':
	outerloop=A;
	innerloop=B;
	break;
	case 'A-B':
	outerloop=B;
	innerloop=A;
	break;
	default:
	outerloop=false;
	break;

}
if(!outerloop){
	return "Error!!!!";
}
var newArray = [];

for(var i=0;i<outerloop.length;i++){
	var j=0;
	var duplicate=false;
	
	while(j<innerloop.length){
		
		if(outerloop[i] === innerloop[j]){
			duplicate=true;
		}	
		j++;

	}
	if(!duplicate){
		newArray.push(outerloop[i]);
	}
}
return newArray
}


let Aapp=['a','b','c','d'];
let Bapp=['c','1','a','4','a'];
console.log(findDifference(Aapp,Bapp,"B-D"))