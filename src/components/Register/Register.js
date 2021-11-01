import React from 'react';

import useFirebase from '../../hooks/useFirebase';


const Register = () => {
    const{signInWithGoogle, user}= useFirebase();
    return (
        <div>
            <div className="row w-25 mx-auto text-center my-5">
                <p className="my-5">User Name: {user.displayName}</p>
                <div className="btn btn-info" onClick={signInWithGoogle}><i class="bi bi-google"></i> Google SignIN</div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default Register;