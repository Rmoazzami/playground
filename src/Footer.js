import React from 'react';
import "./Footer.css"


const Footer= () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*column1*/}
                    <div className = "col">
                        <h4>Thicc</h4>
                        <ul className="List-unstyled">
                            <li>313-444-2212</li>
                            <li>Moscow</li>
                            <li>123 street</li>
                        </ul>
                    </div>
                    {/*column2*/}
                    {/*<div className = "col">*/}
                    {/*    <h4>Stuff</h4>*/}
                    {/*    <ul className="List-unstyled">*/}
                    {/*        <li>test1</li>*/}
                    {/*        <li>test2</li>*/}
                    {/*        <li>test3</li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    {/*/!*column3 *!/*/}
                    {/*<div className = "col">*/}
                    {/*    <h4>last</h4>*/}
                    {/*    <ul className="List-unstyled">*/}
                    {/*        <li>313-22</li>*/}
                    {/*        <li>Mcow</li>*/}
                    {/*        <li>et</li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    <hr/>
                    <div className="row">
                        <p className ='col-sm'>
                            &copy;{new Date().getFullYear()} Thicc memes in | All rights reserved | Terms of service | Privacy
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;