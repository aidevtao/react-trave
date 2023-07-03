import React, { FC } from 'react'
import { UserLayout } from '../../layouts/userLayout';
import { SignInForm } from './SignInForm';

export const SignInPage: FC = (props) => {

  return (
    <UserLayout>
      <SignInForm />
    </UserLayout>
  )
}