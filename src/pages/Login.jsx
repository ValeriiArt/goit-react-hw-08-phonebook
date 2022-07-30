import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  


    const handleChange= e => {
        const { name, value } = e.currentTarget; 
        switch (name) {
        case 'email':
            setEmail(value);
            break;
        case 'password':
            setPassword(value);
            break;
        default:
            return;
        }; 
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dispatch(authOperations.logIn({email, password })))
        dispatch(authOperations.logIn({email, password }))
        setEmail('');
        setPassword('');
    };
        
    return (
        <div>
            <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
                    <label style={styles.label}>
                Email
                    <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={email}
                    required
                />
                </label>
                    <label style={styles.label}>
                Password
                    <input
                    type="pass"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    required
                />
                </label>
                <button type="submit">Log In</button>
            </form>      
        </div>
    );  
};
