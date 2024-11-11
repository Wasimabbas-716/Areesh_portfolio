const expertise = [
    {
        id: 0,
        title: 'Web designing',
        desc: 'Highly skilled and accomplished web designer with extensive experience in crafting visually stunning, user-friendly, and responsive digital experiences. Proficient in leveraging cutting-edge design tools like Adobe Creative Cloud, Figma, and Sketch to bring innovative ideas to life. Well-versed in designing scalable, accessible, and SEO-optimized websites that captivate audiences and drive engagement. Expertise includes',
    },
    {
        id: 1,
        title: 'Graphic Designing',
        desc: "Creative and accomplished graphic designer with a strong portfolio showcasing expertise in visual communication, brand identity, and digital media. Proficient in leveraging industry-leading design software like Adobe Creative Cloud, specifically Photoshop, Illustrator, and InDesign. Skilled in crafting captivating visual stories through",
    },
    {
        id: 2,
        title: 'Designing (UI/UX)',
    desc: "UI/UX designers are responsible for creating a user-friendly and intuitive interface for digital products. They work closely with developers to ensure that the designs are easy to understand, use, and navigate. I specialize in creating visually appealing, intuitive, and engaging user interfaces for web and mobile applications.",},
    {
        id: 3,
        title: 'Frontend',
        desc: "I am a skilled and experienced frontend developer with a strong background in JavaScript, HTML, and CSS. I am capable of building user-friendly and interactive web applications, and I am always eager to learn and improve my skills.",

    },
    {
        id: 4,
        title: 'Responsive design',
        desc: "I am proficient in creating responsive web designs that work across various devices and screen sizes. I am capable of designing websites that are easy to navigate and engage with, and I am always looking for ways to improve the user experience.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
