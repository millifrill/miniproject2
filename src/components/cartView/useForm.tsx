// import { useState } from 'react';
// import { makeStyles } from '@material-ui/core';
// import Input from './input'

// type Props = {
//     id: number;
//     fistName: string;
//     lastName: string;
//     adress: string;
//     city: string;
//     regin: string;
//     zip: string;
//     contry: string;       
//     moblie: string;       
//     email: string;
//     validate: boolean;    
// }

export function useForm() { 
    return (
        <div></div>
    )
};
// export function useForm(initialFormValues, validateOnChange = false, validate) {
//     const [values, setValues] = useState(initialFormValues);
//     const [errors, setErrors] = useState({});

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setValues({
//             ...values,
//             [name]: value,
//         });
//         if (validateOnChange) validate({ [name]: value });
//     };

//     // const resetForm = () => {
//     //     setValues(initialFormValues);
//     //     setErrors({});
//     // };

//     return {
//         values,
//         setValues,
//         errors,
//         setErrors,
//         handleInputChange,
//         // resetForm,
//     };
// }

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& .MuiFormControl-root': {
//             width: '80%',
//             margin: theme.spacing(1),
//         },
//     },
// }));

// export function Form(props: Props) {
//     const classes = useStyles();
//     const { children, ...other } = props;
//     return (
//         <form className={classes.root} autoComplete="on" {...other}>
//             {props.children}
//         </form>
//     );
// }
