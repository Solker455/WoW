import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";

export function Register() {
    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm({});
    let message = useSelector(state => state.reg.message)
    let loading = useSelector(state => state.reg.loading)
    const dispatch = useDispatch();
    const onSubmit = input => {
        dispatch({ type: 'SET_REGISTER', payload: input });
    }
    return (
        <div className='loginForm'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input" {...register("name",
                    {
                        required: 'Поле Имя обязательное'
                    })}
                    placeholder='Ваше Имя'
                    type="text" />
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
                    placeholder='Пароль'
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
                <div className="error">{message}</div>
                <Button className='btnPrimary' type="primary" htmlType="submit" size='large' loading={loading} shape='round' onClick={() => clearErrors()}>Регистрация</Button>
            </form>
        </div>
    )
}