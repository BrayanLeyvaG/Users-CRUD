import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function UsersForm({getData, userEdit}) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const defaultValues = {first_name:'', last_name:'', birthday:'', email:'', password:''}
    /* console.log(errors); */
    const onSubmit = data => {
        if (userEdit) {
            axios.put(`https://users-crud1.herokuapp.com/users/${userEdit.id}/`,data)
                .then(() => getData())
                .then(() => reset(defaultValues))
        }else{
              axios.post('https://users-crud1.herokuapp.com/users/',data)
                .then(() => getData())
                .then(() => reset(defaultValues))

        }
    };

    useEffect(() => {
        if(userEdit){
            reset({
                first_name: userEdit.first_name,
                last_name: userEdit.last_name,
                birthday: userEdit.birthday,
                email: userEdit.email,
                password: userEdit.password
            })
        }
    }, [userEdit])
    
  
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='input-container'>
                <label htmlFor='first_name'>First name</label>
                <input type="text" placeholder="First name" {...register("first_name", {required: true, maxLength: 80})} />
            </div>
            <div className='input-container'>
                <label htmlFor='last_name'>Last name</label>
                <input type="text" placeholder="Last name" {...register("last_name", {required: true, maxLength: 100})} />
            </div>
            <div className='input-container'>
                <label htmlFor='birthday'>Birthday</label>
                <input type="date" placeholder="birthday" {...register("birthday", {required: true})} />
            </div>
            <div className='input-container'>
                <label htmlFor='email'>Email</label>
                <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
            </div>
            <div className='input-container'>
                <label htmlFor='password'>Password</label>
                <input type="password" placeholder="password" {...register("password", {required: true})} />
            </div>

            <input type="submit" />
        </form>
    );
}