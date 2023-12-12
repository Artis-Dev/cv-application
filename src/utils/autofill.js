import { v4 as uuidv4 } from 'uuid';

const autofillData = {
  personal: {
    firstName: 'Linus',
    lastName: 'Torvalds',
    title: 'Software engineer',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus urna neque viverra justo nec ultrices dui sapien. Aliquam eleifend mi in nulla. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum.',
    email: 'torvalds@kernel.org',
    phone: '330-772-8692',
    linkedin: 'linustorvalds',
    github: 'torvalds',
  },
  skillsets: [
    {
      id: uuidv4(),
      title: 'Technical languages',
      skills: [
        {
          title: 'C/C++',
          id: uuidv4(),
        },
        {
          title: 'Python',
          id: uuidv4(),
        },
        {
          title: 'Assembly',
          id: uuidv4(),
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Tools & Software',
      skills: [
        {
          title: 'Git',
          id: uuidv4(),
        },
        {
          title: 'GitHub',
          id: uuidv4(),
        },
        {
          title: 'VSCode',
          id: uuidv4(),
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Languages',
      skills: [
        {
          title: 'English',
          id: uuidv4(),
        },
        {
          title: 'Finnish',
          id: uuidv4(),
        },
        {
          title: 'Swedish',
          id: uuidv4(),
        },
      ],
    },
  ],
  experience: [
    {
      position: 'Software engineer',
      company: 'Linux Foundation',
      from: '1991',
      to: 'Present',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor ex, lacinia eget ornare et, vehicula vitae diam. Aenean scelerisque. ',
      id: uuidv4(),
    },
  ],
  education: [
    {
      field: 'Computer Science',
      school: 'University of Helsinki',
      from: '1988',
      to: '1996',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor ex, lacinia eget ornare et, vehicula vitae diam. Aenean scelerisque. ',
      id: uuidv4(),
    },
  ],
};

export default autofillData;
