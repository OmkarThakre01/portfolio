import React from 'react';
import RecentPosts from '../RecentPosts/RecentPosts';

const posts = [
  {
    id: 1,
    title: 'Delicious Recipes to Try at Home',
    thumbnail: '/images/food-post.jpg',
    timestamp: 'Dec 20, 2024',
  },
  {
    id: 2,
    title: 'Top 10 Wildlife Photography Tips',
    thumbnail: '/images/animal-post.jpg',
    timestamp: 'Dec 18, 2024',
  },
];

const App = () => {
  return (
    <div>
      <RecentPosts postsData={posts} />
    </div>
  );
};

export default App;
