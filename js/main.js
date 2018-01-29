$(document).ready(function(){
    console.log('działam');
    var intro = $('.intro').find('p')[0].val();
    String(intro);


    $('.square').eq(0).on('click', function(){
      $(this).css('background-color','green');
      console.log('działa')
    });
    // function changeColor() {
    //    for (i=0; i<=intro.val.length;i++){
    //        if (i % 2 == 0) {
    //            intro[i].css('color', 'blue');
    //        }
    //    }
    // }
    // changeColor();
});