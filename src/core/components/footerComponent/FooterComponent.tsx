import React from 'react';
import "./FooterComponent.css"

export const FooterComponent = () => {

    return (
        <div className="container-fluid text-white bg-primary footerset mt-3">
            <div className="row">
                <div className="col-md-12 colFooter">
                    <div className="row">
                        <div className="col-md-12 ">
                            <p >&copy;2021 All Rights Reserved</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 ">
                            <p>Created by</p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-12 ">
                            <span> Giacomo Verdesca </span> - <span> Gianluca Bellafronte </span>
                        </div>
                    </div>
                    <div className="row rowLink">
                        <div className="col-md-6 colGlobalLinkSmartphone">
                            <div className="row">
                                <div className="col-md-4 colLinkSmartphone"><a href="https://www.linkedin.com/in/giacomo-verdesca-a593a2199/" target='_blank'><i className="fab fa-linkedin lin"></i></a></div>
                                <div className="col-md-4 colLinkSmartphone"><a href="https://www.instagram.com/jack.verdesca/" target='_blank'><i className="fab fa-instagram lin"></i></a></div>
                                <div className="col-md-4 colLinkSmartphone"><a href="https://it-it.facebook.com/giacomo.verdesca" target='_blank'><i className="fab fa-facebook-f lin"></i></a></div>
                            </div>
                        </div>
                        <div className="col-md-6 colGlobalLinkSmartphone">
                            <div className="row">
                                <div className="col-md-4 colLinkSmartphone"><a href="https://www.linkedin.com/in/gianluca-bellafronte-01548b1b2/" target='_blank'><i className="fab fa-linkedin lin"></i></a></div>
                                <div className="col-md-4 colLinkSmartphone"><a href="https://www.instagram.com/gianluca_bellafronte/" target='_blank'><i className="fab fa-instagram lin"></i></a></div>
                                <div className="col-md-4 colLinkSmartphone"><a href="https://it-it.facebook.com/gianluca.bellafronte" target='_blank'><i className="fab fa-facebook-f lin"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
