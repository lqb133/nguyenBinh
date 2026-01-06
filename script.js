function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function buy(acc) {
  alert('Bạn đã mua ' + acc + '. Liên hệ admin để nhận acc!');
}

function submitCard() {
  alert('Gửi thẻ thành công!');
}

function donate() {
  alert('Cảm ơn bạn đã donate ❤️');
}
