import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ])
    .then((results) => results.map((results) => {
      if (results.status === 'fulfilled') {
        return {
          status: results.status,
          value: results.value,
        };
      }
      return {
        status: results.status,
        value: results.reason,
      };
    }));
}
