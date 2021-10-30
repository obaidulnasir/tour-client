import React from 'react';

import useFirebase from '../../hooks/useFirebase';


const Register = () => {
    const{signInWithGoogle, user}= useFirebase();
    return (
        <div>
            user email: {user.email}
            <br />
            <button onClick={signInWithGoogle}>google sign in</button>
        </div>
    );
};

export default Register;