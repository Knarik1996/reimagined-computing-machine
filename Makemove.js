const board=[
['x', '0', ''],
['', '', ''],
['', '', '']
];
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
