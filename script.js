$(document).ready(function() {
    $('#showMoreBtn').click(function() {
        var isExpanded = $(this).text() === 'Show Less';

        // Toggle bio visibility
        if (isExpanded) {
            $('.bio').animate({ height: '50px' }, 300); // Shrink bio
            $(this).text('Show More');
            $('.profile-img').css('filter', 'blur(0px)'); // Remove blur
        } else {
            $('.bio').animate({ height: '150px' }, 300); // Expand bio
            $(this).text('Show Less');
            $('.profile-img').css('filter', 'blur(5px)'); // Blur image
        }
    });
});
