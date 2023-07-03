import fetchPro from './fetchPro.js';

const getLike = async () => {
  const likeData = await fetchPro(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hqiz5X9EpndT4RnMoRZ6/likes',
  );
  return likeData.slice(7);
};

export default getLike;
