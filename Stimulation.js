const board=[
['', '', ''],
['', '', ''],
['', '', '']
];
let isX=true;
const rand = function(num) {
	return Math.floor(Math.random() * num) + 1;
};

const array=[];
const nextmove=function(board, isX)
{
	let a;
	let b;
	for(let i=1;;i++)
	{
		a=rand(3)-1;
		b=rand(3)-1;
		if(board[a][b]==='')
		{
			array[0]=a;
			array[1]=b;
			return array;
		}
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
			else
				win.winner='0';
			win.winningLocations=[[i, 0], [i, 1], [i, 2]];
		}
	if(board[0][0]===board[1][1] && board[1][1]===board[2][2])
	{
		if(board[0][0]==='x')
			win.winner='x';
		else
			win.winner='0';
		win.winningLocations=[[0, 0], [1, 1], [2, 2]];
	}
	if(board[0][2]===board[1][1] && board[1][1]===board[2][0])
	{
		if(board[0][2]==='x')
			win.winner='x';
		else
			win.winner='0';
		win.winningLocations=[[2, 0], [1, 1], [0, 2]];
	}
	for(let j=0;j<=2;j++)
	{
		if(board[0][j]===board[1][j] && board[1][j]===board[2][j])
		{
			if(board[0][j]==='x')
				win.winner='x';
			else
				win.winner='0';
			win.winningLocations=[[0, j], [1, j], [2, j]];		
		}
	}
	for(k=0;k<=2;k++)
		for(h=0;h<=2;h++)
			if(board[k][h]==='')
				return undefined;
	return win;
};
for(let i=0;;i++)
{
	nextmove(board, isX);
	makemove(board, array, isX);
	isX=!isX;
	if(findWinner(board)===undefined)
		continue;
	else
	{
		alert('winner is ' + findWinner(board).winner + ', winning locations are ' + findWinner(board).winningLocations);
		break;
	}
}
