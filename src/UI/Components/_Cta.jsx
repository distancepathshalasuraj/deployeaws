import React from "react";
import "../../assets/styles/scss/components/_cta.css"
export default function Cta(){
return (
    <>
    <div className="ctaContainer"> 
            <span className="ctaHeading">Fill in Your Details to find out the next step!</span>
            <div>
            <div className="ctaSubText1">Get Approved University</div>
            <div className="ctaSubText2">100% Placement Assistance</div>
            <form className="ctaForm">
                <table>
                    <tr>
                        <td>
                            <input type="text" name="name" placeholder="FullName"/>
                        </td>
                        <td>
                            <input type="text" name="name" placeholder="FullName"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" name="name" placeholder="FullName"/>
                        </td>
                        <td>
                            <input type="text" name="name" placeholder="FullName"/>
                        </td>
                    </tr>
                    <tr>
                        <button type="submit" className="ctaButton">Apply Now</button>
                    </tr>
                </table>
            </form>
            </div>
    </div>
    </>
);
}