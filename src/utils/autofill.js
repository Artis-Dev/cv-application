import uniqid from 'uniqid';

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
      id: uniqid(),
      title: 'Technical languages',
      skills: [
        {
          title: 'C/C++',
          id: uniqid(),
        },
        {
          title: 'Python',
          id: uniqid(),
        },
        {
          title: 'Assembly',
          id: uniqid(),
        },
      ],
    },
    {
      id: uniqid(),
      title: 'Tools & Software',
      skills: [
        {
          title: 'Git',
          id: uniqid(),
        },
        {
          title: 'GitHub',
          id: uniqid(),
        },
        {
          title: 'VSCode',
          id: uniqid(),
        },
      ],
    },
    {
      id: uniqid(),
      title: 'Languages',
      skills: [
        {
          title: 'English',
          id: uniqid(),
        },
        {
          title: 'Finnish',
          id: uniqid(),
        },
        {
          title: 'Swedish',
          id: uniqid(),
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
      id: uniqid(),
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
      id: uniqid(),
    },
  ],
};

export default autofillData;
