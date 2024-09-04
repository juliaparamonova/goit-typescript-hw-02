import React from 'react';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import toast from 'react-hot-toast';
import { searchBarSchema } from '../../helpers/validationSchemas';

import clsx from 'clsx';
import s from './SearchBar.module.css';

interface SearchBarProps {
  handleSearchSubmit: (searchTerm: string) => void;
}

interface FormValues {
  searchField: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearchSubmit }) => {
  const handleSubmit = (
    values: FormValues,
    options: FormikHelpers<FormValues>
  ) => {
    if (!values.searchField) {
      toast.error('Please, type something to search');
    } else {
      handleSearchSubmit(values.searchField);
      options.resetForm();
    }
  };

  return (
    <header className={clsx(s.header)}>
      <Formik
        initialValues={{ searchField: '' }}
        onSubmit={handleSubmit}
        validationSchema={searchBarSchema}
      >
        <Form className={clsx(s.form)}>
          <Field
            name="searchField"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage name="searchField" component="p" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
