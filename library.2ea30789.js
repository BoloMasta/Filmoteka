!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequire62bd;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequire62bd=n),n.register("8BR1R",(function(e,o){var t,i,r,d;t=e.exports,i="addToggleModal",r=function(){return v},Object.defineProperty(t,i,{get:r,set:d,enumerable:!0,configurable:!0});var a=n("cqmI4");n("1fAZO");var l=n("lfqeF");n("jPljR");var c=n("6kpMs"),u=(n("6kpMs"),c=n("6kpMs"),n("e07ZM")),s=new(0,n("iPy5Q").Loader),m=new(0,l.FetchApiMovies);function v(){var e={modalOpen:document.querySelectorAll("[data-modal-open]"),modalClose:document.querySelector("[data-modal-close]"),modalBackdrop:document.querySelector(".modal-movie__backdrop")};function o(){e.modalBackdrop.classList.remove("modal-movie__backdrop--is-hidden"),window.addEventListener("keydown",n),s.on()}function t(){e.modalBackdrop.classList.add("modal-movie__backdrop--is-hidden")}function n(e){"Escape"===e.code&&t()}e.modalOpen.forEach((function(e){e.addEventListener("click",o)})),e.modalClose.addEventListener("click",t),e.modalBackdrop.addEventListener("click",(function(e){e.target==e.currentTarget&&t()})),document.querySelectorAll(".movie-card__item").forEach((function(e){var o,t;e.addEventListener("click",(function(o){f.src="",L.innerHTML="",p.innerHTML="",_.innerHTML="",y.innerHTML="",q.innerHTML="",b.innerHTML="",M.innerHTML="",h.dataset.id="",T.dataset.id="",o.preventDefault();var t=e.id;m.getMovieDetails(t).then((function(e){var o,t,n,i,r,d,a,l,c,u;t=(o=e).id,n=o.poster_path,i=o.title,r=o.original_title,d=o.popularity,a=o.overview,l=o.genres,c=o.vote_average,u=o.vote_count,f.src="https://image.tmdb.org/t/p/w500".concat(n),L.innerHTML=i,p.innerHTML=c.toFixed(1),_.innerHTML=u,y.innerHTML=d.toFixed(1),q.innerHTML=r,b.innerHTML=l.map((function(e){return e.name})).join(", "),M.innerHTML=a,h.dataset.id=t,T.dataset.id=t})),s.off()}));var n=!1,i=!1;null===(o=(0,c.load)("watchedList"))||void 0===o||o.forEach((function(o){o.id==e.id&&(n=!0)})),null===(t=(0,c.load)("queueList"))||void 0===t||t.forEach((function(o){o.id==e.id&&(i=!0)}));var r=document.querySelector(".modal-movie__button--watched"),d=document.querySelector(".modal-movie__button--queue");n&&(r.innerHTML="On List"),i&&(d.innerHTML="On List");var l=function(o,t,a){var l;null!=a&&("watched"===a?l=n:"queue"===a&&(l=i),l?((0,c.removeFromLibrary)(e.id,t),o.innerHTML="Add to ".concat(a),d.disabled=!1,r.disabled=!1):((0,c.addToLibrary)(e.id,t),o.innerHTML="Added",o.style.color="#8C8C8C"),"watched"===a?(n=!n,r.disabled=!0,d.disabled=!0):"queue"===a&&(i=!i,d.disabled=!0,r.disabled=!0))};r.addEventListener("click",(function(){if(l(r,"watchedList","watched"),document.location.href.includes("library")&&"watched"===a.refs.moviesList.dataset.listtype){var e=(0,c.load)("watchedList");(0,u.getAllLibraryMovies)(e,"watchedList")}})),d.addEventListener("click",(function(){if(l(d,"queueList","queue"),document.location.href.includes("library")&&"queue"===a.refs.moviesList.dataset.listtype){var e=(0,c.load)("queueList");(0,u.getAllLibraryMovies)(e,"queueList")}}))}))}var f=document.querySelector(".modal-movie__poster--img"),L=document.querySelector(".modal-movie__title"),p=document.querySelector(".modal-movie__vote"),_=document.querySelector(".modal-movie__votes"),y=document.querySelector(".modal-movie__popularity"),q=document.querySelector(".modal-movie__original-title"),b=document.querySelector(".modal-movie__genre"),M=document.querySelector(".modal-movie__text"),h=document.querySelector(".modal-movie__button--watched"),T=document.querySelector(".modal-movie__button--queue")}))}();
//# sourceMappingURL=library.2ea30789.js.map
