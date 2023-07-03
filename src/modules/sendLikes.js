import fetchPro from './fetchPro.js';

const sendLikes = async (data) => {
  fetchPro(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hqiz5X9EpndT4RnMoRZ6/likes',
    data,
  );
};

export default sendLikes;
