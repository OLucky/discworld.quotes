$(function() {
    var bookName = "Wyrd Sisters";
    var bigList = "";
    var quote = "Through the fathomless deeps of space swims the star turtle Great A’Tuin, bearing on its back the four giant elephants who carry on their shoulders the mass of the Discworld.";
    $.getJSON("https://raw.githubusercontent.com/OLucky/discworld.quotes/master/quotes/quotes-list.json", function(data) {
        bigList = data;
    });

    //Main function for getting a quote from list
    function getQuote(list) {
        var seriesNumber = Math.floor(Math.random() * list.Series.length);
        var seriesName = list.Series[seriesNumber];
        var bookNumber = Math.floor(Math.random() * list[seriesName].Books.length);
        bookName = list[seriesName].Books[bookNumber];
        $('#book').animate({
            'opacity': '0'
        }, 1000, function() {
            $('#book').html(bookName);
            $('#book').animate({
                'opacity': '1'
            }, 1000);
        });
        var quoteNumber = Math.floor(Math.random() * list[seriesName][bookName].length);
        quote = list[seriesName][bookName][quoteNumber];
        $('#quote').animate({
            'opacity': '0'
        }, 1000, function() {
            $('#quote').html(quote);
            $('#quote').animate({
                'opacity': '1'
            }, 1000);
        });
    }

    //New quote starter
    $('#qbtn').on('click', function() {
        getQuote(bigList);
    });

    //Twitter button script
    $('#twtbtn').on('click', function() {
        quote = quote.replace(/<br>/g, '%0D%0A');
        window.open("http://twitter.com/share?text=" + quote + "%0D%0A %0D%0A" + "Terry Pratchett." + " " + bookName + ".%0D%0AThe Notes from Discworld. " + "&url=http://codepen.io/OLucky/full/mEaRXQ", '_blank');
    });
});
