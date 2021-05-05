const BLOGS = [
  // {
  //   title: 'A simple solution to optimize React re-renders',
  //   shortDescription: 'Without using React.memo, PureComponent, or shouldComponentUpdate.',
  //   datePublished: 'May 5, 2021',
  //   estimatedTimeToRead: '5 min read',
  //   blogPostUrl: 'https://clothiernamedjeremiah.medium.com/how-to-position-html-elements-properly-using-css-3fc559f6e5ff',
  // },
  {
    title: "Understanding the CSS 'position' property",
    shortDescription: 'Learn the difference between: static, relative, absolute, sticky, and fixed positioning.',
    datePublished: 'March 21, 2021',
    estimatedTimeToRead: '5 min read',
    blogPostUrl: 'https://clothiernamedjeremiah.medium.com/how-to-position-html-elements-properly-using-css-3fc559f6e5ff',
  },
  {
    title: 'Creating a React Application from Scratch (2021)',
    shortDescription: 'Learn how to create your own react application with Babel, Webpack, and Hot Module Replacement.',
    datePublished: 'March 5, 2021',
    estimatedTimeToRead: '7 min read',
    blogPostUrl: 'https://clothiernamedjeremiah.medium.com/creating-a-react-app-scratch-a5d5ef8ff2bc',
  },
];

const getBlogPosts = () => ({
  blogs: BLOGS,
});

export default getBlogPosts;
