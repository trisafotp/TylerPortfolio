var questionSubmitted=document.querySelector('.questionSubmitted');
var questionAsked=document.querySelector('.questionAsked');
var unwisdom=document.querySelector('.unwisdom')

function channelSeuss() {
unwisdom.textContent= questionAsked +' I do not know; I cannot say. You must find out some other way!'}
questionSubmitted.addEventListener('click', channelSeuss);
