import React from 'react';
import './styles/user-card-contact-item.css';

export const ContactInfoItem = ({
  name,
  value,
}: {
  name: string;
  value?: string;
}) => {
  if (!value) return <></>;

  return (
    <div className='contact-info__item'>
      <span className='contact-info__item-name'>{`${name}`}:</span> {`${value}`}
    </div>
  );
};
