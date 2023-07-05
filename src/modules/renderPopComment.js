import { display, addComment } from './fetchComment.js';

const model = document.querySelector('.model');

const renderPopComment = (data, id) => {
  const meals = data.filter((item) => item.idMeal === id);
  const markUp = meals
    .map(
      (meal) => `
      
        <div class="flex flex-col flex-center">
        <div class="like flex-center">
                  <p class="space">${meal.strMeal}</p>
                </div>
          <div>
            <img class="img-thumb" src="${meal.strMealThumb}" alt="" />
            </div>
                
              <section class="comment-section">
                <div class="comment-display">
                  <h2>Comments</h2>
                  <div class="comment-container" id="comment-container"></div>
                </div>
                <form class="comment-form flex flex-col" id="submit-com" action="/">
                  <h2>Add a comment</h2>
                  <input class="comment-input" type="text" id="name" placeholder="Your name" id="username" />
                  <textarea class="comment-textarea" id="comment" placeholder="Your comment" cols="30" rows="5"></textarea>
                  <div class="btn-submit">
                    <button class="comment-btn" type="submit">Comment</button>
                  </div>
                </form>
          </section>
      </div>
    `
    )
    .join('');
  model.innerHTML = '';
  model.insertAdjacentHTML('afterbegin', markUp);

  const comments = document.getElementById('comment-container');
  const submitCom = document.getElementById('submit-com');
  display(comments, id);
  submitCom.addEventListener('submit', (e) => {
    e.preventDefault();
    addComment(e, id);
    setTimeout(() => {
      display(comments, id);
    }, 1000);
  });
};

export default renderPopComment;
