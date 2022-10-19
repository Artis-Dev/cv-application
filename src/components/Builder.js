import React from 'react';
import uniqid from 'uniqid';

import autofillData from '../utils/autofill';
import resetData from '../utils/reset';
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
        skillsets: [],
        experience: [],
        education: [],
      },
      skillset: {
        id: uniqid(),
        title: '',
        skills: [],
      },
      skill: {
        title: '',
        id: uniqid(),
      },
      position: {
        position: '',
        company: '',
        from: '',
        to: '',
        description: '',
        id: uniqid(),
      },
      school: {
        field: '',
        school: '',
        from: '',
        to: '',
        description: '',
        id: uniqid(),
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
          if (
            skillset.id ===
            e.target.parentElement.getAttribute('data-skillset-id')
          ) {
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
            skillset.id ===
            e.target.parentElement.getAttribute('data-skillset-id')
          ) {
            return {
              ...skillset,
              skills: skillset.skills.map((skill) => {
                if (
                  skill.id ===
                  e.target.parentElement.getAttribute('data-skill-id')
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

  handleSkillsetDelete = (e) => {
    this.setState((prevState) => ({
      cvData: {
        ...prevState.cvData,
        skillsets: prevState.cvData.skillsets.filter((skillset) => {
          return (
            skillset.id !==
            e.target.parentElement.getAttribute('data-skillset-id')
          );
        }),
      },
    }));
  };

  handleSkillDelete = (e) => {
    this.setState((prevState) => ({
      cvData: {
        ...prevState.cvData,
        skillsets: prevState.cvData.skillsets.map((skillset) => {
          if (
            skillset.id ===
            e.target.parentElement.getAttribute('data-skillset-id')
          ) {
            return {
              ...skillset,
              skills: skillset.skills.filter((skill) => {
                return (
                  skill.id !==
                  e.target.parentElement.getAttribute('data-skill-id')
                );
              }),
            };
          }
          return skillset;
        }),
      },
    }));
  };

  handleSkillsetAdd = () => {
    this.setState((prevState) => ({
      cvData: {
        ...prevState.cvData,
        skillsets: prevState.cvData.skillsets.concat(prevState.skillset),
      },
      skillset: {
        id: uniqid(),
        title: '',
        skills: [],
      },
    }));
  };

  handleSkillAdd = (e) => {
    this.setState((prevState) => ({
      cvData: {
        ...prevState.cvData,
        skillsets: prevState.cvData.skillsets.map((skillset) => {
          if (
            skillset.id ===
            e.target.parentElement.getAttribute('data-skillset-id')
          ) {
            return {
              ...skillset,
              skills: skillset.skills.concat(prevState.skill),
            };
          }
          return skillset;
        }),
      },
      skill: {
        title: '',
        id: uniqid(),
      },
    }));
  };

  handleExperienceChange = (e) => {
    this.setState((prevState) => ({
      cvData: {
        ...prevState.cvData,
        experience: prevState.cvData.experience.map((position) => {
          if (
            position.id ===
            e.target.parentElement.getAttribute('data-position-id')
          ) {
            return {
              ...position,
              [e.target.getAttribute('id')]: e.target.value,
            };
          }
          return position;
        }),
      },
    }));
  };

  handleExperienceDelete = (e) => {
    this.setState((prevState) => ({
      cvData: {
        ...prevState.cvData,
        experience: prevState.cvData.experience.filter((position) => {
          return (
            position.id !==
            e.target.parentElement.getAttribute('data-position-id')
          );
        }),
      },
    }));
  };

  handleExperienceAdd = () => {
    this.setState((prevState) => ({
      cvData: {
        ...prevState.cvData,
        experience: prevState.cvData.experience.concat(prevState.position),
      },
      position: {
        position: '',
        company: '',
        from: '',
        to: '',
        description: '',
        id: uniqid(),
      },
    }));
  };

  handleEducationChange = (e) => {
    this.setState((prevState) => ({
      cvData: {
        ...prevState.cvData,
        education: prevState.cvData.education.map((school) => {
          if (
            school.id === e.target.parentElement.getAttribute('data-school-id')
          ) {
            return {
              ...school,
              [e.target.getAttribute('id')]: e.target.value,
            };
          }
          return school;
        }),
      },
    }));
  };

  handleEducationDelete = (e) => {
    this.setState((prevState) => ({
      cvData: {
        ...prevState.cvData,
        education: prevState.cvData.education.filter((school) => {
          return (
            school.id !== e.target.parentElement.getAttribute('data-school-id')
          );
        }),
      },
    }));
  };

  handleEducationAdd = () => {
    this.setState((prevState) => ({
      cvData: {
        ...prevState.cvData,
        education: prevState.cvData.education.concat(prevState.school),
      },
      school: {
        field: '',
        school: '',
        from: '',
        to: '',
        description: '',
        id: uniqid(),
      },
    }));
  };

  handleAutofill = () => {
    this.setState({
      cvData: autofillData,
    });
  };

  handleReset = () => {
    this.setState({
      cvData: resetData,
    });
  };

  render() {
    const { cvData, editMode } = this.state;
    const {
      toggleMode,
      handlePersonalChange,
      handleSkillsetChange,
      handleSkillChange,
      handleSkillsetDelete,
      handleSkillDelete,
      handleSkillsetAdd,
      handleSkillAdd,
      handleExperienceChange,
      handleExperienceDelete,
      handleExperienceAdd,
      handleEducationChange,
      handleEducationDelete,
      handleEducationAdd,
      handleAutofill,
      handleReset,
    } = this;

    return (
      <main className="flex grow flex-col py-8 px-4">
        <div className="flex justify-center gap-8">
          <Button
            handleClick={toggleMode}
            value={editMode ? 'Preview mode' : 'Edit mode'}
          />
          {editMode ? (
            <>
              <Button handleClick={handleAutofill} value="Autofill" />
              <Button handleClick={handleReset} value="Reset" />
            </>
          ) : null}
        </div>
        <Cv
          cvData={cvData}
          editMode={editMode}
          handlePersonalChange={handlePersonalChange}
          handleSkillsetChange={handleSkillsetChange}
          handleSkillChange={handleSkillChange}
          handleSkillsetDelete={handleSkillsetDelete}
          handleSkillDelete={handleSkillDelete}
          handleSkillsetAdd={handleSkillsetAdd}
          handleSkillAdd={handleSkillAdd}
          handleExperienceChange={handleExperienceChange}
          handleExperienceDelete={handleExperienceDelete}
          handleExperienceAdd={handleExperienceAdd}
          handleEducationChange={handleEducationChange}
          handleEducationDelete={handleEducationDelete}
          handleEducationAdd={handleEducationAdd}
        />
      </main>
    );
  }
}

export default Builder;
