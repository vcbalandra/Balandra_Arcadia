import React from 'react'

export const loader = async () => {
    try {
      const response = await fetch('/all-partners');
      return response.data;
    } catch (error) {
     console.error(error);
      return redirect('/');
    }
  };

const AllPartners = () => {
  return (
    <div>AllPartners</div>
  )
}

export default AllPartners;