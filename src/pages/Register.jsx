import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../redux/auth/auth-operations'

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

export default function Register() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  


    const handleChange= e => {
        const { name, value } = e.currentTarget; 
        switch (name) {
        case 'name':
            setName(value);
        break;
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
        console.log({ name, email, password })
        dispatch(operations.register({ name, email, password }))
        setName('');
        setEmail('');
        setPassword('');
    };
        
    return (
        <div>
            <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
                <label style={styles.label}>
                    Name
                        <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={name}
                        required
                    />
                 </label>
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
                <button type="submit">Registration</button>
            </form>      
        </div>
    );  
};
