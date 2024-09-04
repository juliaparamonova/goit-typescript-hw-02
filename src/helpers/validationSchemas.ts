import * as Yup from 'yup';

export const searchBarSchema = Yup.object().shape({
  searchField: Yup.string().max(20, 'Too long'),
});
