$(function(){
  $(".image img").hover(function() {
    var index = $(this).index();
    console.log(22);
    $(".image-code img").eq(index).css('display', 'block');
  }, function() {
    var index = $(this).index();
    $(".image-code img").eq(index).css('display', 'none')
  });
})
