const model = document.querySelector('.model');

const renderPopComment = (data, id) => {
  const meals = data.filter((item) => item.idMeal === id);
  const markUp = meals
    .map(
      (meal) => `
        <div class="flex flex-col flex-center">
          <div>
            <img class="img-thumb" src="${meal.strMealThumb}" alt="" />
            </div>
                <div class="like flex-center">
                  <p class="space">${meal.strMeal}</p>
                </div>
              <section class="comment-section">
                <div class="comment-display">
                  <h2>comment</h2>
                  <div class="comment-container"></div>
                </div>
                <form class="comment-form flex flex-col" action="/">
                  <h2>Add a comment</h2>
                  <input class="comment-input" type="text" id="username" />
                  <textarea class="comment-textarea" cols="30" rows="5"></textarea>
                  <div class="btn-submit">
                    <button class="comment-btn">Comment</button>
                  </div>
                </form>
          </section>
      </div>
    `,
    )
    .join('');
  model.innerHTML = '';
  model.insertAdjacentHTML('afterbegin', markUp);
};

export default renderPopComment;
