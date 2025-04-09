import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDashboardContext } from '../pages/DashboardLayout';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { Container, Heading, Form, FormRow, Label, Input, FileInput, AvatarPreview, SubmitButton, LoadingText } from '../assets/wrappers/Profile';

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
    if (localStorage.getItem('profileUpdatedSuccess')) {
      toast.success('Profile updated successfully');
      localStorage.removeItem('profileUpdatedSuccess'); 
    }

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
    } else {
      console.log('No avatar file selected');
    }

    try {
      const response = await customFetch.patch('/admin/update-user', data);

      if (response.status === 200) {
        localStorage.setItem('profileUpdatedSuccess', 'true');
        toast.success('Profile updated successfully');
        navigate('/dashboard/profile');
        window.location.reload();
      } else {
        toast.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error during profile update', error);
      toast.error('Error during profile update');
    }
  };

  if (!user) {
    return <LoadingText>Loading...</LoadingText>;
  }

  return (
    <Container>
      <Heading>Update Profile</Heading>
      <Form method="post" onSubmit={handleSubmit}>
        <FormRow>
          <Label htmlFor="name">First Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormRow>

        <FormRow>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </FormRow>

        <FormRow>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormRow>

        <FormRow>
          <Label htmlFor="location">Location</Label>
          <Input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </FormRow>

        <FormRow>
          <Label htmlFor="avatar">Profile Picture</Label>
          <FileInput
            type="file"
            id="avatar"
            name="avatar"
            onChange={handleChange}
            accept="image/*"
          />
          {formData.avatar && (typeof formData.avatar === 'string' ? (
            <AvatarPreview src={formData.avatar} alt="Avatar preview" />
          ) : (
            <AvatarPreview src={URL.createObjectURL(formData.avatar)} alt="Avatar preview" />
          ))}
        </FormRow>

        <SubmitButton type="submit">Update Profile</SubmitButton>
      </Form>
    </Container>
  );
};

export default Profile;