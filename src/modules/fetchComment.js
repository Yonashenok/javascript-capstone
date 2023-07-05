import fetchPro from './fetchPro.js';
import getComment from './getComments.js';

const url =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hqiz5X9EpndT4RnMoRZ6/comments/';

const display = async (comments, id) => {
  const commentData = await getComment(id);
  const listComments = commentData
    .map(
      (comment) => `<div class="list-items"> 
 ${comment.creation_date}  ${comment.username}: ${comment.comment}</div>`
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
