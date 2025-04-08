import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDashboardContext } from '../pages/DashboardLayout'; 
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

const Profile = () => {
  const navigate = useNavigate();

  const { user } = useDashboardContext();

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    location: '',
    avatar: null,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        lastName: user.lastName || '',
        email: user.email || '',
        location: user.location || '',
        avatar: user.avatar || null, 
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, avatar: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('lastName', formData.lastName);
    data.append('email', formData.email);
    data.append('location', formData.location);

    if (formData.avatar) {
      data.append('avatar', formData.avatar);
    }

    try {
      const response = await customFetch.patch('/admin/update-user', data);
      if (response.data.success) {
        toast.success('Profile updated successfully');
        navigate('/dashboard');
      } else {
        toast.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error during profile update', error);
      toast.error('Error during profile update');
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Update Profile</h2>
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="avatar">Avatar</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            onChange={handleChange}
            accept="image/*"
          />
          {formData.avatar && typeof formData.avatar === 'string' ? (
            <img
              src={formData.avatar}
              alt="Avatar preview"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
          ) : (
            formData.avatar && (
              <img
                src={URL.createObjectURL(formData.avatar)}
                alt="Avatar preview"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            )
          )}
        </div>

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;