export const saveLikesToStorage = (likes: number[]) => {
  localStorage.setItem('likes', JSON.stringify(likes));
};

export const getLikesFromStorage = () => {
  const likesInStorage = localStorage.getItem('likes');
  return likesInStorage ? JSON.parse(likesInStorage) : [];
};
