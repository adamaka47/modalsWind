let btns = document.querySelectorAll('.btn');

btns.forEach(function(item) {
	item.onclick = showModal;
});	

let closes = document.querySelectorAll('.btn_close');

for (let i = 0; i < closes.length; i++) {
	closes[i].onclick = closeModal;
}

function keys() {
	document.onkeydown = function(e) {
		console.log(121212)
		if (e.keyCode == 27) {
			document.querySelectorAll('.modal-container').forEach(function(item) {
				item.classList.add('hide');
			});
		}
		document.onkeydown = null;
	}
}

function showModal() {
	let modal_id = this.getAttribute('data-modal');
	document.querySelector(modal_id).classList.remove('hide');
	keys();
}

function closeModal() {
	let modal_id = this.getAttribute('data-modal');
	document.querySelector(modal_id).classList.add('hide');
	document.onkeydown = null;
}


document.querySelectorAll('.modal-container').forEach(function(item) {
	item.onclick = function() {
		item.classList.add('hide');
	}
});

document.querySelectorAll('.modal-window').forEach(function(childs) {
	childs.onclick = function(e) {
		e.stopPropagation();
	}
});

