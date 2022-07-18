import React, {useState} from "react";
import {screen,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import FormField from 'components/molecules/FormField/FormField';
import {renderWithProviders} from 'helper/renderWithProviders'




describe( 'Input with Button', ()  =>{

    it('Render the component', ()=>{
        renderWithProviders(<FormField label="name" name='name' id='name'  />)
    })
    it('Properly handles value change',()=>{

    })
})