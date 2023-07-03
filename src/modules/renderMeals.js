import fetchPro from './fetchPro.js';

const mealContainer = document.querySelector('.meal-container');

const renderMeals = async () => {
  const { meals } = await fetchPro(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian',
  );
  mealContainer.innerHTML = '';

  meals.forEach((meal) => {
    /* eslint-disable */
    const mealCard = document.createElement('div');
    mealCard.classList.add('meal-card');
    const mealImage = document.createElement('img');
    mealImage.classList.add('meal-img');
    mealImage.src = `${meal.strMealThumb}`;
    const mealInfo = document.createElement('p');
    mealInfo.classList.add('space');
    mealInfo.textContent = `${meal.strMeal}`;
    const likeContainer = document.createElement('div');
    likeContainer.classList.add('like');
    const likeBtn = document.createElement('button');
    likeBtn.classList.add('like-btn');
    const heartIcon = document.createElement('i');
    heartIcon.className = 'fa-sharp fa-regular fa-heart fa-xl';
    likeBtn.appendChild(heartIcon);
    const likeInfo = document.createElement('div');
    likeInfo.classList.add('flex');
    const likeCount = document.createElement('p');
    likeCount.classList.add(`like-${meal.idMeal}`);
    const likeText = document.createElement('p');
    likeText.innerText = 'like';
    likeInfo.appendChild(likeCount);
    likeInfo.appendChild(likeText);
    likeContainer.appendChild(likeBtn);
    likeContainer.appendChild(likeInfo);
    const commentBtn = document.createElement('button');
    commentBtn.className = 'btn btn-comment';
    commentBtn.setAttribute('data-tap', `${meal.idMeal}`);
    commentBtn.textContent = 'Comment';
    mealCard.appendChild(mealImage);
    mealCard.appendChild(mealInfo);
    mealCard.appendChild(likeContainer);
    mealCard.appendChild(commentBtn);
    mealContainer.appendChild(mealCard);
    /* eslint-enable */
  });
};

export default renderMeals;
