function countdownwhile(startingpoint, stopingpoint)
{
		while(startingpoint>stopingpoint)
		{
			console.log('countdownwhile' + startingpoint);
			startingpoint--;
		}
	}

			countdownwhile(10,0);
		
//

function countdownfor (startingpoint, stopingpoint)
{
	for(;stopingpoint>= stopingpoint; stopingpoint--)
	{
		console.log('countdownfor' + startingpoint);
	}
}

countdownfor(20,10);

//----------- function another program

var age = 24;
function localfunction()
{
	var age = 0;

}
localfunction();
console.log(age);