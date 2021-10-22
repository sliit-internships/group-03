import React, {Component} from 'react';


export default class NavBar extends Component {
    render () {
        return(
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/">Posts</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/FormI1">FormI1</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/FormI1A">FormI1A</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/FormI1B">FormI1B</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/FormI3A">FormI3A</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/FormI5">FormI5</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/FormI5A">FormI5A</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/FormI7">FormI7</a>
                </li>

                </ul>
                </div>
            </nav>
        </div>
        )
    }
}
  