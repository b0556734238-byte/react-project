import React from 'react';
import { BankForm } from './sendRequestp/BankForm';
import { PersonalForm } from './sendRequestp/PersonalForm';
import { FamilyForm } from './sendRequestp/FamilyForm';
import { CourseForm } from './sendRequestp/CourseForm';
import { SendRequest } from './SendRequest';

export const SendRequestPage = () => {
    return <>
     {/* <Form name={'אישור'}>
        <DeclarationForm name={'אישור'}></DeclarationForm>
      </Form> */}
        <SendRequest>
            <PersonalForm />
            <FamilyForm />
            <CourseForm />
            <BankForm />
        </SendRequest>
    </>
}