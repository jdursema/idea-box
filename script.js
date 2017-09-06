
$('.save-button').on('click', function(event){
	event.preventDefault();
	var ideaTitle = $('#title-input').val();
	var ideaBody = $('#body-input').val();
	newCard(ideaTitle, ideaBody); 
});

function newCard(title, body) {
	$(".idea-box").prepend( `
		<article class="idea-card">
			<h3 class="idea-title">${title}<input type="image" src="images/delete.svg" class="card-button" id="delete-button" alt="idea delete button"></h3>
			<p class="idea-body">
				${body}
			</p>
			<p class="quality"><input type="image" alt="idea up vote button" src="images/upvote.svg" class="card-button">
			<input type="image" id="down-vote-button" alt="idea down vote button" src="images/downvote.svg" class="card-button">quality: <span class="idea-rank">swill</span></p>
		</article>
		`
	);
	lowerQuality();
}
//Delete Button Function
$('.bottom-section').on('click', '#delete-button', function(){
	$(this).closest('article').remove();
});

//Local Storage

// localStorage.setItem('ID Local Storage Knows', myObject);
// Date.now()
// localStorage.getItem(myObject.id)
// v

function lowerQuality() {
	var downVoteButton = $('#down-vote-button').on('click', function() {
		$('.idea-rank').text('booty');
	})
} 