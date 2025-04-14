import React, { useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';

// export const loader = async () => {
//     try {
//       const response = await customFetch.get('/all-partners');
//       return response.data;
//     } catch (error) {
//      console.error(error);
//       return redirect('/');
//     }
//   };

const AllPartners = () => {
    const [partners, setPartners] = useState([]);
    const [filteredPartners, setFilteredPartners] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const partnersPerPage = 10; 

    useEffect(() => {
      const fetchPartners = async () => {
        try {
          const response = await customFetch.get('/partner/all-partners');
          setPartners(response.data.partners);
          setFilteredPartners(response.data.partners);
        } catch (error) {
          console.error('Error fetching partners:', error);
        }
      };
  
      fetchPartners();
    }, []);

    const indexOfLastPartner = currentPage * partnersPerPage;
    const indexOfFirstPartner = indexOfLastPartner - partnersPerPage;
    const currentPartners = filteredPartners.slice(indexOfFirstPartner, indexOfLastPartner);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(filteredPartners.length / partnersPerPage);

  return (
    <div>
    <h2>All Partners</h2>

    <table className="table table-bordered mt-3">
    <thead>
      <tr>
        <th>No.</th>
        <th>Partner Name</th>
        <th>Partner Website</th>
        <th>Partner Description</th>
      </tr>
    </thead>
    <tbody>
      {currentPartners.map((partner, index) => {
        return (
          <tr key={partner._id}>
            <td>{index + 1 + (currentPage - 1) * partnersPerPage}</td>
            <td>{partner.partnerName}</td>
            <td> {partner.partnerWebsite}</td>
            <td
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '200px',
                  cursor: 'pointer'
                }}
                title={partner.partnerDescription} 
              >
                {partner.partnerDescription}
              </td>
          </tr>
        );
      })}
    </tbody>
  </table>

  <div className="pagination">
    <button
      className="btn btn-outline-success"
      onClick={() => paginate(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Previous
    </button>
    <span className="mx-2">{`Page ${currentPage} of ${totalPages}`}</span>
    <button
      className="btn btn-outline-success"
      onClick={() => paginate(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
  </div>
  )
}

export default AllPartners;