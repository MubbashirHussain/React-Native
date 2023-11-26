import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

type BasicUserAuthType = {
  email: string;
  password: string;
};
interface SignupAuthType extends BasicUserAuthType {
  userName: string;
  id?: string | number;
}

let FirebaseSignup = (Object: SignupAuthType) => {
  return new Promise((resolve, reject) => {
    if (Object.email) return reject('Email is Required');
    if (Object.password) return reject('password is Required');
    auth()
      .createUserWithEmailAndPassword(Object.email, Object.password)
      .then(res =>
        resolve({res: res, isSuccess: true, msg: 'User Created Successfully'}),
      )
      .catch(err => reject(err));
  });
};

let FirebaseLogin = (Object: BasicUserAuthType) => {
  return new Promise((resolve, reject) => {
    if (Object.email) return reject('Email is Required');
    if (Object.password) return reject('password is Required');
    auth()
      .signInWithEmailAndPassword(Object.email, Object.password)
      .then(res =>
        resolve({res: res, isSuccess: true, msg: 'User Login Successfully'}),
      )
      .catch(err => reject({msg: err, isSuccess: false}));
  });
};

let FirebaseLogout = () => {
  return new Promise((resolve, reject) => {
    auth()
      .signOut()
      .then((e: any) => {
        resolve(e);
        // Sign-out successful.
      })
      .catch((error: any) => {
        reject(error);
        // An error happened.
      });
  });
};

const isUserLogin = () => {
  return new Promise((resolve, reject) => {
    auth().onAuthStateChanged((user: any) => {
      if (user) {
        resolve(user);
      } else {
        reject('User not Login');
      }
    });
  });
};
let FirebaseGet = (path: string, id?: string) => {
  return new Promise((resolve, reject) => {
    if (!path || path.length < 1) reject('please Enter a Right path');
    database()
      .ref(`${path}/${id ?? ''}`)
      .on('value', (snapshot: any) => {
        if (snapshot.exists()) resolve(snapshot.val());
        else reject(snapshot);
      });
  });
};

let FirebaseSet = (path: string, obj: any, id?: string) => {
  return new Promise((resolve, reject) => {
    let Tid = id ?? database().ref(`${path}`).push().key;
    database()
      .ref(`${path}/${Tid}`)
      .set({...obj})
      .then(res =>
        resolve({res, isSuccess: true, msg: 'Data Successfuly Added'}),
      )
      .catch(err => reject({msg: err, isSuccess: false}));
  });
};

let FirebaseUpdate = (path: string, id: string, obj: any) => {
  return new Promise((resolve, reject) => {
    database()
      .ref(`${path}/${id}`)
      .update({})
      .then(res =>
        resolve({res, isSuccess: true, msg: 'Data updated successfully'}),
      )
      .catch(err => reject({msg: err, isSuccess: false}));
  });
};

let FirebaseDelete = (path: string, id: string | number) => {
  return new Promise((resolve, reject) => {
    database()
      .ref(`${path}/${id}`)
      .remove()
      .then(res => resolve({res, isSuccess: true, msg: 'Data was Deleted'}))
      .catch(err => reject({msg: err, isSuccess: false}));
  });
};

export {
  FirebaseLogin,
  FirebaseSignup,
  FirebaseGet,
  FirebaseSet,
  FirebaseLogout,
  isUserLogin,
  FirebaseUpdate,
  FirebaseDelete,
};
