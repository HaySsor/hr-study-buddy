import React, {useState} from "react";
import {screen,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import FormField from 'components/molecules/FormField/FormField';
import { render } from 'test-utils';




describe( 'Input with Button', ()  =>{

    it('Render the component', ()=>{
        render(<FormField label="name" name='name' id='name'  />)
    })
    it('Properly handles value change',()=>{

    })
})