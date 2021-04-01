// import React from 'react';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import { Grid } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import { Form, useForm } from './useForm';
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
// }

export default function AddressForm () { 
    return (
        <div></div>
    )
};
    
//     const classes = useStyles();
//    //  const { handleSubmit, errors } = useForm();

//    const initialFormValues = {
//        id: 0,
//        fistName: '',
//        lastName: '',
//        adress: '',
//        city: '',
//        regin: '',
//        zip: '',
//        contry: '',       
//        moblie: '',       
//        email: '',       
//    }

//    const validate = (fieldValues = values) => {
//        let temp = {...errors} 
//         if ('firstName' in fieldValues)
//             temp.firstName = fieldValues.firstName ? '' : 'This field is required.'
//         if ('lastName' in fieldValues)
//             temp.lastName = fieldValues.lastName ? '' : 'This field is required.'
//         if ('email' in fieldValues)
//             temp.email = (/§^|.+@.+..+/).test(fieldValues.email) ? '' : 'Email is not valid.'
//         if ('mobile' in fieldValues)
//             temp.mobile = fieldValues.mobile.length> 9 ? '' : 'Telephone number is not valid.'
//         setErrors({
//             ...temp
//         })
//         if (fieldValues == values)
//         return Object.values(temp).every(x => x == '')
//     }

//    const {
//         values,
//         setValues,
//         errors,
//         setErrors,
//         handleInputChange,
//         // resetForm
//     } = useForm(initialFormValues, true, validate);

//     const handleSubmit = (e: { preventDefault: () => void; }) => {
//         e.preventDefault()
//         if (validate())
//     }

//     return (
//         // onSubmit={handleSubmit}
//         <React.Fragment> 
//             <Typography variant="h5" gutterBottom>
//                 Kunduppgifter
//             </Typography>
//             <Grid className={classes.form} container spacing={3}>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         required
//                         id="firstName"
//                         name="firstName"
//                         label="Förnamn"
//                         value={values.firstName}
//                         fullWidth
//                         autoComplete="given-name"
//                         onChange={handleInputChange}
//                         error={errors.firstName}
//                         helperText={(errors?.firstName)}
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         required
//                         id="lastName"
//                         name="lastName"
//                         label="Efternamn"
//                         value={values.lastName}
//                         fullWidth
//                         autoComplete="family-name"
//                         onChange={handleInputChange}
//                         error={errors.lastName}
//                     />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <TextField
//                         required
//                         id="address1"
//                         name="address1"
//                         label="Address"
//                         value={values.adress}
//                         fullWidth
//                         autoComplete="shipping address-line1"
//                         onChange={handleInputChange}
//                         error={errors.adress}
//                     />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <TextField
//                         id="address2"
//                         name="address2"
//                         label="C/O"
//                         value={values.adress}
//                         fullWidth
//                         autoComplete="shipping address-line2"
//                         onChange={handleInputChange}
//                         error={errors.adress}
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         required
//                         id="city"
//                         name="city"
//                         label="Ort"
//                         value={values.city}
//                         fullWidth
//                         autoComplete="shipping address-level2"
//                         onChange={handleInputChange}
//                         error={errors.city}
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         required
//                         id="region"
//                         name="region"
//                         label="Region"
//                         value={values.region}
//                         fullWidth
//                         onChange={handleInputChange}
//                         error={errors.region}
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         required
//                         id="zip"
//                         name="zip"
//                         label="Postkod"
//                         value={values.zip}
//                         fullWidth
//                         autoComplete="shipping postal-code"
//                         onChange={handleInputChange}
//                         error={errors.zip}
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         required
//                         id="country"
//                         name="country"
//                         label="Land"
//                         value={values.country}
//                         fullWidth
//                         autoComplete="shipping country"
//                         onChange={handleInputChange}
//                         error={errors.country}
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         required
//                         id="phoneNumber"
//                         name="phoneNumber"
//                         label="Telefon nummer"
//                         value={values.mobile}
//                         fullWidth
//                         autoComplete="tel"
//                         onChange={handleInputChange}
//                         error={errors.mobile}
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         required
//                         id="mail"
//                         name="mail"
//                         label="Mail"
//                         value={values.email}
//                         fullWidth
//                         autoComplete="email"
//                         onChange={handleInputChange}
//                         error={errors.email}
//                     />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <FormControlLabel
//                         control={
//                             <Checkbox
//                                 color="primary"
//                                 name="saveAddress"
//                                 value="yes"
//                             />
//                         }
//                         label="Använd den här adressen som leveransadress "
//                     />
//                 </Grid>
//             </Grid>
//         </React.Fragment>
//     );
// }

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         form: {
//             marginBlockStart: '0.5rem',
//         },
//     }),
// );
