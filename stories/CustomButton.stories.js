import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';

export default {
    title:"Custom Button",
    component:CustomButton
};

export const MyCustomButton = () => <CustomButton />

export const PageWithCustomButtons = () => <div>
    <Header 
        fontSize={15}
        color='#ABC'
        onMouseOver={CancelClick}/>
    <CustomButton 
        color = "#999"
        text = "Cancel"
        onClick = {CancelClick}/>
    <CustomButton 
        color = "#3F5"
        text="Ok"
        onClick = {okClick}/> 
    <CustomButton 
        color = "#F3F"
        text="Submit"/>
    <CustomButton 
        text="Menu"/>
</div>

function CancelClick(){
    alert("Cancel");
}

function okClick(){
    alert("OK");
}