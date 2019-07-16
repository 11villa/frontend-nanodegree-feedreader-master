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
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URLs are defined for all Feeds', function(){
            for(allFeed of allFeeds){
                expect(allFeed.url).toBeDefined;
                expect(allFeed.url.length).not.toBe(0);
            }
        });
         

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined for all Feeds', function(){
            for(allFeed of allFeeds){
                expect(allFeed.name).toBeDefined;
                expect(allFeed.name.length).not.toBe(0);
            }
        });
       
    });
        

    
    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
    describe('The menu', function() {
        it('is hidden by default', function(){
            var hidden = document.getElementsByClassName("menu-hidden");

            expect(hidden).toBeDefined;
            expect(hidden.length).not.toBe(0);

           
        });
        it('toogle works', function(){
        
           var hidden = document.getElementsByClassName("menu-hidden");
            
            $('body').toggleClass('menu-hidden');
            expect(hidden.length).toBe(0);

            $('body').toggleClass('menu-hidden');
            expect(hidden.length).not.toBe(0);

        });

    });         

    /* TODO: Write a new test suite named "Initial Entries" */
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
      

        describe('Initial Entries',function(){

            beforeEach(function(done){
                let initialfeedEntries = $('.entry');
                console.log("Initial feed Entries length: ",initialfeedEntries.length);
                loadFeed(0,done);
                
            });
            
            it('At least one entry within the feed container',function(){

                let feedEntries = $('.entry');
                console.log("feed Entries after loadFeed(0) :",feedEntries.length );
                expect(feedEntries.length).not.toBe(0);

            });

        });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
       describe('New Feed Selection', function() {
    
        let firstFeed;
    
        beforeEach(function(done){
            loadFeed(1,function(){
                firstFeed= $('.entry')[0].innerText;
                done();
                
            }); 
            done();
          });     
            //Load Feed
            it('content changes', function(){
            
                let firstFeedAfterLoad;
                firstFeedAfterLoad = $('.entry')[0].innerText;
                console.log("firstFeedAfterLoad: ",firstFeedAfterLoad);
                expect(firstFeed).toBeDefined;
                expect(firstFeedAfterLoad).toBeDefined;
                expect(firstFeed).not.toEqual(firstFeedAfterLoad);
            
            });
            afterEach(function(){
                //init feeds after testing
                init();
                console.log("END");

            });
            
        });
}());
