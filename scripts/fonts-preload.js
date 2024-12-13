const steppeBook = new FontFace('Steppe-Book','url(./fonts/Steppe-Book.ttf) format("truetype")');

steppeBook.load().then(function() {
    document.fonts.add(steppeBook);
    console.log('Steppe-Book loaded');
}).catch(function() {
    console.log('Steppe-Book cant load');
});

const steppeExtraBold = new FontFace('Steppe-ExtraBold','url(./fonts/Steppe-ExtraBold.ttf) format("truetype")');

steppeExtraBold.load().then(function(){
    document.fonts.add(steppeExtraBold);
    console.log('Steppe-ExtraBold loaded');
}).catch(function(){
    console.log('Steppe-ExtraBold cant load');
});