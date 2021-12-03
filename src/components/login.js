import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";

export function Login() {
    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm({});
    let loading = false
    const dispatch = useDispatch();
    const onSubmit = input => {
        console.log(input)
        // dispatch({ type: 'SET_LOGIN', payload: input });
    }
    return (
        <div className='loginForm'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input" {...register("email",
                    {
                        required: 'Поле Email обязательное',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Введите действительный Email адрес'
                        }
                    })}
                    placeholder="Email"
                    type="text"
                />
                <input className="input" {...register("password",
                    {
                        required: 'Поле Пароль обязательное',
                        minLength: {
                            value: 6,
                            message: 'Введите пароль более 6 символов'
                        }
                    })}
                    placeholder='Password'
                    type="password" />
                <ErrorMessage errors={errors} name="email" as='div' className="error">
                    {({ messages }) =>
                        messages &&
                        Object.entries(messages).map(([message]) => (
                            { message }
                        ))
                    }
                </ErrorMessage>
                <ErrorMessage errors={errors} name="password" as='div' className="error">
                    {({ messages }) =>
                        messages &&
                        Object.entries(messages).map(([message]) => (
                            { message }
                        ))
                    }
                </ErrorMessage>
                <Button className='btnPrimary' type="primary" htmlType="submit" size='large' loading={loading} shape='round' onClick={() => clearErrors()}>Вход</Button>
            </form>
        </div>
    )
}