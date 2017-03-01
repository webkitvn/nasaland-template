jQuery(document).ready(function(){
    jQuery('#btn-search').click(function(){
        jQuery(this).toggleClass('active');
        jQuery('#searchform').toggleClass('active');
        jQuery('#searchform input[type=search]').focus();
        return false;
    })
})
jQuery('.ui.dropdown')
    .dropdown()
;
jQuery('button#advance-search').click(function(){
    jQuery('.advance-search').toggleClass('hidden');
    return false;
})