const board=[
['x', '0', '0'],
['0', 'x', '0'],
['x', '0', 'x']
];
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
