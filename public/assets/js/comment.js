const recipe_id = document.querySelector('input[name="recipe_id"]').value;

console.log(recipe_id);

const commentForm = async (event) => {
  event.preventDefault();

  const comment_text = document.querySelector('input[name="comment"]').value;
  console.log(comment_text);

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
