const canvas=document.getElementById("canvas");
context=canvas.getContext("2d");
let first=Math.round(Math.random());
let isover=false;
let isX;
const array=[];
const board=
[
['', '', ''],
['', '', ''],
['', '', '']
];
const rand = function(num)
{
	return Math.floor(Math.random() * num) + 1;
};
const nextmove=function(board, isX)
{
	let c=0;	
	for(let j=0;j<=2;j++)
			for(let k=0;k<=2;k++)
				if(board[j][k]!=='')
					c++;
	if(c===9)
		return 'finish';
	let q=0;
	let p=0;
	let t=0;
	let z=0;
	let s=0;
	let x=0;
	let l=0;
	let f=0;
	let g=0;
	for(j=0;j<=2;j++)
		if(board[j][2-j]==='0')
			q++;
	if(q===2)
		for(j=0;j<=2;j++)
			if(board[j][2-j]==='')
			{
				array[0]=j;
				array[1]=2-j;
				return array;
			}
	for(j=0;j<=2;j++)
		if(board[j][j]==='0')
			p++;
	if(p===2)
		for(j=0;j<=2;j++)
			if(board[j][j]==='')
			{
				array[0]=j;
				array[1]=j;
				return array;
			}			
	for(j=0;j<=2;j++)
	{
		t=0;
		for(let e=0;e<=2;e++)
			if(board[j][e]==='0')
				t++;
		if(t===2)
		{
			for(e=0;e<=2;e++)
				if(board[j][e]==='')
				{
					array[0]=j;
					array[1]=e;
					return array;
				}
		}
	}
	for(j=0;j<=2;j++)
	{
		z=0;
		for(e=0;e<=2;e++)
			if(board[e][j]==='0')
				z++;
		if(z===2)
		{
			for(e=0;e<=2;e++)
				if(board[e][j]==='')
				{
					array[0]=e;
					array[1]=j;
					return array;
				}
		}
	}
	for(let j=0;j<=2;j++)
		if(board[j][2-j]==='x')
			s++;
	if(s===2)
		for(j=0;j<=2;j++)
			if(board[j][2-j]==='')
			{
				array[0]=j;
				array[1]=2-j;
				return array;
			}
	for(j=0;j<=2;j++)
		if(board[j][j]==='x')
			x++;
	if(x===2)
		for(j=0;j<=2;j++)
			if(board[j][j]==='')
			{
				array[0]=j;
				array[1]=j;
				return array;
			}			
	for(j=0;j<=2;j++)
	{
		l=0;
		for(let e=0;e<=2;e++)
			if(board[j][e]==='x')
				l++;
		if(l===2)
		{
			for(e=0;e<=2;e++)
				if(board[j][e]==='')
				{
					array[0]=j;
					array[1]=e;
					return array;
				}
		}
	}
	for(j=0;j<=2;j++)
	{
		f=0;
		for(e=0;e<=2;e++)
			if(board[e][j]==='x')
				f++;
		if(f===2)
		{
			for(e=0;e<=2;e++)
				if(board[e][j]==='')
				{
					array[0]=e;
					array[1]=j;
					return array;
				}
		}
	}

	if(board[1][1]==='')
	{
		array[0]=1;
		array[1]=1;
		return array;
	}	
	const arrcorners=[[0, 0], [0, 2], [2, 0], [2, 2]];
	for(j=0;;j++)
	{
		if(board[0][0]!=='' && board[0][2]!=='' && board[2][0]!=='' && board[2][2]!=='')
			break;
		g=rand(4)-1;
		if(board[arrcorners[g][0]][arrcorners[g][1]]==='')
		{
			array[0]=arrcorners[g][0];
			array[1]=arrcorners[g][1];
			return array;
		}
	}
	let a;
	let b;
	a=rand(3)-1;
	b=rand(3)-1;
	if(board[a][b]==='')
	{
		array[0]=a;
		array[1]=b;
		return array;
	}			
};
const makemove=function(board, loc, isX)
{
	if(board[loc[0]][loc[1]]!=='')
		return -1;
	if(isX)
		board[loc[0]][loc[1]]='x';
	else if(!isX)
		board[loc[0]][loc[1]]='0';
	return 0;
};
const findWinner=function(board)
{
	const win={
		winner: 'none'
	};
	for(let i=0;i<=2;i++)
		if(board[i][0]===board[i][1] && board[i][1]===board[i][2])
		{
			if(board[i][0]==='x')
				win.winner='x';
			else if(board[i][0]==='0')
				win.winner='0';
			win.winningLocations=[[i, 0], [i, 1], [i, 2]];
		}
	if(board[0][0]===board[1][1] && board[1][1]===board[2][2])
	{
		if(board[0][0]==='x')
			win.winner='x';
		else if(board[0][0]==='0')
			win.winner='0';
		win.winningLocations=[[0, 0], [1, 1], [2, 2]];
	}
	if(board[0][2]===board[1][1] && board[1][1]===board[2][0])
	{
		if(board[0][2]==='x')
			win.winner='x';
		else if(board[0][2]==='0')
			win.winner='0';
		win.winningLocations=[[2, 0], [1, 1], [0, 2]];
	}
	for(let j=0;j<=2;j++)
	{
		if(board[0][j]===board[1][j] && board[1][j]===board[2][j])
		{
			if(board[0][j]==='x')
				win.winner='x';
			else if(board[0][j]==='0')
				win.winner='0';
			win.winningLocations=[[0, j], [1, j], [2, j]];		
		}
	}
	let r=0;
	for(let u=0;u<=2;u++)
		for(let v=0;v<=2;v++)
			if(board[u][v]!=='')
				r++;
	if(win.winner==='none' && r<9)
		return undefined;
	return win;
};
const image1=new Image();
image1.src="http://image.flaticon.com/icons/png/512/237/237362.png";
const image2=new Image();
image2.src="https://media.scmagazine.com/images/2016/05/31/zero_986095.png";
const draw=function()
{
	context.fillStyle='black';
	context.fillRect(0, 0, canvas.width, canvas.height)
	context.fillStyle='yellow';
	context.fillRect(1, 1, 100, 100);
	context.fillRect(102, 1, 100, 100);
	context.fillRect(203, 1, 100, 100);
	context.fillRect(1, 102, 100, 100);
	context.fillRect(102, 102, 100, 100);
	context.fillRect(203, 102, 100, 100);
	context.fillRect(1, 203, 100, 100);
	context.fillRect(102, 203, 100, 100);
	context.fillRect(203, 203, 100, 100);
}
draw();
if(first===0)
{
	isX=false;
	nextmove(board, isX);
	if(makemove(board, array, isX)!==-1)
	{
		makemove(board, array, isX);
		image2.onload = function() 
		{
			context.drawImage(image2, array[1]*101+1, array[0]*101+1, 100, 100);
		};
	}
}
canvas.addEventListener('click', function(evt)
 {
	if(isover===false)
	{
		const a=evt.offsetX;
		const b=evt.offsetY;
		if(((a>=1) && (a<101 || a>102) && (a<202 || a>203) && (a<303)) &&
		((b>1) && (b<101 || b>102) && (b<202 || b>203) && (b<303)))
		{
			isX=true;
			array[1]=Math.floor(a/101);
			array[0]=Math.floor(b/101);
			if(makemove(board, array, isX)!==-1)
			{
				makemove(board, array, isX);
				context.drawImage(image1, a-a%101+1, b-b%101+1, 100, 100);
				isX=!isX;
				if(findWinner(board)!==undefined && findWinner(board).winner==='x')
				{
					isover=true;
					alert('winner is ' + findWinner(board).winner);
					return;
				}
				if(nextmove(board, isX)!=='finish')
				{
					nextmove(board, isX);
					if(makemove(board, array, isX)!==-1)
					{
						makemove(board, array, isX);
						context.drawImage(image2, array[1]*101+1, array[0]*101+1, 100, 100);
					}
				}
				if(findWinner(board)!==undefined && findWinner(board).winner==='0')
				{
					isover=true;
					alert('winner is ' + findWinner(board).winner);
					return;
				}
				if(findWinner(board)!==undefined)
				{
					isover=true;
					alert('no winners');
				}
			}
	}
	}
}, false);
