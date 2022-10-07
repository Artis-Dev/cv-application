import React from 'react';
import uniqid from 'uniqid';

import Button from './Button';
import Cv from './Cv';

class Builder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: true,
      cvData: {
        contacts: {
          mail: 'my@email.com',
          phone: '123456789',
          linkedin: '/in/username',
          github: '/username',
        },
        heading: {
          fullName: 'Name Surname',
          title: 'Title',
        },
        about: {
          summary: 'info info info info info info info',
        },
        skillsets: [
          {
            title: 'Technical languages',
            skills: ['JavaScript', 'CSS', 'HTML'],
            id: uniqid(),
          },
          {
            title: 'Tools & Software',
            skills: ['Git', 'GitHub', 'VSCode'],
            id: uniqid(),
          },
          {
            title: 'Additional',
            skills: ['Adobe Photoshop', 'Trello'],
            id: uniqid(),
          },
          {
            title: 'Languages',
            skills: ['English'],
            id: uniqid(),
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
          },
        ],
        education: [
          {
            field: 'Computer Science',
            school: 'Harvard University',
            from: '2016',
            to: '2020',
            description: 'info info info',
            id: uniqid(),
          },
        ],
      },
    };
  }

  toggleMode = () => {
    this.setState((prevState) => ({
      editMode: !prevState.editMode,
    }));
  };

  render() {
    const { cvData, editMode } = this.state;
    const { toggleMode } = this;

    return (
      <main className="flex grow flex-col py-8 px-4">
        <div className="flex justify-center gap-8">
          <Button toggleMode={toggleMode} editMode={editMode} />
        </div>
        <Cv cvData={cvData} editMode={editMode} />
      </main>
    );
  }
}

export default Builder;
