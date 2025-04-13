import React, { useEffect, useState } from 'react';
import customFetch from '../utils/customFetch';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};

export const loader = async () => {
  try {
    const response = await customFetch.get('/event/all-events');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to load events');
  }
};

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 10; 

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await customFetch.get('/event/all-events');
        setEvents(response.data.events);
        setFilteredEvents(response.data.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const currentDate = new Date();

    const filterEvents = () => {
      if (filter === 'all') {
        return events;
      }

      return events.filter((event) => {
        const eventDate = new Date(event.eventDate);

        if (filter === 'previous') {
          return eventDate < currentDate;
        } else if (filter === 'upcoming') {
          return eventDate >= currentDate;
        }
        return true;
      });
    };

    setFilteredEvents(filterEvents());
  }, [filter, events]);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const getStatus = (eventDate) => {
    const currentDate = new Date();
    const eventDateObj = new Date(eventDate);
    return eventDateObj < currentDate ? 'Previous' : 'Upcoming';
  };

  const getStatusClass = (status) => {
    return status === 'Upcoming' ? 'badge bg-success' : 'badge bg-danger';
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  return (
    <div>
      <h2>Event List</h2>

      <div>
        <select
          id="eventFilter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="form-select"
        >
          <option value="all">All Events</option>
          <option value="previous">Previous Events</option>
          <option value="upcoming">Upcoming Events</option>
        </select>
      </div>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>No.</th>
            <th>Event Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentEvents.map((event, index) => {
            const status = getStatus(event.eventDate);
            const statusClass = getStatusClass(status);
            return (
              <tr key={event._id}>
                <td>{index + 1 + (currentPage - 1) * eventsPerPage}</td>
                <td>{event.eventTitle}</td>
                <td
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '200px',
                  cursor: 'pointer'
                }}
                title={event.eventDescription} 
              >
                {event.eventDescription}
              </td>
                <td>{formatDate(event.eventDate)}</td>
                <td>
                  <span className={statusClass} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {status}
                  </span>
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
  );
};

export default AllEvents;