$('.fab').click(function() {
  $(this).toggleClass('open');
});

var dropdown = document.querySelectorAll('.custom-dropdown');

dropdown.forEach(function(item){
  item.querySelector('a').addEventListener('click', function(event) {
    event.preventDefault();
    var parent = item.parentNode;
    var child = parent.querySelector('.custom-dropdown-menu');
    if(child.style.display == 'block') {
      child.style.display = 'none';
      child.classList.remove('open');
    } else {
      child.style.display = 'block';
      child.classList.add('open');
    }
    
  });
});