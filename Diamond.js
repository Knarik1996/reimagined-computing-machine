const diamond=function(n, sgn)
{
	if(n%2==0)
		n=n+1;
	let i=1;
	let c;
	while(i<=n)
	{
		let j=1;
		let a="";
		let b="";
		while(j<=i)
		{
			a+=sgn;
			j=j+1;
		}
		let k=(n-i)/2;
		while(k>=1)
		{
			b+=" "
			k--;
		}
		console.log(b+a);
		i+=2;
	}
	let x=1;
	while(x<=n-2)
	{
		let y='';
		let z='';
		let h=1;
		while(h<=n-x-1)
		{
			y+=sgn;
			h++;
		}
		let g=1;
		while(g<=x)
		{
			z+=" ";
			g+=2;
		}
		console.log(z+y);
		x+=2;
	}
};
diamond(10, "$");
