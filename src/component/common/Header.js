import React, { Component } from 'react';

export default class Header extends Component {

    render() {

        return (

            <nav class="navbar navbar-dark bg-primary">
                <a class="navbar-brand" href="/">
                    <p><h2 class="ui red inverted header">ONLINE COURIER MANAGEMENT APPLICATION</h2></p>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item ">
                            <a class="nav-link" href="/" ><span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="/" >Home<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/AboutUs">About Us<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="/ContactUs">Contact<span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <div class="col-sm-1" >
                        <a href="/" class="ui left aligned header dark inverted"> Logout <span class="sr-only">(current)</span></a>
                    </div>

                </div>
            </nav>

        );


    }

}