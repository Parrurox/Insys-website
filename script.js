// Mobile menu toggle (simple)
document.addEventListener('DOMContentLoaded', function(){
	const menuToggle = document.querySelector('.menu-toggle');
	const nav = document.querySelector('.main-nav');

	if(menuToggle){
		menuToggle.addEventListener('click', ()=>{
			if(nav.style.display === 'flex'){
				nav.style.display = '';
				menuToggle.textContent = '☰';
			} else {
				nav.style.display = 'flex';
				nav.style.flexDirection = 'column';
				nav.style.gap = '12px';
				menuToggle.textContent = '✕';
			}
		})
	}

	// Smooth scroll for CTAs
	document.querySelectorAll('a[href^="#"]').forEach(a=>{
		a.addEventListener('click', function(e){
			const target = this.getAttribute('href');
			if(target.length > 1){
				const el = document.querySelector(target);
				if(el){
					e.preventDefault();
					el.scrollIntoView({behavior:'smooth',block:'start'});
				}
			}
		})
	})
});

