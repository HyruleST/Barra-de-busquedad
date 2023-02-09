window.addEventListener("load",() =>{
    let loader = document.querySelector('.loader');
    loader.style.display = "none";
    const comprobar = () =>{
        let val = document.querySelector('#browser-val').value;
        let logo = document.querySelector('#logo');
        let select = document.querySelector('#browser-val');
        if(val == "google"){
            logo.src = "./img/Google_wordmark.svg";
            select.style.backgroundImage = "url(./img/Google__G__Logo.svg), url(./img/angle_down_icon_188314.svg)";
        }
        else if(val == "bing"){
            logo.src = "./img/Bing_logo_PNG8.png"
            select.style.backgroundImage = "url(./img/Microsoft_logo.svg), url(./img/angle_down_icon_188314.svg)";
        }
        else if(val == "duck"){
            logo.src = "./img/DuckDuckGo_logo.svg.png";
            select.style.backgroundImage = "url(./img/duckduckgo-seeklogo.com.svg), url(./img/angle_down_icon_188314.svg)";
        }
        else if (val == "youtube"){
            logo.src = "./img/youtube.svg.png";
            select.style.backgroundImage = "url(./img/youtube-svgrepo-com.svg), url(./img/angle_down_icon_188314.svg)";
        }
    };
    setInterval(() => {
        comprobar() 
    }, 1);
    
});

let search = document.querySelector(".content__barra-boton");
search.addEventListener('click',() =>{
    let val = document.querySelector('#browser-val').value;
    let search = document.querySelector("#search").value;
    if(val == "google"){
       window.open("https://www.google.com/search?q=" + search);
    }
    else if(val == "bing"){
        window.open("https://www.bing.com/search?q=" + search);
    }
    else if(val == "duck"){
        window.open("https://www.duckduckgo.com/?q=" + search);
    }
    else if(val == "youtube"){
        window.open("https://www.youtube.com/results?search_query=" + search)
    }
});

document.documentElement.addEventListener("keyup",(evt)=>{
	if (evt.which == 13) {
		let search = document.querySelector("#search").value;
		if (search.length > 0) {
			let val = document.querySelector('#browser-val').value;
			if(val == "google"){
			window.open("https://www.google.com/search?q=" + search);
			}
			else if(val == "bing"){
			window.open("https://www.bing.com/search?q=" + search);
			}
			else if(val == "duck"){
			window.open("https://www.duckduckgo.com/?q=" + search);
			}
			else if(val == "youtube"){
			window.open("https://www.youtube.com/results?search_query=" + search)
			}
		}
	}
})

