import React from 'react';
import uniqid from 'uniqid';

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
            id: uniqid(),
            isEditable: false,
          },
          {
            title: 'Tools & Software',
            skills: ['Git', 'GitHub', 'VSCode'],
            id: uniqid(),
            isEditable: false,
          },
          {
            title: 'Additional',
            skills: ['Adobe Photoshop', 'Trello'],
            id: uniqid(),
            isEditable: false,
          },
          {
            title: 'Languages',
            skills: ['English'],
            id: uniqid(),
            isEditable: false,
          },
        ],
        experience: [
          {
            position: 'Frontend Developer',
            company: 'Google',
            from: '2020',
            to: '2022',
            description: 'info info info',
            id: uniqid(),
            isEditable: false,
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
