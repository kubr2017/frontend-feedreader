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
    it('All elements in allFeeds array have URL', function() {
      for (let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url.length).not.toBe(0);
      }
    });


    /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

    it('All elements in allFeeds array have Name', function() {
      for (let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name.length).not.toBe(0);
      }
    });
  });


  /* TODO: Write a new test suite named "The menu" */

  describe('The menu', function() {
    /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

    it('The menu element hidden by default.', function() {
      const bodyEl = document.querySelector('body');
      expect(bodyEl.classList.contains('menu-hidden')).toBe(true);
    });

    /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
    it('Checking click event', function() {
      $('.menu-icon-link').trigger('click'); // click to menu
      // checking menu is not hidden
      expect($('body').hasClass('menu-hidden')).toBe(false);
      $('.menu-icon-link').trigger('click'); // click again
      // checking  menu is hidden
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });


  /* TODO: Write a new test suite named "Initial Entries" */

  describe('Initial Entries', function() {
  /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    var feedEl;
    var len;
    beforeEach(function(done) {
      loadFeed(0, function() {
        // get collection of entries elements in feed container
        feedEl = document.querySelectorAll('.feed .entry');
        len = feedEl.length; // get number of entries elements
        done();
      });
    });
    it('Check elements is exist in entries', function() {
      // checking that entries elements at least single
      expect(len).toBeGreaterThan(0);
    });
  });

  /* TODO: Write a new test suite named "New Feed Selection" */

  describe('New Feed Selection', function() {
  /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
    */
    var feedEl = document.getElementsByClassName('feed')[0];
    var feed0;
    var feed1;

    beforeEach(function(done) {
      loadFeed(0, function() {
        feed0 = feedEl.innerText; // get content of feed
        loadFeed(1, function() {
          feed1 = feedEl.innerText; // get content of feed
          done(); // starts spec
        });
      });
    });

    it('Have to be different content in different feed', function() {
      expect(feed0).toBeDefined();
      expect(feed1).toBeDefined();
      // checking that content is different
      expect(feed1==feed0).not.toBeTruthy();
    });
  });
}());
