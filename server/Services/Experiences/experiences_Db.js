import db from '../../Database/models';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;
export async function get_AllExperiences() {
  const experiences = db.Experience_detail.findAll({
    attributes: ['id', 'date', 'fonction', 'company', 'link'],
    include: [
      {
        model: db.Experience,
        as: 'experience',
        attributes: ['year'],
      },
      {
        model: db.List_experience,
        as: 'list_experience',
        attributes: ['description'],
      },
    ],
  });

  if (experiences) {
    return experiences;
  }

  return null;
}

export async function get_ExperiencesByName(company) {
  const experiences = db.Experience_detail.findOne({
    attributes: ['date', 'fonction', 'company', 'link', 'id'],
    where: { company: company },
    include: [
      {
        model: db.List_experience,
        as: 'list_experience',
        attributes: ['description', 'id'],
      },
      {
        model: db.Experience,
        as: 'experience',
        attributes: ['year'],
      },
    ],
  });

  if (experiences) {
    return experiences;
  }

  return null;
}

export async function createExperiencesDetails(date, fonction, company, link) {
  if (!date) {
    throw new Error('invalid argument date');
  }

  const experienceDetails = await db.Experience_detail.create({
    date: date,
    fonction: fonction,
    company: company,
    link: link,
  });

  return experienceDetails;
}
export async function updateExperiencesDetails(date, fonction, company, link, id) {
  const experienceDetail = await db.Experience_detail.update(
    {
      date: date,
      fonction: fonction,
      company: company,
      link: link,
    },
    { where: { id: id } }
  );
  if (experienceDetail) return experienceDetail;
  return null;
}
export async function createListExperiences(description, id) {
  if (!description) {
    throw new Error('invalid argument listExperiences');
  }
  if (!id) {
    throw new Error('invalid argument id');
  }
  const listExperience = await db.List_experience.create({
    description: description,
    experienceDetailId: id,
  });
  if (listExperience) return listExperience;
  return null;
}
export async function updateListExperiences(description, id) {
  const listExperience = await db.List_experience.update(
    {
      description: description,
    },
    { where: { id: id } }
  );
  if (listExperience) return listExperience;
  return null;
}
export async function createExperiences(year) {
  const experience = await db.Experience.create({
    year: year,
  });
  if (experience) return experience;
  return null;
}

export async function updateExperiences(year, id) {
  let card;
  if (id % 2 === 0) {
    card === { experience_detailsId_right: id };
  } else {
    card === { experience_detailsId_left: id };
  }
  const experience = await db.Experience.update(
    {
      year: year,
    },
    {
      returning: true,
      where: {
        [Op.or]: [card],
      },
    }
  );

  if (experience) return experience;
  return null;
}
