const board=[
['x', '0', ''],
['', '', ''],
['', '', '']
];
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
