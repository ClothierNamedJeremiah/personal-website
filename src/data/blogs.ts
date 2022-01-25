export type BlogType = {
  title: string;
  shortDescription: string;
  datePublished: string;
  estimatedTimeToRead: string;
  blogPostUrl: string;
};

const BLOGS: BlogType[] = [
  {
    title: 'Polymorphic Components with React & Typescript',
    shortDescription:
      'Learn what Polymorphic Components are and how to properly type annotate them with Typescript.',
    datePublished: '01-16-2022',
    estimatedTimeToRead: '5 min read',
    blogPostUrl:
      'https://clothiernamedjeremiah.medium.com/polymorphic-components-in-react-typescript-25f70edd2870?sk=176db3ba3444b79b816570d1ebb8e1fe',
  },
  {
    title: '8 Flexbox Layouts You Should Know',
    shortDescription:
      'Modern CSS layouts commonly used to built UI components.',
    datePublished: '09-13-2021',
    estimatedTimeToRead: '5 min read',
    blogPostUrl:
      'https://clothiernamedjeremiah.medium.com/8-flexbox-layouts-you-should-know-d83635e0d47f?sk=66ed418baacc476f34be2988b8515a6c',
  },
  {
    title: 'How to easily hide a HTML element',
    shortDescription:
      'There are three easy ways to hide an element using CSS; each of them a little different than the other.',
    datePublished: '05-29-2021',
    estimatedTimeToRead: '3 min read',
    blogPostUrl:
      'https://clothiernamedjeremiah.medium.com/how-to-easily-hide-an-html-element-9105aee25612?sk=fe6471df1d95b1bad809c3251ac170a9',
  },
  {
    title: 'A simple solution to optimize React re-renders',
    shortDescription:
      'Without using: React.memo, useMemo, PureComponent, or shouldComponentUpdate.',
    datePublished: '05-05-2021',
    estimatedTimeToRead: '5 min read',
    blogPostUrl:
      'https://clothiernamedjeremiah.medium.com/a-simple-solution-to-optimize-react-re-renders-3fce6713ccc8?sk=86e936de9fb90f62912c7f20ed2d7231',
  },
  {
    title: "Understanding the CSS 'position' property",
    shortDescription:
      'Learn the difference between: static, relative, absolute, sticky, and fixed positioning.',
    datePublished: '04-21-2021',
    estimatedTimeToRead: '5 min read',
    blogPostUrl:
      'https://clothiernamedjeremiah.medium.com/how-to-position-html-elements-properly-using-css-3fc559f6e5ff',
  },
  {
    title: 'Creating a react application from scratch',
    shortDescription:
      'Learn how to create your own react application with Babel, Webpack, and Hot Module Replacement.',
    datePublished: '04-05-2021',
    estimatedTimeToRead: '7 min read',
    blogPostUrl:
      'https://clothiernamedjeremiah.medium.com/creating-a-react-app-scratch-a5d5ef8ff2bc',
  },
];

const getBlogPosts = () => ({
  blogs: BLOGS,
});

export default getBlogPosts;
