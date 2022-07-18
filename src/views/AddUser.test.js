import React, {useState} from "react";
import {screen,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import AddUser from "./AddUser";
import Dashboard from "./Dashboard";
import {renderWithProviders} from 'helper/renderWithProviders'




describe( 'Input with Button', ()  =>{

    it('Renders the components', ()=>{
        renderWithProviders(
            <> 
            <AddUser/>
            <Dashboard/>
            </>
        )
        fireEvent.change(screen.getByTestId('Name'), {target:{value: 'Grażyna'}})
        fireEvent.change(screen.getByTestId('Attendance'), {target:{value: '55%'}})
        fireEvent.change(screen.getByTestId('Average'), {target:{value: '4.5'}})
        fireEvent.click(screen.getByText('Add'))
        screen.getByText('Grażyna')


    })
})