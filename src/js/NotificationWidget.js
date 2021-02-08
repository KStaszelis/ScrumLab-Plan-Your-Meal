import React from "react";
import { UilCheckCircle } from '@iconscout/react-unicons';
import { UilExclamationTriangle } from '@iconscout/react-unicons';
import { UilInfoCircle } from '@iconscout/react-unicons';
import { UilTimesSquare } from '@iconscout/react-unicons';


const NotificationWidget =()=> {


    return (
    <>
        <div className="n-w-container info-frame">
            <div className="helping-container">
            <UilInfoCircle className="info-circle-icon"/>
            <h2 className="info-content info-color">Masz już 99 przepisów, nieźle!</h2>
            </div>
            <div className="n-w-internal-container">
                <UilTimesSquare className="close-icon info-close-color"/>
            </div>
        </div>
        <div className="n-w-container warning-frame">
            <div className="helping-container">
            <UilExclamationTriangle className="warning-icon"/>
            <h2 className="info-content warning-color">Pamiętaj aby dodać plan!</h2>
            </div>
            <div className="n-w-internal-container">
                <UilTimesSquare className="close-icon warning-close-color"/>
            </div>
        </div>
        <div className="n-w-container check-frame">
            <div className="helping-container">
            <UilCheckCircle className="check-icon"/>
            <h2 className="info-content check-color">Świetnie, że jesteś, udanego planowania i smacznego!</h2>
            </div>
            <div className="n-w-internal-container">
                <UilTimesSquare className="close-icon check-close-color"/>
            </div>
        </div>
    </>
    )
}
export default NotificationWidget;