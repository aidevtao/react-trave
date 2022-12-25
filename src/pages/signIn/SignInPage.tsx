import React, { FC } from 'react'
import { UserLayout } from '../../layouts/userLayout';
import { SignInForm } from './SignInForm';

export const SignInPage: FC = (props) => {
  console.log(props);

  return (
    <UserLayout>
      <SignInForm />
    </UserLayout>
  )
}