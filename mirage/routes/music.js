export default function () {
	this.get('/');
	this.get('/:id');
	this.post('/');
	this.patch('/:id');
}
