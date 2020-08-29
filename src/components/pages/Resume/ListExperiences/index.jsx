import React from 'react';
import CardExperience from './CardExperience';
import Typography from 'components/shared/Typography';

const ListExperience = ({ edit, listExperience }) => {
  return (
    <div className=" my-16 xsl:w-3/5  sm:w-11/12  bg-white m-auto border border-gray-400 p-10 sm:p-4 rounded-xlg">
      <div className="mb-2 flex-col  sm:10/11 m-auto">
        <Typography variante="h3" className="">
          Experiences
        </Typography>

        {listExperience.length > 0 &&
          listExperience.map((DbListExperiences, index) => {
            return [
              <div
                key={index}
                className={`xsl:ml-6 ${listExperience.length - 1 !== index && 'border-b border-gray-500'}`}
              >
                <CardExperience {...DbListExperiences} edit={edit} />
              </div>
            ];
          })}
      </div>
    </div>
  );
};

export default ListExperience;
