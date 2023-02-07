let search = document.querySelector(".content__barra-boton");
const comprobar = () =>{
    let val = document.querySelector('#browser-val').value;
    let logo = document.querySelector('#logo');
    let select = document.querySelector('#browser-val');
    if(val == "google"){
        let valor = logo.src;
        if(valor != "http://127.0.0.1:5500/img/Google_wordmark.svg"){
            logo.src = "http://127.0.0.1:5500/img/Google_wordmark.svg";
            select.style.backgroundImage = "url(../img/Google__G__Logo.svg), url(../img/angle_down_icon_188314.svg)";
        }
    }
    else if(val == "bing"){
        let valor = logo.src;
        if(valor != "http://127.0.0.1:5500/img/Bing_logo_PNG8.png"){
            logo.src = "../img/Bing_logo_PNG8.png"
            select.style.backgroundImage = "url(../img/Microsoft_logo.svg), url(../img/angle_down_icon_188314.svg)";
        }
    }
    else if(val == "duck"){
        let valor = logo.src;
        if(valor != "http://127.0.0.1:5500/img/DuckDuckGo_logo.svg.png"){
            logo.src = "http://127.0.0.1:5500/img/DuckDuckGo_logo.svg.png";
            select.style.backgroundImage = "url(../img/duckduckgo-seeklogo.com.svg), url(../img/angle_down_icon_188314.svg)";
        }
    }
    else if (val == "youtube"){
        let valor = logo.src;
        if(valor != "http://127.0.0.1:5500/img/youtube.svg.png"){
            logo.src = "http://127.0.0.1:5500/img/youtube.svg.png";
            select.style.backgroundImage = "url(../img/youtube-svgrepo-com.svg), url(../img/angle_down_icon_188314.svg)";
        }
    }
};
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
setInterval(() => {
   comprobar() 
}, 1);
