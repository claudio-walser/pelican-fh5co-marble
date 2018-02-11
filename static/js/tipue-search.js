jQuery(document).ready(function() {
     var siteUrl = jQuery('#tipue_search_input').data('siteurl');
     jQuery('#tipue_search_input').tipuesearch({
         'show': 10,
         'mode': 'json',
         'contentLocation': siteUrl + '/tipuesearch_content.json'
     });
});