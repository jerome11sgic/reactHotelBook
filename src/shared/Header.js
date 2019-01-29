import React from 'react';

export function Header() {
    return (

        <nav class="navbar navbar-dark navbar-expand-lg ">
            <div className="container">
                <a class="navbar-brand" href="#">BookWithMe</a>

                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2 bwm-search" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0 btn-bwm-search" type="submit">Search</button>
                </form>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link active" href="" >Login<span className="sr-only">test</span></a>
                        <a className="nav-item nav-link" href="">Register</a>
                    </div>
                </div>
            </div>
        </nav>

    )
}