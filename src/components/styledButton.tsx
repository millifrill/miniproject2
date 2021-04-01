// import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {  makeStyles } from '@material-ui/core/styles';

// interface Props {
//     text: string;
//     handleClick: () => void;
//  }

// const theme = createMuiTheme({
//     overrides: {
//       MuiButton: {
//         root: {
//           fontSize: '1rem',
//           backgroundColor: '#30464d',

//         },
//       },
//     },
//   });
  
//   export default function StyledButton(props: Props) {
//     return (
//       <ThemeProvider theme={theme}>
//         <Button>props.text</Button>
//       </ThemeProvider>
//     );
//   }



const useStyles = makeStyles({
  root: {
    background: '#7f9fa7',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: '2.5rem',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px #30464d',
  },
  label: {
    textTransform: 'capitalize',
  },
});

export default function ClassesNesting() {
  const classes = useStyles();

  return (
    <Button
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
      }}
    >
      classes nesting
    </Button>
  );
}


// <button class="MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-button-19 MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge" tabindex="0" type="button"><span class="MuiButton-label">Lägg till i varukorg</span><span class="MuiTouchRipple-root"></span></button>
// const StyledButton = withStyles({
//     root: {
//       background: '#7f9fa7',
//       borderRadius: 3,
//       border: 0,
//       color: 'white',
//       height: 48,
//       padding: '0 30px',
//     },
//     '&:hover': {
//         backgroundColor: '#30464d',
//       },
//     label: {
//       textTransform: 'capitalize',
//     },
//   })(Button);

// export default function Button() {
//     return <StyledButton></StyledButton>;
//   };
