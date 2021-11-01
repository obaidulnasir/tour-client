import React from 'react';

import useFirebase from '../../hooks/useFirebase';


const Register = () => {
    const{signInWithGoogle, user}= useFirebase();
    return (
        <div>
            <div className="row text-center my-5">
                <p>{user.displayName}</p>
                <div className="btn btn-info" onClick={signInWithGoogle}><i class="bi bi-google"></i> Google SignIN</div>
            </div>
        </div>
    );
};

export default Register;