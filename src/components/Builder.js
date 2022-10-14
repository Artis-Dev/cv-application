import React from 'react';
import uniqid from 'uniqid';

import Button from './ui/Button';
import Cv from './cv/Cv';

class Builder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: true,
      cvData: {
        personal: {
          firstName: '',
          lastName: '',
          title: '',
          summary: '',
          email: '',
          phone: '',
          linkedin: '',
          github: '',
        },
        skillsets: [
          {
            id: uniqid(),
            title: 'Technical languages',
            skills: [
              {
                title: 'JavaScript',
                id: uniqid(),
              },
              {
                title: 'CSS',
                id: uniqid(),
              },
              {
                title: 'HTML',
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

  handlePersonalChange = (e) => {
    this.setState((prevState) => ({
      cvData: {
        ...prevState.cvData,
        personal: {
          ...prevState.cvData.personal,
          [e.target.getAttribute('id')]: e.target.value,
        },
      },
    }));
  };

  handleSkillsetChange = (e) => {
    this.setState((prevState) => ({
      cvData: {
        ...prevState.cvData,
        skillsets: prevState.cvData.skillsets.map((skillset) => {
          if (skillset.id === e.target.parentElement.getAttribute('data-key')) {
            return {
              ...skillset,
              title: e.target.value,
            };
          }
          return skillset;
        }),
      },
    }));
  };

  handleSkillChange = (e) => {
    this.setState((prevState) => ({
      cvData: {
        ...prevState.cvData,
        skillsets: prevState.cvData.skillsets.map((skillset) => {
          if (
            skillset.id === e.target.parentElement.getAttribute('data-skillset')
          ) {
            return {
              ...skillset,
              skills: skillset.skills.map((skill) => {
                if (
                  skill.id === e.target.parentElement.getAttribute('data-skill')
                ) {
                  return {
                    ...skill,
                    title: e.target.value,
                  };
                }
                return skill;
              }),
            };
          }
          return skillset;
        }),
      },
    }));
  };

  render() {
    const { cvData, editMode } = this.state;
    const {
      toggleMode,
      handlePersonalChange,
      handleSkillsetChange,
      handleSkillChange,
    } = this;

    return (
      <main className="flex grow flex-col py-8 px-4">
        <div className="flex justify-center gap-8">
          <Button
            clickEvent={toggleMode}
            value={editMode ? 'Preview mode' : 'Edit mode'}
            size="big"
          />
        </div>
        <Cv
          cvData={cvData}
          editMode={editMode}
          handlePersonalChange={handlePersonalChange}
          handleSkillsetChange={handleSkillsetChange}
          handleSkillChange={handleSkillChange}
        />
      </main>
    );
  }
}

export default Builder;
