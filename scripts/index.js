document.querySelectorAll(".navigation").forEach(e=>{e.querySelector(".navigation__toggler").addEventListener("click",()=>{e.classList.toggle("navigation--opened")}),setTimeout(()=>e.classList.remove("navigation--no-js"),1e3)});window.ymaps.ready(()=>{let e=document.querySelector(".map"),o=e.querySelector("template").innerHTML,a=e.querySelector("picture"),t=new window.ymaps.Map(e,{center:[59.9387165,30.3230474],controls:[],zoom:16});t.geoObjects.add(new window.ymaps.Placemark(t.getCenter(),null,{iconLayout:window.ymaps.templateLayoutFactory.createClass(o)})),t.behaviors.disable("scrollZoom"),a.remove()});
