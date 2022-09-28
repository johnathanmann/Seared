// Get recipe id from the handlebar rendered html
const recipe_id = document.querySelector('input[name="recipe_id"]').value;

const commentForm = async (event) => {
  event.preventDefault();
  // Get comment text
  const comment_text = document.querySelector('input[name="comment"]').value;
  // Post commen to database so we can show it on the site
  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        recipe_id,
        comment_text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log('Comment Posted');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('#comment_form').addEventListener('submit', commentForm);
