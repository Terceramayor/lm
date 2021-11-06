const ratingToColors = (usersAverageRating: number): string => {
  const greenCoponent = (255 * usersAverageRating) / 10;
  const redCoponent = (-usersAverageRating * 255 + 2550) / 10;

  return `rgb(${redCoponent},${greenCoponent},0)`;
};

export default ratingToColors;
