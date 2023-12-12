import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import autofillData from '../utils/autofill';
import emptyData from '../utils/emptyCv';
import Button from './ui/Button';
import Cv from './cv/Cv';

function Builder() {
  const [editMode, setEditMode] = useState(true);
  const [cvData, setCvData] = useState(emptyData);
  const [skillset, setSkillset] = useState({
    id: uuidv4(),
    title: '',
    skills: [],
  });
  const [skill, setSkill] = useState({
    title: '',
    id: uuidv4(),
  });
  const [position, setPosition] = useState({
    position: '',
    company: '',
    from: '',
    to: '',
    description: '',
    id: uuidv4(),
  });
  const [school, setSchool] = useState({
    field: '',
    school: '',
    from: '',
    to: '',
    description: '',
    id: uuidv4(),
  });

  const toggleMode = () => {
    setEditMode(!editMode);
  };

  const handlePersonalChange = (e) => {
    setCvData((prevState) => ({
      ...prevState,
      personal: {
        ...prevState.personal,
        [e.target.getAttribute('id')]: e.target.value,
      },
    }));
  };

  const handleSkillsetAdd = () => {
    setCvData((prevState) => ({
      ...prevState,
      skillsets: prevState.skillsets.concat(skillset),
    }));
    setSkillset({
      id: uuidv4(),
      title: '',
      skills: [],
    });
  };

  const handleSkillsetChange = (e) => {
    setCvData((prevState) => ({
      ...prevState,
      skillsets: prevState.skillsets.map((skillsetsItem) => {
        if (
          skillsetsItem.id ===
          e.target.parentElement.getAttribute('data-skillset-id')
        ) {
          return {
            ...skillsetsItem,
            title: e.target.value,
          };
        }
        return skillsetsItem;
      }),
    }));
  };

  const handleSkillsetDelete = (e) => {
    setCvData((prevState) => ({
      ...prevState,
      skillsets: prevState.skillsets.filter(
        (skillsetsItem) =>
          skillsetsItem.id !==
          e.target.parentElement.getAttribute('data-skillset-id'),
      ),
    }));
  };

  const handleSkillAdd = (e) => {
    setCvData((prevState) => ({
      ...prevState,
      skillsets: prevState.skillsets.map((skillsetsItem) => {
        if (
          skillsetsItem.id ===
          e.target.parentElement.getAttribute('data-skillset-id')
        ) {
          return {
            ...skillsetsItem,
            skills: skillsetsItem.skills.concat(skill),
          };
        }
        return skillsetsItem;
      }),
    }));
    setSkill({
      title: '',
      id: uuidv4(),
    });
  };

  const handleSkillChange = (e) => {
    setCvData((prevState) => ({
      ...prevState,
      skillsets: prevState.skillsets.map((skillsetsItem) => {
        if (
          skillsetsItem.id ===
          e.target.parentElement.getAttribute('data-skillset-id')
        ) {
          return {
            ...skillsetsItem,
            skills: skillsetsItem.skills.map((skillsItem) => {
              if (
                skillsItem.id ===
                e.target.parentElement.getAttribute('data-skill-id')
              ) {
                return {
                  ...skillsItem,
                  title: e.target.value,
                };
              }
              return skillsItem;
            }),
          };
        }
        return skillsetsItem;
      }),
    }));
  };

  const handleSkillDelete = (e) => {
    setCvData((prevState) => ({
      ...prevState,
      skillsets: prevState.skillsets.map((skillsetsItem) => {
        if (
          skillsetsItem.id ===
          e.target.parentElement.getAttribute('data-skillset-id')
        ) {
          return {
            ...skillsetsItem,
            skills: skillsetsItem.skills.filter(
              (skillsItem) =>
                skillsItem.id !==
                e.target.parentElement.getAttribute('data-skill-id'),
            ),
          };
        }
        return skillsetsItem;
      }),
    }));
  };

  const handleExperienceAdd = () => {
    setCvData((prevState) => ({
      ...prevState,
      experience: prevState.experience.concat(position),
    }));
    setPosition({
      position: '',
      company: '',
      from: '',
      to: '',
      description: '',
      id: uuidv4(),
    });
  };

  const handleExperienceChange = (e) => {
    setCvData((prevState) => ({
      ...prevState,
      experience: prevState.experience.map((positionsItem) => {
        if (
          positionsItem.id ===
          e.target.parentElement.getAttribute('data-position-id')
        ) {
          return {
            ...positionsItem,
            [e.target.getAttribute('id')]: e.target.value,
          };
        }
        return positionsItem;
      }),
    }));
  };

  const handleExperienceDelete = (e) => {
    setCvData((prevState) => ({
      ...prevState,
      experience: prevState.experience.filter(
        (positionsItem) =>
          positionsItem.id !==
          e.target.parentElement.getAttribute('data-position-id'),
      ),
    }));
  };

  const handleEducationAdd = () => {
    setCvData((prevState) => ({
      ...prevState,
      education: prevState.education.concat(school),
    }));
    setSchool({
      field: '',
      school: '',
      from: '',
      to: '',
      description: '',
      id: uuidv4(),
    });
  };

  const handleEducationChange = (e) => {
    setCvData((prevState) => ({
      ...prevState,
      education: prevState.education.map((schoolsItem) => {
        if (
          schoolsItem.id ===
          e.target.parentElement.getAttribute('data-school-id')
        ) {
          return {
            ...schoolsItem,
            [e.target.getAttribute('id')]: e.target.value,
          };
        }
        return schoolsItem;
      }),
    }));
  };

  const handleEducationDelete = (e) => {
    setCvData((prevState) => ({
      ...prevState,
      education: prevState.education.filter(
        (schoolsItem) =>
          schoolsItem.id !==
          e.target.parentElement.getAttribute('data-school-id'),
      ),
    }));
  };

  const handleAutofill = () => {
    setCvData(autofillData);
  };

  const handleReset = () => {
    setCvData(emptyData);
  };

  return (
    <main className="flex grow flex-col px-4 py-8">
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
        handleSkillsetAdd={handleSkillsetAdd}
        handleSkillsetChange={handleSkillsetChange}
        handleSkillsetDelete={handleSkillsetDelete}
        handleSkillAdd={handleSkillAdd}
        handleSkillChange={handleSkillChange}
        handleSkillDelete={handleSkillDelete}
        handleExperienceAdd={handleExperienceAdd}
        handleExperienceChange={handleExperienceChange}
        handleExperienceDelete={handleExperienceDelete}
        handleEducationAdd={handleEducationAdd}
        handleEducationChange={handleEducationChange}
        handleEducationDelete={handleEducationDelete}
      />
    </main>
  );
}

export default Builder;
