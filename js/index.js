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
  $('#book').html(bookName);
  var quoteNumber = Math.floor(Math.random()*list[seriesName][bookName].length);
  $('#quote').html(list[seriesName][bookName][quoteNumber]);
}

  $('#qbtn').on('click',function(){
    getQuote(bigList);
  });

  $('#vkbtn').on('click', function Share(){
  
  });
});
