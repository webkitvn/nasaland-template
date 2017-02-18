jQuery(document).ready(function(){
    jQuery('#btn-search').click(function(){
        jQuery(this,'#searchform').toggleClass('active');
        jQuery('#searchform').toggleClass('active')
        return false;
    })
})