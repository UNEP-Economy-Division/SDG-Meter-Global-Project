/*!
* Start Bootstrap - Freelancer v7.0.2 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);


    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// function to handle success
function init() {
	document.getElementById("userText").value = "";
}
window.onload = init;
String.prototype.trim = function () {
	return this.replace(/^\s+|\s+$/g, "");
}
function success() {

	var x = document.getElementById("algoResult");
	var y = document.getElementById("userText").value.trim();
	console.log(y);
	if (y == '') {

		alert("Enter some text");

	}
	else x.style.display = 'block';


	var myHeaders = new Headers();
	 myHeaders.append("Content-Type", "application/json");

	 var raw = JSON.stringify({
		 "text": document.getElementById("userText").value
	 });
	 console.log(document.getElementById("userText").value)
		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

	 const hostName="localhost"
	 fetch(`http://${hostName}:5000/sdgOP`, requestOptions)
		 .then(res => res.json())
		 .then(data => obj = data)
		 .then(data => calculate(data))
		 .then(() => console.log(obj))
		 .catch(error => console.log('error', error));

	let calculate = (data) => {
			var div = document.getElementById('algoResult');
while(div.firstChild){
    div.removeChild(div.firstChild);
}
		for (var key in data) {
			if (data.hasOwnProperty(key)) {
				console.log(key + " -> " + data[key]);

				let anchorElement = document.createElement('a')
				anchorElement.setAttribute('href', 'https://sdgs.un.org/goals')
				let imageElement = document.createElement('img')
				imageElement.setAttribute('class', 'img-fluid rounded mb-5')
				imageElement.setAttribute('style', 'float: left;')
				imageElement.src = 'assets/images/' + key + '.png'
				anchorElement.appendChild(imageElement)


				if (data[key] > 50) {
					var x = data[key] - 50;
					let divElement = document.createElement('div')
					divElement.setAttribute('class', 'progress yellow')
					let spanElement1 = document.createElement('span')
					spanElement1.setAttribute('class', 'progress-left')

					let spanElement2 = document.createElement('span')
					spanElement2.setAttribute('class', 'progress-bar' + key)
					//spanElement2.style.animation = ' animation: load-'+x+' 1.5s linear forwards 1.8s'
					spanElement1.appendChild(spanElement2)

					divElement.appendChild(spanElement1)

					let spanElement3 = document.createElement('span')
					spanElement3.setAttribute('class', 'progress-right')

					let spanElement4 = document.createElement('span')
					spanElement4.setAttribute('class', 'progress-bar')
					//spanElement4.style.cssText = ' animation: load-'+data[key]+' 1.8s linear forwards'

					spanElement3.appendChild(spanElement4)


					divElement.appendChild(spanElement3)


					var style = document.createElement('style');
					style.innerText = '.progress .progress-bar' + key + ' {    width: 100%;    height: 100%;    background: none;    border-width: 12px;    border-style: solid;    position: absolute;    top: 0}.progress .progress-left .progress-bar' + key + ' {    left: 100%;    border-top-right-radius: 90px;    border-bottom-right-radius: 90px;    border-left: 0;    -webkit-transform-origin: center left;    transform-origin: center left}.progress.yellow .progress-left .progress-bar' + key + ' {    animation: load-' + x + ' 1.5s linear forwards 1.8s} .progress.yellow .progress-bar' + key + ' {    border-color: #fdba04}'
					document.head.appendChild(style);

					let divElement2 = document.createElement('div')
					divElement2.setAttribute('class', 'progress-value')
					divElement2.innerHTML = data[key] + '%'

					divElement.appendChild(divElement2)

					let brElement = document.createElement('br')



					document.getElementById('algoResult').appendChild(anchorElement)
					document.getElementById('algoResult').appendChild(brElement)
					document.getElementById('algoResult').appendChild(brElement)
					document.getElementById('algoResult').appendChild(divElement)
					document.getElementById('algoResult').appendChild(brElement)
				}


				//https://bbbootstrap.com/snippets/circle-progress-bar-percent-loading-81242857



				if (data[key] <= 50) {

					let divElement = document.createElement('div')
					divElement.setAttribute('class', 'progress yellow')
					let spanElement1 = document.createElement('span')
					spanElement1.setAttribute('class', 'progress-left')

					let spanElement2 = document.createElement('span')
					spanElement2.setAttribute('class', 'progress-bar')
						/*< !--spanElement2.style.cssText = 'animation: none' -- >*/
							spanElement1.appendChild(spanElement2)



					let spanElement3 = document.createElement('span')
					spanElement3.setAttribute('class', 'progress-right')

					let spanElement4 = document.createElement('span')
					spanElement4.setAttribute('class', 'progress-bar' + key)
						/*< !--spanElement4.style.animation = 'animation: loading-2  1.8s linear forwards'
					-->*/
						spanElement3.appendChild(spanElement4)


					var style = document.createElement('style');
					style.innerText = '.progress .progress-bar' + key + ' {       width: 100%;    height: 100%;    background: none;    border-width: 12px;    border-style: solid;    position: absolute;    top: 0}.progress .progress-right .progress-bar' + key + ' {  left: -100%;    border-top-left-radius: 90px;    border-bottom-left-radius: 90px;    border-right: 0;    -webkit-transform-origin: center right;    transform-origin: center right;   animation: loading-1 1.8s linear forwards}.progress.yellow .progress-right .progress-bar' + key + ' {    animation: load-' + data[key] + ' 1.8s linear forwards} .progress.yellow .progress-bar' + key + ' {    border-color: #fdba04}'
					document.head.appendChild(style);
					divElement.appendChild(spanElement1)
					divElement.appendChild(spanElement3)

					let divElement2 = document.createElement('div')
					divElement2.setAttribute('class', 'progress-value')
					divElement2.innerHTML = data[key] + '%'

					divElement.appendChild(divElement2)

					let brElement = document.createElement('br')



					document.getElementById('algoResult').appendChild(anchorElement)
					document.getElementById('algoResult').appendChild(brElement)
					document.getElementById('algoResult').appendChild(brElement)
					document.getElementById('algoResult').appendChild(divElement)
					document.getElementById('algoResult').appendChild(brElement)
				}




			}




		}


	}





}
