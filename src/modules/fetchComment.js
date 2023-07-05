import fetchPro from './fetchPro.js';
import getComment from './getComments.js';
import counterHomepage from './counterHomepage.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hqiz5X9EpndT4RnMoRZ6/comments/';

const display = async (comments, id, commentCounter) => {
  const commentData = await getComment(id);
  commentCounter.textContent = `(${counterHomepage(commentData)})`;
  const listComments = commentData
    .map(
      (comment) => `<div class="list-items"> 
 ${comment.creation_date}  ${comment.username}: ${comment.comment}</div>`,
    )
    .join('');
  comments.innerHTML = '';
  comments.insertAdjacentHTML('afterbegin', listComments);
};

const addComment = async (e, id) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;
  const data = {
    item_id: `${id}`,
    username: name,
    comment,
  };
  fetchPro(url, data);
  document.getElementById('name').value = '';
  document.getElementById('comment').value = '';
};

export { addComment, display };
