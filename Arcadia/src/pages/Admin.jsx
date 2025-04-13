import React, { useEffect, useState } from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import {
  Container,
  Title,
  Subtitle,
  TabWrapper,
  TabButton,
  ContentArea,
  SectionTitle,
  StyledTable,
  Select,
  SaveButton,
  ActionCell,
} from '../assets/wrappers/Admin';

const roles = ['user', 'admin', 'superAdmin'];

const Admin = () => {
  const { user } = useDashboardContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState('manageUsers');

  useEffect(() => {
    if (!user || user.role !== 'superAdmin') {
      toast.error("You don't have access to this page.");
      navigate('/dashboard');
      return;
    }

    const fetchUsers = async () => {
      try {
        const res = await customFetch.get('/admin/all-users');
        const usersData = Array.isArray(res.data) ? res.data : res.data.users || [];
        const enrichedUsers = usersData.map((u) => ({
          ...u,
          selectedRole: u.role,
        }));
        setUsers(enrichedUsers);
      } catch (err) {
        toast.error('Failed to fetch users.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [user, navigate]);

  const handleSaveRole = async (id, newRole) => {
    try {
      await customFetch.put(
        `/admin/user-update/${id}`,
        { role: newRole },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );

      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u._id === id ? { ...u, role: newRole, selectedRole: newRole } : u
        )
      );
      toast.success(`Updated role to ${newRole}`);
    } catch (err) {
      toast.error('Failed to update role');
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <Title>Super Admin Panel</Title>
      <Subtitle>Welcome, {user?.name || 'Super Admin'}!</Subtitle>

      <TabWrapper>
      <TabButton
        $isActive={activeTab === 'manageUsers'}
        onClick={() => setActiveTab('manageUsers')}>
        Manage Users
      </TabButton>
      <TabButton
        $isActive={activeTab === 'userRequests'}
        onClick={() => setActiveTab('userRequests')}>
        User Requests
      </TabButton>
      </TabWrapper>

      <ContentArea>
        {activeTab === 'manageUsers' && (
          <>
            <SectionTitle>Manage Users</SectionTitle>
            <StyledTable>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u._id}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>
                      <Select
                        value={u.selectedRole}
                        onChange={(e) => {
                          const selected = e.target.value;
                          setUsers((prevUsers) =>
                            prevUsers.map((user) =>
                              user._id === u._id
                                ? { ...user, selectedRole: selected }
                                : user
                            )
                          );
                        }}
                      >
                        {roles.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </Select>
                    </td>
                    <ActionCell>
  <div style={{ visibility: u.selectedRole !== u.role ? 'visible' : 'hidden' }}>
    <SaveButton onClick={() => handleSaveRole(u._id, u.selectedRole)}>
      Save
    </SaveButton>
  </div>
</ActionCell>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </>
        )}

        {activeTab === 'userRequests' && (
          <>
            <SectionTitle>User Requests</SectionTitle>
            <p>Coming soon... You can list pending access requests, support tickets, etc.</p>
          </>
        )}
      </ContentArea>
    </Container>
  );
};

export default Admin;