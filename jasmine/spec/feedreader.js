/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
       
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Looping through the allFeeds to testing that every feed element contains url variable defined and filled.
         */
        it('URLs are defined for all Feeds', function(){
            for(allFeed of allFeeds){
                expect(allFeed.url).toBeDefined;
                expect(allFeed.url.length).not.toBe(0);
            }
        });
         
        /* Looping through the allFeeds to testing that every feed element contains url variable defined and filled.
        */
        it('names are defined for all Feeds', function(){
            for(allFeed of allFeeds){
                expect(allFeed.name).toBeDefined;
                expect(allFeed.name.length).not.toBe(0);
            }
        });
       
    });
        

        /*
            Suite 2: Testing menu options to ensure the menu is hidden by default and is displeyed when is clicked.
            Keys: menu-hidden class doesn't appear when menu is displayed. 
          */
    describe('The menu', function() {
        it('is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true); 
            
        });
        it('toogle works', function(){
        //clicking menu
        $('.menu-icon-link').click();

        expect($('body').hasClass('menu-hidden')).toBe(false); 
        //click again to init
        $('.menu-icon-link').click();

        });

    });         

         /* 
         * Suit 3: Asynchronous load feed Test . Access to first child of .feed $(.parent .child) ----> $(.feed .entry)
         */
      

        describe('Initial Entries',function(){

            beforeEach(function(done){
                let initialfeedEntries = $('.entry');
                console.log("Initial feed Entries length: ",initialfeedEntries.length);
                loadFeed(0,done);
                
            });
            
            it('At least one entry within the feed container',function(){

                expect($('.feed')[0].childNodes[1]).toBeDefined;
                expect($('.feed')[0].childNodes[1].innerText.length).not.toBe(0);

            });

        });

        /* Suit 4: Load feed and check content changes 
         * 
         * Call loadFeed 0, Store the oldfeed.
         * Call loadFeed 1 inside loadFeed 0 (To be asynchronous) and store in newfeed
         */

       describe('New Feed Selection', function() {
    
        let newfeed;
        let oldfeed;
    
      
         beforeEach(function(done){

            loadFeed(0, function(){

                console.log("1. old feed fed");

                oldfeed =$('.feed').html();
                loadFeed(1, function() {

                    newfeed=$('.feed').html();
                    console.log("2. new feed fed");
                    done();
               
                });
            });
        });

            it('content changes', function(done){
            
                console.log("3. expects launched");
                expect(oldfeed).toBeDefined;
                console.log("3. expects launched");    
                expect(newfeed).toBeDefined;
                console.log("3. expects launched");
                expect(oldfeed).not.toEqual(newfeed);
                done();
            });
       
        });
}());
