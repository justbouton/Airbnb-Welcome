// Y axis scroll speed
var velocity = 2.25;

function update(){ 
    var pos = $(window).scrollTop(); 
    $('.section').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height()+575;
        $(this).css('backgroundPosition', '341px ' + Math.round((height + pos) / velocity) + 'px'); 
    }); 
};

$(window).bind('scroll', update);