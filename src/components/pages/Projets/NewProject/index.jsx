import React, { useState } from 'react';
import ProjectForm from '../ProjectForm';
import api from 'API/api';
import usePost from 'utils/postData';
const NewProject = () => {
  const [form, setState] = useState({
    title: null,
    description: null,
    techno: null,
    link: null,
    img: null
  });

  const [values, setSubmitValues] = useState(null);
  const [bool, setIsSubmit] = useState(false);
  const createProject = usePost(api.project.createProject, bool, values);

  const onSubmit = values => {
    let formdata = new FormData();
    for (let key in values) {
      formdata.append(key, values[key]);
    }
    formdata.append('img', values.img[0]);
    setIsSubmit(true);
    setSubmitValues(formdata);
  };
  return (
    <ProjectForm
      title={'Nouveau Projet'}
      loading={createProject.loading}
      initialState={form}
      setState={setState}
      onSubmit={onSubmit}
    />
  );
};

export default NewProject;
