import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ExperienceForm from '../ExperienceForm';
import usePost from 'utils/postData';
import fetchData from 'utils/fetchData';
import api from 'API/api';

const UpdateExperience = () => {
  let experiences;
  let { company } = useParams();

  const [values, setSubmitValues] = useState({});
  const [bool, setIsSubmit] = useState(false);
  const getExperiences = fetchData(api.experience.getExperience, company);

  experiences = getExperiences.data ? getExperiences.data.listExperiences : {};
  const updateProject = usePost(api.experience.updateExperience, bool, {
    id: experiences && experiences.id,
    experience: values
  });

  const onSubmit = (values) => {
    const result = {
      year: values.year,
      date: values.date,
      fonction: values.fonction,
      company: values.company,
      link: values.link,
      list_experience: []
    };

    const ArrValues = Object.values(values);

    let j = -1;
    let k = 0;
    for (let i = 5; i < ArrValues.length; i++) {
      j += 1;
      k += 1;
      result.list_experience[j] = {
        description: ArrValues[i],
        id: k
      };
    }
    if (values) {
      setIsSubmit(true);
      setSubmitValues(result);
    }
  };

  return (
    <ExperienceForm
      title={'Experience à '}
      loading={updateProject.loading}
      initialState={experiences}
      onSubmit={onSubmit}
    />
  );
};
export default UpdateExperience;
