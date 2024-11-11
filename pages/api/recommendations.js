// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'HTML',
    image: "images/html.png",
    designation: 'Projects | Advance Skills | HTML 5 | Best Practice',
    view:"I'm proficient in HTML, comfortable with structuring web pages using semantic elements like divs, headers, and sections. I'm adept at creating forms, tables, and integrating multimedia content. I'm also familiar with basic styling using CSS and understand the importance of accessibility in web development.",
    linkednURL: ""
  },
  {
    id: 1,
    name: 'Css',
    image: "images/css.png",
    designation: 'Tailwind | Advance Skills | HTML 3 | Best Practice',
    view:"I'm comfortable using CSS to style web pages, applying properties like colors, fonts, and layout to create visually appealing and user-friendly interfaces. I'm familiar with CSS frameworks like Bootstrap and Tailwind CSS, which streamline the styling process and help me create responsive designs that adapt to different screen sizes. I'm also learning about advanced CSS techniques like animations and transitions to enhance the user experience.",
    linkednURL: ""
  },
  {
    id: 2,
    name: 'TypeScript',
    image: "images/typescript.png",
    designation: 'logics | JavaScript | functions | loops | Api',
    view:"I'm proficient in TypeScript, a superset of JavaScript that adds static typing to enhance code maintainability and prevent errors. I'm comfortable working with interfaces, classes, generics, and other TypeScript features to build robust and scalable applications. I've used TypeScript extensively in React projects, leveraging its type safety to improve code quality and reduce bugs. I'm also familiar with TypeScript's integration with popular libraries and frameworks, making it a valuable tool for modern web development.",
    linkednURL: ""
  },
  {
    id: 3,
    name: 'Next js',
    image: "images/nextjs.png",
    designation: 'MERN Stack Developer at Productbox',
    view:"Proficient in building high-performance, scalable, and SEO-optimized web applications using Next.js, a cutting-edge React framework. Skilled in leveraging Next.js features such as server-side rendering, static site generation, and incremental static regeneration to deliver fast, responsive, and engaging user experiences. Well-versed in integrating Next.js with modern technologies like TypeScript, Tailwind CSS, and Sass, ensuring efficient development, seamless deployment, and top-notch web application quality."

,    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
