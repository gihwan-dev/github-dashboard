'use client';

import React from 'react';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import AddNewTodoFormController from '~/src/components/AddNewTodoForm/AddNewTodoFormController';
import AddNewTodoFormErrorBoundary from '~/src/components/AddNewTodoForm/AddNewTodoFormErrorBoundary';

export default function AddNewTodoForm() {
  return (
    <ErrorBoundary errorComponent={AddNewTodoFormErrorBoundary}>
      <AddNewTodoFormController />
    </ErrorBoundary>
  );
}
