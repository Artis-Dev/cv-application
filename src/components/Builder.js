import React from 'react';
import uniqid from 'uniqid';

import Button from './UI/Button';
import Cv from './Cv/Cv';

class Builder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: true,
      cvData: {
        contacts: {
          mail: 'Enter your mail',
          phone: 'Enter your number',
          linkedin: '/in/username',
          github: '/username',
        },
        heading: {
          fullName: 'Enter full name',
          title: 'Enter title',
        },
        about: {
          summary: 'About you...',
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

  handleChange = (e) => {
    this.setState((prevState) => ({
      cvData: {
        ...prevState.cvData,
        contacts: {
          ...prevState.cvData.contacts,
          [e.target.getAttribute('data-key')]: e.target.value,
        },
        heading: {
          ...prevState.cvData.heading,
          [e.target.getAttribute('data-key')]: e.target.value,
        },
        about: {
          ...prevState.cvData.about,
          [e.target.getAttribute('data-key')]: e.target.value,
        },
      },
    }));
  };

  render() {
    const { cvData, editMode } = this.state;
    const { toggleMode, handleChange } = this;

    return (
      <main className="flex grow flex-col py-8 px-4">
        <div className="flex justify-center gap-8">
          <Button
            clickEvent={toggleMode}
            value={editMode ? 'Preview mode' : 'Edit mode'}
            size="big"
          />
        </div>
        <Cv cvData={cvData} editMode={editMode} handleChange={handleChange} />
      </main>
    );
  }
}

export default Builder;
