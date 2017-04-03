/**
* Social links: Primer helper extendido
*/
hexo.extend.helper.register('social', function(tipo){
  
  switch(tipo) {
    case "twitter":
        return  '<a href="https://twitter.com/ACTIVAGEproject" target="_blank"><img src="/images/general/twitter-icon.png"></a>';
        break;
    case "facebook":
        return  '<a href="https://www.facebook.com/ACTIVAGEproject-1069663489846835/" target="_blank"><img src="/images/general/facebook-icon.png"></a>';
        break;
    case "linkedin":
        return  '<a href="https://www.linkedin.com/company/activage-project" target="_blank"><img src="/images/general/linkedin-icon.png"></a>';
        break;
    case "youtube":
        return  '<a href="#"><img src="/images/general/youtube-icon.png" target="_blank"></a>';
        break;
    }
});