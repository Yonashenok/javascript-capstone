import fetchPro from './fetchPro';

const getComment = async (id) => {
  const commentData = await fetchPro(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hqiz5X9EpndT4RnMoRZ6/comments?item_id=${id}`
  );
  return commentData;
};

export default getComment;
