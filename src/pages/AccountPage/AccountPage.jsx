import { UserForm } from 'components/Forms/UserForm/UserForm';

const AccountPage = () => {
  const wrapper = document.querySelector('body');
  wrapper.style.backgroundColor = '#DCEBF7';

  return (
    <>
      <UserForm />
    </>
  );
};

export default AccountPage;
