import { getImageUrl } from '../utils/helpers';
import { ProjectTypes } from '../types';

export const cardinfo = {
    webDevUrls: [
        {
            id: 'cryptonite',
            url: getImageUrl('cryptonite.png'),
            title: 'Cryptonite',
            description: 'A modern encryption/decryption tool built with React. Features multiple encryption algorithms and a sleek user interface.',
            github: 'https://github.com/amitgupta-exe/cryptonite',
            website: 'https://amitgupta-exe.github.io/cryptonite/',
            target: '_blank',
            type: ProjectTypes.WEB_DEV,
            technologies: ['React', 'JavaScript', 'CSS3', 'Cryptography'],
            featured: true,
            createdDate: '2023-08-15'
        },
        {
            id: 'loremipsum',
            url: getImageUrl('loremipsum.png'),
            title: 'LoremIpsum Generator',
            description: 'An advanced Lorem Ipsum generator with multiple typefaces and customization options. Powered by React and NLTK.',
            github: 'https://github.com/amitgupta-exe/loremipsum',
            website: 'https://amitgupta-exe.github.io/loremipsum/',
            target: '_blank',
            type: ProjectTypes.WEB_DEV,
            technologies: ['React', 'NLTK', 'Python', 'JavaScript'],
            featured: false,
            createdDate: '2023-09-20'
        },
    ],

    mlAiUrls: [
        {
            id: 'aimldl',
            url: getImageUrl('aimldl.webp'),
            title: 'AI, ML, DL Portfolio',
            description: 'A comprehensive collection of machine learning and deep learning projects showcasing various algorithms and applications.',
            github: 'https://github.com/amitgupta-exe/ml-projects',
            website: '/aimldl',
            type: ProjectTypes.ML_AI,
            technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
            featured: true,
            createdDate: '2023-07-10'
        },
        {
            id: 'eda',
            url: getImageUrl('eda.webp'),
            title: 'Exploratory Data Analysis',
            description: 'In-depth exploratory data analysis on various real-world datasets with interactive visualizations and insights.',
            github: 'https://github.com/amitgupta-exe/eda-projects',
            website: '/eda',
            type: ProjectTypes.EDA,
            technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly'],
            featured: true,
            createdDate: '2023-06-05'
        },
        {
            id: 'federated-learning',
            url: getImageUrl('fedbt.webp'),
            title: 'Federated Learning for Brain Tumor Classification',
            description: 'Implementation of federated learning techniques to improve privacy of sensitive medical data while training CNN models for brain tumor classification.',
            github: 'https://github.com/amitgupta-exe/federated-brain-tumor',
            website: 'https://yourwebsite.com/project2',
            target: '_blank',
            type: ProjectTypes.ML_AI,
            technologies: ['Python', 'TensorFlow', 'Federated Learning', 'CNN', 'Medical Imaging'],
            featured: true,
            createdDate: '2023-10-12'
        },
    ],

    gameDevUrls: [
        {
            id: 'snake-game',
            url: getImageUrl('snake.jpg'),
            title: 'Snake Game',
            description: 'Classic Snake game reimagined with modern graphics and smooth gameplay using p5.js framework.',
            github: 'https://github.com/amitgupta-exe/snakegamep5',
            website: 'https://amitgupta-exe.github.io/snake-game-p5',
            target: '_blank',
            type: ProjectTypes.GAME_DEV,
            technologies: ['p5.js', 'JavaScript', 'HTML5 Canvas'],
            featured: false,
            createdDate: '2023-05-20'
        },
        {
            id: 'sierpinski-triangle',
            url: getImageUrl('sierpinskitriangle.png'),
            title: 'Sierpinski Triangle Visualization',
            description: 'Interactive visualization of the Sierpinski gasket fractal with real-time generation and customizable parameters.',
            github: 'https://github.com/amitgupta-exe/sierpinski',
            website: 'https://amitgupta-exe.github.io/sierpinski/',
            target: '_blank',
            type: ProjectTypes.GAME_DEV,
            technologies: ['p5.js', 'JavaScript', 'Mathematical Visualization'],
            featured: true,
            createdDate: '2023-04-18'
        },
        {
            id: 'flappy-bird',
            url: getImageUrl('flappybird.png'),
            title: 'Flappy Bird Clone',
            description: 'A faithful recreation of the popular Flappy Bird game with enhanced graphics and smooth physics.',
            github: 'https://github.com/amitgupta-exe/flappy-bird-p5',
            website: 'https://amitgupta-exe.github.io/flappy-bird-p5/',
            target: '_blank',
            type: ProjectTypes.GAME_DEV,
            technologies: ['p5.js', 'JavaScript', 'Game Physics'],
            featured: false,
            createdDate: '2023-03-25'
        },
    ],
}







