$(function(){
  var bookNumber = "";
  var bookName = "";
  var seriesName= "Rincewind";
  var seriesNumber = "";
  var bigList = "";
  $.getJSON("quotes/quotes-list.json", function(data){
    bigList = data;
  });
  function getQuote(list){
  seriesNumber = Math.floor(Math.random()*list.Series.length);
  seriesName = list.Series[seriesNumber];
  bookNumber = Math.floor(Math.random()*list[seriesName].Books.length);
  bookName = list[seriesName].Books[bookNumber];
  $('#book').animate({'opacity':'0'}, 1000, function(){
  $('#book').html(bookName);
  $('#book').animate({'opacity':'1'}, 1000);
  });
  var quoteNumber = Math.floor(Math.random()*list[seriesName][bookName].length);
  $('#quote').animate({'opacity':'0'}, 1000, function(){
  $('#quote').html(list[seriesName][bookName][quoteNumber]);
  $('#quote').animate({'opacity':'1'}, 1000);
  });
}
  $('#qbtn').on('click',function(){
    getQuote(bigList);
  });

});
