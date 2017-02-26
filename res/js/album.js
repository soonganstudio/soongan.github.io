function setAlbum(type, count, ele) {
    var html = '';

    for (var i = 1; i <= count; i ++) {
        html += '<a href="#"><img src="../res/img/soonganAlbum/' + type + '/thumb/' + i + '.jpg" data-image="../res/img/soonganAlbum/' + type + '/hd/' + i + '.jpg" style="display:none" alt=""></a>';
    }

    ele.append(html);
    setTimeout(function() {
        ele.unitegallery({
            tiles_space_between_cols: 5,
            tiles_space_between_cols_mobile: 5,
            tiles_min_columns: 3,
            tiles_max_columns: 3,
            theme_appearance_order: "keep"
        });
    }, 300);

}

function setData(jsonData) {
    // main album setting
    setAlbum('main', jsonData.album.main.count, $('#soongan-album-list'));

    // cres album setting
    setAlbum('crew', jsonData.album.crew.count, $('#soongan-crew-album-list'));
}

$('#introduceAccordionTab').on('click', function() {
    $('#introduceAccordion').collapse('toggle');
});
$('#serviceAccordionTab').on('click', function() {
    $('#serviceAccordion').collapse('toggle');
});

$('#headingOne').on('click', function() {
    $('#collapseOne').collapse('toggle');
});
$('#headingTwo').on('click', function() {
    $('#collapseTwo').collapse('toggle');
});
$('#headingThree').on('click', function() {
    $('#collapseThree').collapse('toggle');
});
$('#headingFour').on('click', function() {
    $('#collapseFour').collapse('toggle');
});

$('#accordion .collapse').on('show.bs.collapse', function () {
  $.each($('#accordion .in'), function(k, v) {
    $(v).collapse('hide');
  });
})

$(document).ready(function() {
    $.ajax({
        url: '/res/js/album.json',
        type: 'GET',
        success: function(data) {
            setData(data);
        }
    });
    
});

