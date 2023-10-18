import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './SignUpUser.css';


function SignUpUser() {
  const {
    handleSubmit,
    control,
    formState: { errors },    
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match');
    } else {
      alert(JSON.stringify(data, null, 2));
      console.log(data);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="label">First Name:</label>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: 'First name is required' }}
            render={({ field }) => <input {...field} />}
          />
          {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
        </div>
        <div>
          <label className="label">Last Name:</label>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: 'Last name is required' }}
            render={({ field }) => <input {...field} />}
          />
          {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
        </div>
        <div>
          <label className="label">User Name:</label>
          <Controller
            name="userName"
            control={control}
            rules={{ required: 'User name is required' }}
            render={({ field }) => <input {...field} />}
          />
          {errors.userName && <p className="error-message">{errors.userName.message}</p>}
        </div>
        <div>
          <label className="label">Email:</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => <input {...field} />}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>
        <div>
          <label className="label">Password:</label>
          <Controller
            name="password"
            control={control}
            rules={{ required: 'Password is required' }}
            render={({ field }) => <input {...field} type="password" />}
          />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>
        <div>
          <label className="label">Confirm Password:</label>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{ required: 'Confirm password is required' }}
            render={({ field }) => <input {...field} type="password" />}
          />
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
        </div>
        <div>
          <button type="submit" class="btn btn-outline-success">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpUser;
