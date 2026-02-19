export type BlogType = {
  title: string;
  shortDescription: string;
  datePublished: string;
  estimatedTimeToRead: string;
  blogPostUrl: string;
};

const BLOGS: BlogType[] = [
  {
    title: 'What I\'m Reading — Episode 01',
    shortDescription:
      'A mix of things I read lately — some practical, some just interesting. Covers accessibility, career growth, and a few web development resources worth bookmarking.',
    datePublished: '02-18-2026',
    estimatedTimeToRead: '10 min read',
    blogPostUrl:
      'https://clothiernamedjeremiah.medium.com/what-im-reading-part-01-cc922406a0f0?source=friends_link&sk=d794b7712343ef871790cd9b6b3907d4',
  },
  {
    title: 'Creating <tables> with sticky rows and columns',
    shortDescription:
      'A tutorial for how to create a <table> that supports sticky rows and columns. The bare minimum HTML & CSS needed to such a design. A great reference point that can be expanded and styled as needed.',
    datePublished: '04-25-2024',
    estimatedTimeToRead: '8 min read',
    blogPostUrl:
      'https://clothiernamedjeremiah.medium.com/deep-dive-tables-with-sticky-headers-and-columns-9cbbeb286e73?source=friends_link&sk=ae0c6924dd64c145468306bcf2d68c3c',
  },
  {
    title: 'Deep Dive: Frontend Performance Issues Across Our Web Apps',
    shortDescription:
      "A journey of Remix the full-stack web framework, a problem we faced and how we solved it using Remix's flexible solutions & native Fetch API",
    datePublished: '05-17-2023',
    estimatedTimeToRead: '10 min read',
    blogPostUrl:
      'https://medium.com/czi-technology/how-we-significantly-improved-frontend-performance-in-our-remix-app-16f845f3b297',
  },
  {
    title: 'Reflecting on a failed goal in 2022',
    shortDescription:
      "I set an amibitious goal in 2022... and it didn't work out so well. But I reflected on it, learned from it, and set some new goals for the upcoming year which were more exciting and enjoyable.",
    datePublished: '12-24-2022',
    estimatedTimeToRead: '3 min read',
    blogPostUrl:
      'https://clothiernamedjeremiah.medium.com/reflecting-on-a-failed-goal-in-2022-f6e5129e850d',
  },
  {
    title: 'Save over $1,000 on your groceries with 1 line of code',
    shortDescription:
      "Do you shop at Safeway and want to save money on groceries? This blog has everything you need to know and describes how I automated the coupon clipping process on Safeway's website to save money while shopping.",
    datePublished: '06-15-2022',
    estimatedTimeToRead: '3 min read',
    blogPostUrl:
      'https://clothiernamedjeremiah.medium.com/saving-over-1-000-on-groceries-with-1-line-of-code-25d6cf15e389',
  },
  {
    title: 'Use the newest libraries and automatically update your dependencies',
    shortDescription:
      'Whether it’s a personal project or your companies’ code base, updating dependencies and keeping versions up-to-date can be tedious. Save yourself, your team, and other developers time by automating the whole process!',
    datePublished: '05-15-2022',
    estimatedTimeToRead: '7 min read',
    blogPostUrl:
      'https://clothiernamedjeremiah.medium.com/use-the-newest-libraries-and-update-your-dependencies-automatically-a7dac272ed44',
  },
  {
    title: 'TypeScript Tip 02: Three Different Ways to Annotate Event Handlers',
    shortDescription:
      "When it comes to annotating event handlers, you have several different options. I'll explore three different approaches you can use.",
    datePublished: '04-30-2022',
    estimatedTimeToRead: '5 min read',
    blogPostUrl:
      'https://clothiernamedjeremiah.medium.com/typescript-tip-02-three-different-ways-to-annotate-event-handlers-226a72fb412c',
  },
  {
    title: 'Typescript Tip 01: Using the “in” Keyword to Deal with Multiple Types',
    shortDescription:
      'Today we’re talking about Type Narrowing — special checks and assignments that allow typescript to infer more specific types than declared — and how you can use the in keyword to distinguish between several types.',
    datePublished: '04-14-2022',
    estimatedTimeToRead: '5 min read',
    blogPostUrl:
      'https://clothiernamedjeremiah.medium.com/typescript-tip-using-the-in-keyword-to-deal-with-multiple-types-a47aa3557610',
  },
  {
    title: 'Learn CSS Selectors While Preparing Bento Boxes',
    shortDescription:
      'Hands-on learning is a form of education in which students learn by doing. Specifically, hands-on learning allows students to learn through experiencing something and can give them an opportunity to immerse themselves in a learning environment, while putting their acquired skills to use and building new skills.',
    datePublished: '03-14-2022',
    estimatedTimeToRead: '5 min read',
    blogPostUrl:
      'https://clothiernamedjeremiah.medium.com/learn-css-selectors-while-preparing-bento-boxes-1cb57350b8a2',
  },
  {
    title: 'Practical Pair Programming',
    shortDescription:
      'Two heads are generally better than one. Collaboration leads to more thoughtful designs for users. Fewer errors and bugs reach production. And you often end up with a better implementation that more than 1 person understands. If pair programming has so many potential benefits, why don’t we see more developers taking advantage of it?',
    datePublished: '02-28-2022',
    estimatedTimeToRead: '5 min read',
    blogPostUrl: 'https://clothiernamedjeremiah.medium.com/practical-pair-programming-4982a2aa757b',
  },
  {
    title: 'CSS Concepts to Know: Specificity',
    shortDescription: 'Everything you need to know about Specificity in CSS',
    datePublished: '02-14-2022',
    estimatedTimeToRead: '4 min read',
    blogPostUrl:
      'https://clothiernamedjeremiah.medium.com/css-concepts-to-know-specificity-d97ec638d398',
  },
  {
    title: "Using React's Context API to Simplify Components",
    shortDescription:
      "In this article I'll demonstrate rendering a list of items (<Radio />) and how we can useContext() to simplify the props we are required to pass to a <Radio /> component.",
    datePublished: '01-31-2022',
    estimatedTimeToRead: '4 min read',
    blogPostUrl:
      'https://clothiernamedjeremiah.medium.com/using-reacts-context-api-to-simply-components-84d4cf72112a',
  },
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
    shortDescription: 'Modern CSS layouts commonly used to built UI components.',
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

export const NUMBER_OF_BLOGS = BLOGS.length;

export default getBlogPosts;
