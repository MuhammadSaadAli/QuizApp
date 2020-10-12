import React, { useState } from 'react'


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

 
import {questionPropsTypes} from './../Types/Quiz_type'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignContent:'center',
      alignItems:'center',
      justifyContent:'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(5),
        width: theme.spacing(60),
        height: theme.spacing(50),
        padding: theme.spacing(6),

      },
      
    },
    submitButton : {
      padding : 5,
      background:  '#33ecff',
        
    },
    PaperClass : {
        backgroundColor: '#c9f6ea'
    },
  }));

    // Our Question card component in which we give type and then destructured our props directly in parameter
    
   const QuestionCard:React.FC<questionPropsTypes> = ({options,question,callBack})=> {
        const [selectedValue, setSelectedValue] = useState('')
    const  handleChange = (e:any) => {
            setSelectedValue(e.target.value)
        }
        const classes = useStyles();
        

            return (
                <div className={classes.root}>
                    
      <Paper className={classes.PaperClass} elevation={3}>
                    <div className='Question'> 
                        {question}
                    </div>
                    < br />

                    {/* We save our answer in selected values and then pass it in the callback parameter to use it in Main App Component
                        we can not pass our values directly so we make an arrow functions with 2 arguments ( event , selected values)
                        then we easily access our value from this component to main component
                    */}
                    
                    <form onSubmit={  (e:React.FormEvent<EventTarget>)=>  callBack(e,selectedValue)}> 
                    <FormControl>
                        {
                            options.map((opt : string , ind : number) => {
                                return (
                                    <div key={ind}>
                                        
                                        <RadioGroup aria-label="gender" name="gender1"  onChange={handleChange}>
                    <FormControlLabel value={opt} control={<Radio />} 
                        checked={selectedValue === opt} label={opt} />
        
                </RadioGroup>
                                   
                                    
                                    </div>
                                )
                            })
                        }
                        < br />
                        < input type='submit' className={classes.submitButton}/>
                        </FormControl>
                    </form>
                    </Paper>
                </div>
            )
    } 

    export default QuestionCard