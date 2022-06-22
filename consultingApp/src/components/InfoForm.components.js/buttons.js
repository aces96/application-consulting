import * as React from 'react';
import { Button } from '@rneui/base';





export const InfoFormButton = (props)=>{


    return (
        <Button onPress={()=> props.handleSubmit()} containerStyle={{width: '90%', marginTop: 10, elevation: 10, borderRadius: 5}} size= 'md'>
            Submit
        </Button>
    )

}