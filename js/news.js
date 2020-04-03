$( window ).on( "load", function() {
    console.log( "window loaded" );

    $('.carousel_back').click(function(){
        console.log("back");
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = 0;
        }

        updateCarousel(currentIndex);
    });

    $('.carousel_forward').click(function(){
        console.log("forward");
        currentIndex++;

        if (currentIndex == carouselHeader.length) {
            currentIndex = carouselHeader.length - 1;
        }

        updateCarousel(currentIndex);
    });
});

let carouselHeader = ["March 13th", "March 14th", "March 15th", "March 16th", "March 17th"];
let carouselContent = ["On March 13th, we Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien. Donec enim diam vulputate ut. Aliquam ultrices sagittis orci a. Cursus mattis molestie a iaculis at erat pellentesque. Sit amet commodo nulla facilisi nullam. Lacus viverra vitae congue eu consequat ac felis donec. Placerat vestibulum lectus mauris ultrices. Congue mauris rhoncus aenean vel.","On March 14th, we Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien. Donec enim diam vulputate ut. Aliquam ultrices sagittis orci a. Cursus mattis molestie a iaculis at erat pellentesque. Sit amet commodo nulla facilisi nullam. Lacus viverra vitae congue eu consequat ac felis donec. Placerat vestibulum lectus mauris ultrices. Congue mauris rhoncus aenean vel.","On March 15th, we Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien. Donec enim diam vulputate ut. Aliquam ultrices sagittis orci a. Cursus mattis molestie a iaculis at erat pellentesque. Sit amet commodo nulla facilisi nullam. Lacus viverra vitae congue eu consequat ac felis donec. Placerat vestibulum lectus mauris ultrices. Congue mauris rhoncus aenean vel.","On March 16th, we Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien. Donec enim diam vulputate ut. Aliquam ultrices sagittis orci a. Cursus mattis molestie a iaculis at erat pellentesque. Sit amet commodo nulla facilisi nullam. Lacus viverra vitae congue eu consequat ac felis donec. Placerat vestibulum lectus mauris ultrices. Congue mauris rhoncus aenean vel.","On March 17th, we Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien. Donec enim diam vulputate ut. Aliquam ultrices sagittis orci a. Cursus mattis molestie a iaculis at erat pellentesque. Sit amet commodo nulla facilisi nullam. Lacus viverra vitae congue eu consequat ac felis donec. Placerat vestibulum lectus mauris ultrices. Congue mauris rhoncus aenean vel.",];

var currentIndex = 0;

function updateCarousel(index) {
    $('.carousel_header').html(carouselHeader[index]);
    $('.carousel_content').html(carouselContent[index]);
}
