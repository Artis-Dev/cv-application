import React from 'react';

import Button from './Button';
import Cv from './Cv';

class Builder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cvData: {
        contacts: {
          mail: 'my@email.com',
          phone: '123456789',
          linkedin: '/in/username',
          github: '/username',
          isEditable: false,
        },
        heading: {
          fullName: 'Name Surname',
          title: 'Title',
          isEditable: false,
        },
        about: {
          summary: 'info info info info info info info',
          isEditable: false,
        },
        skillsets: [
          {
            title: 'Technical languages',
            skills: ['JavaScript', 'CSS', 'HTML'],
          },
          {
            title: 'Tools & Software',
            skills: ['Git', 'GitHub', 'VSCode'],
          },
          {
            title: 'Additional',
            skills: ['Adobe Photoshop', 'Trello'],
          },
          {
            title: 'Languages',
            skills: ['English'],
          },
        ],
      },
    };
  }

  render() {
    const { cvData } = this.state;

    return (
      <main className="flex grow flex-col py-8 px-4">
        <Button />
        <Cv cvData={cvData} />
      </main>
    );
  }
}

export default Builder;
