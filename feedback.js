$(document).ready(function() {

    // Get all the star elements
    const $stars = $('.star');
    const $ratingText = $('#rating-text');
    const $comments = $('#comments');
    const $submitFeedback = $('#submit-feedback');

    // Add an event listener to each star element
    $stars.on('click', function() {
        // Get the rating value from the star element
        const rating = $(this).data('rating');

        // Remove the .selected class from all star elements
        $stars.removeClass('selected');

        // Add the .selected class to the selected star elements
        for (let i = 0; i < rating; i++) {
            $stars.eq(i).addClass('selected');
        }

        $ratingText.text(`You rated: ${rating} out of 5 stars`);

    });

    // Add an event listener to the submit feedback button
    $submitFeedback.on('click', function() {
        // Get the rating value from the rating text
        const rating = $ratingText.text().split(' ')[2];
  
        // Get the comments from the textarea
        const comments = $comments.val();
  
        // Submit the feedback (you can add your own logic here)
        alert(`Rating: ${rating} out of 5 stars and Comments submitted: ${comments}`);
  
        // Clear the comments textarea
        $comments.val('');

        // Clear the selected stars
        $stars.removeClass('selected');

        //Reset the rating text
        $ratingText.text('');

        // Redirect to index.html after successful submission
        window.location.href = 'index.html';
    });
});